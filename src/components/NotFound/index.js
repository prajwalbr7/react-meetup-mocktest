import {Container, Image} from './styledComponents'

const NotFound = () => (
  <Container>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <h1>Page Not Found</h1>
    <p>We are sorry, the page you requested could not be found.</p>
  </Container>
)
export default NotFound
