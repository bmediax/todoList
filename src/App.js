import React, {Component} from "react"
import "./styles.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.users
    }
    this.addTask = this.addTask.bind(this)
    this.deployUser = this.deployUser.bind(this)
  }

  addTask = () => {
    const newUser = {
      id: 4,
      name: "boe",
      status: "nahnah",
      date: "11/11/11"
    }
    const userData = [...this.state.user]
    userData.push(newUser)
    this.setState({user: userData})
  }

  deployUser = event => {
    if ( event.key.id === "3" ) {

    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="layout">
          <article>
            <span id="search">
              <input type="text" placeholder="I want to..." onChange={this.deployUser} />
              <input type="submit" onClick={this.addTask} />
            </span>
          </article>
        </div>
        {this.state.user.map(users => (
          <section key={users.id}>
            <h1>{users.name}</h1>
            <p>{users.status}</p>
            <label>{users.date}</label>
          </section>
        ))}
      </React.Fragment>
    )
  }
}

export default App
