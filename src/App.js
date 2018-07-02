import React from 'react';

import ToDoBanner from './components/ToDoBanner';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import ToDoFilter from './components/ToDoFilter';
import ToDoCatalogForm from './components/ToDoCatalogForm';
import ToDoCatelog from './components/ToDoCatelog';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todo:[
        { name:"Art", items: [
            { item: 'Work on glazing technique', isDone:false },
            { item: 'Prank call Dali and hang up',isDone:true },
            { item: 'Prepare new Masonite panels',isDone:true },
            { item: 'Purchase sable brush',isDone:true }]
        },
        { name:"Music", items: [
            { item: 'Work on Symphony', isDone:false },
            { item: 'Finish Berklee class',isDone:true },
            { item: 'Practice guitar', isDone:true },
            { item: 'Build new studio', isDone:true }]
        },
        { name:"Writing",items: [
            { item: 'Finish Oldtown structure', isDone:false },
            { item: 'Work on Suitcase middle part', isDone:true },
            { item: 'Puchase some index cards', isDone:true }]
        }
      ],filter:[
            { keyword:'', Status:"SHOW_ALL" }],
              selectedCatelog:"0"
    };

    // ES6 classes do not autobind 
    this.updateItems = this.updateItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.filterItem = this.filterItem.bind(this);
    this.searchItem = this.searchItem.bind(this);
    this.AddCatalog = this.AddCatalog.bind(this);
    this.setSelectedCatalog = this.setSelectedCatalog.bind(this);
  }
  
  updateItems(newItem) {
  
    var item = {item:newItem,isDone:false};
  
    var newtodo = this.state.Todo;
    var allItems = this.state.Todo[this.state.selectedCatelog].items.concat([item]);
    newtodo[this.state.selectedCatelog].items = allItems;
    this.setState({
      Todo: newtodo
    });
  }
  
  deleteItem(index) {
    var newtodo = this.state.Todo;
    var allItems = this.state.Todo[this.state.selectedCatelog].items.slice(); //copy array
    allItems.splice(index, 1); //remove element
    newtodo[this.state.selectedCatelog].items = allItems;
    this.setState({
      Todo: newtodo
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
  
  AddCatalog(newCatalog) {
    var Catalog = {name:newCatalog,items:[{item:'New todo item',isDone:false}]};
    var newtodo = this.state.Todo.concat([Catalog]);
    this.setState({
      Todo: newtodo
    });
  }
  
  setSelectedCatalog(index) {
    // Don't modify state directly, but this below isn't needed at all?
    // this.state.selectedCatelog = index;
    this.setState({
      selectedCatelog: index
    });
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-xs-3">
                      <ToDoCatalogForm onFormSubmit = {this.AddCatalog} />
                      <ToDoCatelog selectedID = {this.state.selectedCatelog} onSelected={this.setSelectedCatalog} Todos = {this.state.Todo} />
        </div>
        <div className="col-xs-8">
          <ToDoBanner/>
          <ToDoFilter onFilter = {this.filterItem} onSearch = {this.searchItem} filter={this.state.filter}/>
          <ToDoForm onFormSubmit = {this.updateItems} />
          <ToDoList  items = {this.state.Todo[this.state.selectedCatelog].items} filter = {this.state.filter} onDelete={this.deleteItem}/>
        </div>
      </div>
    );
  }
};
 
export default App;