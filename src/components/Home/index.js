import {Component} from 'react'
import {Link} from 'react-router-dom'
import PublicContext from '../../context/Public'

import Header from '../Header'
import {
  HomeContainer,
  Heading,
  Paragraph,
  Button,
  ImageSize,
} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <PublicContext.Consumer>
        {value => {
          const {storedText, storedOption, isRegistered} = value
          return (
            <>
              {isRegistered ? (
                <>
                  <Header />
                  <HomeContainer>
                    <Heading isRegistered>Hello {storedText}</Heading>
                    <Paragraph isRegistered>
                      Welcome to {storedOption}
                    </Paragraph>

                    <ImageSize
                      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png "
                      alt="meetup"
                    />
                  </HomeContainer>
                </>
              ) : (
                <>
                  <Header />
                  <HomeContainer>
                    <Heading className="">Welcome to Meetup</Heading>
                    <Paragraph>Please register for the topic</Paragraph>
                    <Link to="/register">
                      <Button type="button">Register</Button>
                    </Link>

                    <ImageSize
                      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png "
                      alt="meetup"
                    />
                  </HomeContainer>
                </>
              )}
            </>
          )
        }}
      </PublicContext.Consumer>
    )
  }
}
export default Home
