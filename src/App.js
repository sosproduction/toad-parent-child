import React from 'react';

import TaskBanner from './components/TaskBanner';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import ProjectForm from './components/ProjectForm';
import Project from './components/Project';
import CalendarHeatmap from 'react-calendar-heatmap';
import Moment from 'react-moment';
import 'moment-timezone';
import axios from 'axios';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    /*
    this.state = {
         Todo: [],
     }
     axios.get('tasks.json') 
      .then(res => {
          this.setState({ Todo: res.data });  
     });
    */

    
    this.state = {
      Task:[
        { name:"Art", items: [
            { item: 'Work on glazing technique', isDone: false, dateCompleted: "" },
            { item: 'Prank call Dali and hang up', isDone:true, dateCompleted: "07/15/2018" },
            { item: 'Prepare new Masonite panels', isDone:true, dateCompleted: "07/15/2018" },
            { item: 'Purchase sable brush', isDone:true, dateCompleted: "07/15/2018" }]
        },
        { name:"Music", items: [
            { item: 'Work on Symphony', isDone:false, dateCompleted: "" },
            { item: 'Finish Berklee class',isDone:true, dateCompleted: "07/12/2018" },
            { item: 'Practice guitar', isDone:true, dateCompleted: "07/10/2018" },
            { item: 'Build new studio', isDone:true, dateCompleted: "07/10/2108" }]
        },
        { name:"Writing",items: [
            { item: 'Finish Oldtown structure', isDone:false, dateCompleted: "" },
            { item: 'Work on Suitcase middle part', isDone:true, dateCompleted: "07/08/2018" },
            { item: 'Puchase some index cards', isDone:true, dataCompleted: "07/08/2018" }]
        }
      ],filter:[
            { keyword:'', Status:"SHOW_ALL" }],
              selectedProject:"0"
    };
  

    console.log(this.state);

    // ES6 classes do not autobind 
    this.updateItems = this.updateItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.filterItem = this.filterItem.bind(this);
    this.searchItem = this.searchItem.bind(this);
    this.AddProject = this.AddProject.bind(this);
    this.setSelectedProject = this.setSelectedProject.bind(this);
  }
  
  updateItems(newItem) {
  
    var item = {item:newItem,isDone:false};
  
    var newtask = this.state.Task;
    var allItems = this.state.Task[this.state.selectedProject].items.concat([item]);
    newtask[this.state.selectedProject].items = allItems;
    this.setState({
      Task: newtask
    });
  }
  
  deleteItem(index) {
    var newtask = this.state.Task;
    var allItems = this.state.Task[this.state.selectedProject].items.slice(); //copy array
    allItems.splice(index, 1); //remove element
    newtask[this.state.selectedProject].items = allItems;
    this.setState({
      Task: newtask
    });
  }
  
  filterItem(e) {  
    // Don't change state directly
    // this.state.filter[0].Status = e.target.value;
    this.setState({
      filter: [{Status: e.target.value}]
    });
  }

  searchItem(e) {
    // Don't change state directly
    // this.state.filter[0].keyword = e.target.value;
    this.setState({
      filter: [{keyword: e.target.value}]
    });
  }
  
  AddProject(newProject) {
    var Project = {
      name: newProject,
      items:[{
        item:'New task item',
        isDone:false}
      ]};
      
    var newtask = this.state.Task.concat([Project]);
    this.setState({
      Task: newtask
    });
  }
  
  setSelectedProject(index) {
    // Don't modify state directly, but this below isn't needed at all?
    // this.state.selectedCatelog = index;
    this.setState({
      selectedProject: index
    });
  }

  
  render() {
    return (

      <div className="row">


           <Moment interval={30000}>
                1976-04-19T12:59-0500
            </Moment>


        <div className="col-xs-3">
            <ProjectForm onFormSubmit = {this.AddProject} />
            <Project selectedID = {this.state.selectedProject} onSelected={this.setSelectedProject} Tasks = {this.state.Task} />
        </div>
        <div className="col-xs-8">
          <TaskBanner/>
          <TaskFilter onFilter = {this.filterItem} onSearch = {this.searchItem} filter={this.state.filter}/>
          <TaskForm onFormSubmit = {this.updateItems} />
          <TaskList items = {this.state.Task[this.state.selectedProject].items} filter = {this.state.filter} onDelete={this.deleteItem}/>
        </div>

        <CalendarHeatmap
          startDate={new Date('2018-01-01')}
          endDate={new Date('2018-12-31')}
          values={[
            { date: '2018-07-01', count: 1 },
            { date: '2018-02-22', count: 2 },
            { date: '2018-06-30', count: 3 },
            { date: '2018-07-22', count: 4 }
          ]}
           classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }
            return `color-scale-${value.count}`;
          }}
        />

      </div>
    );
  }
};
 
export default App;