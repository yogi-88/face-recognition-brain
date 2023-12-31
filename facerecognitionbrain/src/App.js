import React, {Component} from 'react';
import Particles from 'react-particles';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';


const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      }
    }
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
          <Particles className="particles"
              params={particlesOptions}

            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*
        
    <faceRecognition />*/}
      </div>
    );
  }
}

export default App;
