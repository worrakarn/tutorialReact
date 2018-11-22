import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {id: 1, name: 'Max', age:28},
      {id: 2, name: 'Art', age:26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons:[
  //       {name: newName, age:28},
  //       {name: 'Art', age:26}
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons:persons})
  }

  togglePersonsHandler = () => {
    let doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let person = null;

    if(this.state.showPersons){
      person = (
        <div>
          {this.state.persons.map((person, index)=>{
            return <Person
              click={()=>this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event)=>this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
      <h1>Hi, I'm React App</h1>
      <button style={style} onClick={this.togglePersonsHandler}>Hind</button>
      {person}
      </div>
    )
  }
}

export default App
