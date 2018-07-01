import React from 'react';


class ToDoCatelog extends React.Component {

  constructor(props) {
    super(props);
   
    // ES6 classes do not autobind
    this.changeTodo = this.changeTodo.bind(this);
    this.checkActive = this.checkActive.bind(this);
  }

  changeTodo(e) {
    this.props.onSelected( e.currentTarget.dataset.id);
  }
  
  checkActive(i) {

    if (i === this.props.selectedID)
    {
      return "list-group-item active";
    }
    else
    {
      return "list-group-item ";
    }
  }
  
  render() { 
  
    // var selectedID = this.props.selectedID;
    var allitems =this.props.Todos;
    
    return <div className="list-group">
    {
      allitems.map(function(item,i){ 
      var _class = "";
      if (i === this.props.selectedID)
    {
      _class =  "list-group-item active";
    }
    else
    {
      _class =  "list-group-item ";
    }
      return (
        <button key={i} data-id={i} className={_class} onClick={this.changeTodo} ><span className="badge" >{item.items.length}</span>{item.name}</button>
        // This will revert to a href once router is in place.  made into button to satsify lint for now
        // <a href="#" key={i} data-id={i} className={_class} onClick={this.changeTodo} ><span className="badge" >{item.items.length}</span>{item.name}</a>
      )
    },this)}</div>;
  }
};

export default ToDoCatelog;