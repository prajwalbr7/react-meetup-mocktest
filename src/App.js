import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import PublicContext from './context/Public'
import NotFound from './components/NotFound'

// These are the lists used in the application. You can move them to any component needed.

class App extends Component {
  state = {
    storedText: '',
    storedOption: '',
    isRegistered: false,
  }

  EventTextChange = text => {
    this.setState({storedText: text})
  }

  EventOption = option => {
    this.setState({storedOption: option})
  }

  RegisteredName = () => {
    this.setState({isRegistered: true})
  }

  render() {
    const {storedText, storedOption, isRegistered} = this.state
    console.log(storedText)
    console.log(storedOption)
    return (
      <PublicContext.Provider
        value={{
          storedText,
          storedOption,
          isRegistered,
          EventTextChange: this.EventTextChange,
          EventOption: this.EventOption,
          RegisteredName: this.RegisteredName,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <NotFound />
        </Switch>
      </PublicContext.Provider>
    )
  }
}

export default App
