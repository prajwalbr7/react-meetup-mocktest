import styled from 'styled-components'

export const ContainerSub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 30px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 350px;
  padding: 10px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  color: #475569;
`
export const Input = styled.input`
  width: 50%;
  height: 30px;
  margin-bottom: 20px;
  outline: none;
  border-width: 1px;
  border-radius: 2px;
  padding-left: 10px;
`
export const Select = styled.select`
  width: 50%;
  height: 30px;
  margin-bottom: 30px;
  outline: none;
  border-width: 1px;
  border-radius: 2px;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  line-height: 1.8;
`
export const Button = styled.button`
  width: 20%;
  height: 30px;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  background-color: #2563eb;
  color: #ffffff;
  border-width: 0px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #ff0b37;
`
