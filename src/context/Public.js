import React from 'react'

const PublicContext = React.createContext({
  storedText: '',
  storedOption: '',
  isRegistered: false,
  EventTextChange: () => {},
  EventOption: () => {},
  RegisteredName: () => {},
})
export default PublicContext
