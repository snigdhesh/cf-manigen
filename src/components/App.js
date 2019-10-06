import React, { Fragment, Component } from 'react';
import '../css/App.css';
import MarkDownEditor from './MarkDownEditor';
import Header from './Header';
import Footer from './Footer';
import ManifestGenerator from './ManiGen/ManifestGenerator';

class App extends Component {
  render() {
    const styles = {
      cell: {
        "border": "0px solid #333",
        "padding": "2%",
        "margin": "2%"
      },
      title: { "marginTop": "2%" }
    }
    return (
      <Fragment>
        <Header />
        <MarkDownEditor styles={styles} />
        <ManifestGenerator styles={styles} />
        <Footer />
      </Fragment>
    );
  }
}
export default App;
