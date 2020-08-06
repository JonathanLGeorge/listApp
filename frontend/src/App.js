import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

function Rcolor(){
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        cName:'',
        jTitle: '',
        time: '',
        color: '',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInputName = this.handleInputName.bind(this);
    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.cName !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        cName:'',
        jTitle: '',
        color: '',
        key:''
      }
    })
    }
  }
  handleInputName(e){
    this.setState({
      currentItem:{
        cName: e.target.value,
        jTitle: this.state.currentItem.jTitle,
        color: Rcolor(),
        key: Date.now()
      }
    })
  }
  handleInputTitle(e){
    this.setState({
      currentItem:{
        cName: this.state.currentItem.cName,
        jTitle: e.target.value,
        color: Rcolor(),
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(cName, jTitle,color, key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.cName= cName;
        item.jTitle= jTitle;
        item.color = color;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
  rColor = () =>{
    return "#" + Math.floor(Math.random()*16777215).toString(16);
 }

 render(){
  return (
    <div>

      <h2>This is a simple items list that will generate a random colored back ground once you press (Add)</h2>
      <div className="App">
        
        <header>
          <h1>Add jobs</h1>
          <form id="job-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Company Name" value= {this.state.currentItem.cName} onChange={this.handleInputName}></input>
            <input type="text" placeholder="Job Title" value= {this.state.currentItem.jTitle} onChange={this.handleInputTitle}></input>
            <button type="submit">Add</button>
          </form>
          <p>{this.state.items.text}</p>
          
            <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
          
        </header>
      </div>
    </div>
  );
 }
}


export default App;