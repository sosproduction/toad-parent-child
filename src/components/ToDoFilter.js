import React from 'react';


class ToDoFilter extends React.Component {
  constructor(props) {
    super(props);

    // ES6 classes do not autobind
    this.isActive = this.isActive.bind(this);
  }

  isActive(value) {
    return 'btn '+((value===this.props.filter[0].Status) ?'btn-primary':'default');
  }

  render() {
   var onFilter1 = this.props.onFilter;
   var onSearch1 = this.props.onSearch;
      return(
        <div className="row">
            <div className="col-xs-7">
              <div id="todo-filter" className="input-group">
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button>
                </span>
                <input  type="search" className="form-control" ref='filter' onChange={onSearch1} placeholder="Search" ></input>
              </div>
            </div>
            <div className="col-xs-5">
              <ul className="nav nav-pills todo-filter">
                <li><button onClick={onFilter1} className={this.isActive('SHOW_ALL')} value="SHOW_ALL">All</button></li>
                <li><button onClick={onFilter1} className={this.isActive('false')} value="false">Incomplete</button></li>
                <li><button onClick={onFilter1} className={this.isActive('true')} value="true">Complete</button></li>
              </ul>
            </div>
          </div>
        ); 
  }
};
  
export default ToDoFilter;