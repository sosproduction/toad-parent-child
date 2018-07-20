import React from 'react';
import Task from './Task';


var placeholder = document.createElement("li");
placeholder.className = "placeholder";


class TaskList extends React.Component {
  constructor(props) {
    super(props);
 
    // ES6 classes do not autobind
    this.Remove = this.Remove.bind(this);
    this.DragStart = this.DragStart.bind(this);
    this.DragEnd = this.DragEnd.bind(this);
    this.DragOver = this.DragOver.bind(this);
  }

  Remove(e) {
     this.props.onDelete(e);
  }

  DragStart(e){
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
  }
  
  DragEnd(e){
    this.dragged.style.display="";
    var IshasNode = false
    
    Array.prototype.forEach.call (this.dragged.parentNode.childNodes, function (node) {
      if(node.className === "placeholder")
              IshasNode = true;

    } );
    if(!IshasNode)
    return;
    this.dragged.parentNode.removeChild(placeholder);
    var data = this.props.items;
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    if(from < to) to--;
    if(this.nodePlacement === "after") to++;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({data: data});  
  }
  
  DragOver(e) {

    e.preventDefault();
    this.dragged.style.display = "none";
    
    if(e.target.className === "placeholder") return;
    this.over = e.target;
    // Inside the dragOver method
    var relY = e.clientY - this.over.offsetTop;
    var height = this.over.offsetHeight / 2;
    var parent = e.target.parentNode;
    
    if(relY > height) {
      this.nodePlacement = "after";
      parent.insertBefore(placeholder, e.target.nextElementSibling);
    }
    else if(relY < height) {
      this.nodePlacement = "before"
      parent.insertBefore(placeholder, e.target);
    }
  }
  
  render() {
    
    var createItem = function(itemText, i) {
    
      return (
        <Task 
          key={i} 
          value={i} 
          onDragEnd={this.DragEnd}
          onDragStart={this.DragStart} 
          onRemove = {this.Remove}>{itemText}
        </Task>
      );
    };

    var allitems = this.props.items;
          // Here is the filter function 
    var status = this.props.filter[0].Status;

    switch (status) {
      case 'false':
        allitems = allitems.filter(t => !t.isDone)
        break;

      case 'true':
        allitems = allitems.filter(t => t.isDone)
        break;

      default: 
        // do nothing
    };

    // Here is the search function 
    var queryText = this.props.filter[0].keyword;
   
    if(queryText){
      var queryResult=[];
      allitems.forEach(function(item){
        if(item.item.toLowerCase().indexOf(queryText) !== -1)
        queryResult.push(item);
      });
      return <ul onDragOver={this.DragOver}>{queryResult.map(createItem,this)}</ul>;
    }

    return <ul onDragOver={this.DragOver}>{allitems.map(createItem,this)}</ul>;
  }
};
  
export default TaskList;