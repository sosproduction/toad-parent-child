import React from 'react';


class Task extends React.Component {
  constructor(props) {
    super(props);
 
    // ES6 classes do not autobind
    this.ChangeHandler = this.ChangeHandler.bind(this);
    this.RemoveHandler = this.RemoveHandler.bind(this);
    this.DragEndHandler = this.DragEndHandler.bind(this);
    this.DragStartHandler = this.DragStartHandler.bind(this);
  }

  ChangeHandler(e) {
    this.setState({
      value: e.target.checked
    });
    this.props.children.isDone = e.target.checked;
  }
  
  RemoveHandler() {
     this.props.onRemove(this.props.value);
  }
  
  DragEndHandler(e) {
      this.props.onDragEnd(e);
  }
  
  DragStartHandler(e) {
      this.props.onDragStart(e);
  }
  
  render() {
  
    var _style = "line-through";
    if(!this.props.children.isDone)
    _style ="none";
    return (
      <li data-id = {this.props.value} 
          key = {this.props.value}
          draggable = "true" 
          onDragEnd={this.DragEndHandler}
          onDragStart={this.DragStartHandler}>
          <button type="button" className="close pull-right" aria-hidden="true" onClick={this.RemoveHandler}>&times;</button>
          <input type="checkbox" onChange={this.ChangeHandler} defaultChecked={this.props.children.isDone} /><span style={{"textDecoration": _style}}>{this.props.children.item}</span>
      </li>
    );
  }
};

export default Task;