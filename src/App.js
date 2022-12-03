
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newItem: '',
      list: []
    }
  }

  //adding to do tasks
  addItem() {
    //create items with an unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }
    //copy of current list
    const list = [...this.state.list]
    //adding item into list
    list.push(newItem)
    //update state
    this.setState({
      list,
      newItem: ''

    })

  }
  //updating list
  updateList(key, value) {
    this.setState({
      [key]: value
    })
  }
  //delete tasks
  deleteItem(id) {
    //copy of current list
    const list = [...this.state.list]

    const updatedList = list.filter(item => item.id !== id)
    this.setState({
      list: updatedList
    })

  }







  render() {
    return (
      <div className='container'>
        <h1 className='text-white mt-2 text-center'>TO DO List</h1>
        <div className='container card mt-4' style={{ width: "40rem" }}>

          <div className='card-body'>

            <h3 className='text-gray-600 p-1 '>Add your task</h3>

            <input type='text' placeholder='Type your task' className=' form-control border border-secondary'
              value={this.state.newItem}
              onChange={e => this.updateList('newItem', e.target.value)}
            />

            <button className='btn btn-secondary mt-2' onClick={() => this.addItem()}>Add</button> <br />

            <ol className='text-slate-100 bg-slate-500 mt-3'>

              {this.state.list.map(item => {
                return (
                  <li className='text-slate-100' key={item.id} >
                    {item.value}

                    <button className='rounded-full m-2 btn btn-danger' onClick={() => this.deleteItem(item.id)}>x</button>
                  </li>
                );
              })}

            </ol>

          </div>









        </div>
      </div>
    );
  }
}

export default App;
