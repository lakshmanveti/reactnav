import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";

import GlobalStyles from './styles/styles';

class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <GlobalStyles />
      </>
    )
  }
}

export default App

