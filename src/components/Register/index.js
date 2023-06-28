import {Component} from 'react'
import PublicContext from '../../context/Public'
import './index.css'
import {
  ContainerSub,
  FormContainer,
  Heading,
  Input,
  Select,
  Label,
  Button,
  ErrorMessage,
} from './styledComponents'
import Header from '../Header'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    text: '',
    optionText: topicsList[0].displayText,
    error: '',
    active: false,
  }

  ChangeText = event => {
    this.setState({text: event.target.value})
  }

  ChangeOption = event => {
    this.setState({optionText: event.target.value})
  }

  renderErrorMessage = () => {
    const {error} = this.state
    return <ErrorMessage>{error}</ErrorMessage>
  }

  renderContent = () => (
    <PublicContext.Consumer>
      {value => {
        const {EventTextChange, EventOption, RegisteredName} = value
        const {text, optionText, active} = this.state
        const Submit = event => {
          event.preventDefault()
          const name = 'Please enter your name'
          if (text === '') {
            this.setState({active: true, error: name})
          } else {
            this.setState({error: ''})
            EventTextChange(text)
            EventOption(optionText)
            RegisteredName()
            const {history} = this.props
            history.replace('/')
          }
        }
        return (
          <ContainerSub>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <FormContainer onSubmit={Submit}>
              <Heading>Let us join</Heading>
              <Label htmlFor="text">NAME</Label>
              <Input
                id="text"
                type="text"
                onChange={this.ChangeText}
                value={text}
              />
              <Label htmlFor="topic">TOPICS</Label>
              <Select
                id="topic"
                onChange={this.ChangeOption}
                value={optionText}
              >
                {topicsList.map(eachItem => (
                  <option key={eachItem.id}>{eachItem.displayText}</option>
                ))}
              </Select>
              <Button type="submit">Register Now</Button>
              {active ? this.renderErrorMessage() : null}
            </FormContainer>
          </ContainerSub>
        )
      }}
    </PublicContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        <div className="Container">{this.renderContent()}</div>
      </>
    )
  }
}
export default Register
