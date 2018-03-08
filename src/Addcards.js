import React from "react"

class Addcards extends React.Component {
  state = {name: ""};

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.name)
    this.setState({ name: ""})
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render(){
    const {name} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input 
        value = {name}
        name = "name"
        onChange = {this.handleChange}
        required 
        placeholder="Add an Card"/>
      </form>
      <button>Delete</button>
      </div>
    )
  }

}

export default Addcards;