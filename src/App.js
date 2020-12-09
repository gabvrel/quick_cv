import React from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import { Helmet } from "react-helmet";
import Container from '@material-ui/core/Container';
import './App.scss';

const TITLE = "Gabriel Espinosa"

function App() {
  return (
    <>
    <Helmet>
      <title>{ TITLE }</title>
    </Helmet>
    <div className="App">
      <Header />
      <div style={{backgroundColor: "#f5f5f5"}}>
      <Container >
        <Body />
      </Container>
      </div>
    </div>
    </>
  );
}

export default App;
