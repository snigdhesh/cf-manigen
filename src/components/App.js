import React, { Fragment } from 'react';
import '../css/App.css';
import MarkDownEditor from './MarkDownEditor';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
      <Fragment>
        <Header/>
        <MarkDownEditor/>
        <Footer/>
      </Fragment>
  );
}

export default App;
