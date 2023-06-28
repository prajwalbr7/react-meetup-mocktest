import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: ${props => (props.isRegistered ? '45px' : '35px')};
  font-weight: bold;
  color: ${props => (props.isRegistered ? '#2563eb' : '#475569')};
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: ${props => (props.isRegistered ? '25px' : '20px')};
  font-weight: ${props => (props.isRegistered ? '600' : '500')};
  color: #334155;
`
export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  width: 80px;
  height: 30px;
  text-align: center;
  border-width: 0px;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`
export const ImageSize = styled.img`
  height: 400px;
  margin: 30px;
`
