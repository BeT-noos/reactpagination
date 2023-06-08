import React, { Component } from "react";
import './App.css';
import Pagination from './pagination';
 
class About extends Component {

constructor() {
super();
 
// an example array of items to be paged
var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'list item ' + (i+1) }));
 
this.state = {
exampleItems: exampleItems,
pageOfItems: []
};
this.onChangePage = this.onChangePage.bind(this);

}
 
onChangePage(pageOfItems) {
// update state with new page of items
this.setState({ pageOfItems: pageOfItems });
}

  render() {
    return (
     <div className="App">
  
     
<div className="container">
<div className="text-center">
<div className="title">
<h1>ABOUT PAGINATION</h1>
</div>
<div className="content">
{this.state.pageOfItems.map(item =>
<div key={item.id}>{item.name}</div>
)}

<Pagination items={this.state.exampleItems} onChangePage={this.onChangePage}  />
</div>
</div>
</div>
</div>
)
}
}
export default About;