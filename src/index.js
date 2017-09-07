import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TitleBar from './components/titleBar/titleBar';
import AboutMe from './components/aboutMe/aboutMe';
import Projects from './components/projects/projects';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socialButtons: [
        { 
          image: 'linkedin',
          imageLink: 'https://www.linkedin.com/in/mateoenterprises'
        },{
          image: 'github',
          imageLink: 'https://github.com/MateoEnterprises'
        },{
          image: 'facebook',
          imageLink: 'https://www.facebook.com/mathew.thompson2'
        }
      ]
    }
  }

  render(){
    return (
      <div>
        <TitleBar socialButtons={this.state.socialButtons}/>
        <AboutMe/>
        <Projects/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));