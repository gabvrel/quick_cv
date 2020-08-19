import React from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import Container from '@material-ui/core/Container';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Container >
        <Body />
      </Container>
    </div>
  );
}

export default App;
