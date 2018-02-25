import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import Anime from './Anime';
import Word3D from './Word3D';
import LinkedInIcon from 'react-icons/lib/fa/linkedin';
import EnvelopeIcon from 'react-icons/lib/fa/envelope';
import GithubIcon from 'react-icons/lib/fa/github';

const styles = {
  default: {
    fontFamily: 'sans-serif',
    fontSize: 30,
    fontStyle: 'italic',
    padding: 4
  },
  large: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  small: {
    fontSize: 16
  }
}

const words = {
  large: [
    'react-native',
    'Javascript',
    'React.js',
    'Arion Run'
  ],
  normal: [
    'iOS',
    'Android',
    'Objective-C',
    'Animations',
    'Java',
    'Github',
    'Native',
    'Full stack',
    'Creative',
    'Architect',
    'Bitbucket',
    'Firebase',
    'Circle-CI',
    'autolayout.js',
    'node-web-bluetooth',
    'react-tag-cloud',
    'Node.js',
    'Web Bluetooth',
    'famous',
    'HTML',
    'CSS',
    'ES6',
    'Async/await',
    'eslint',
    'Flow-Xpert',
    'FlowX',
    'UX',
    'Mocha',
    'C++',
    'SQL',
    'YAML',
    'XCode',
    'Rouwcollectie',
    'Git',
    'TDD'
  ],
  small: [
    'Cordova',
    'MFC',
    '.NET',
    'VBA',
    'Win-CE',
    'Eindhoven',
    'Strijp-S'
  ]
};

class AppWordCloud extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 20000);
  }

  renderWords() {
    const result = [];
    for (const key in words) {
      const style = styles[key];
      words[key].forEach((word) => {
        result.push(
          <Word3D key={word} style={style} showDelay={2000 + (result.length * 100)}>
            {word}
          </Word3D>
        );
      });
    }
    return result;
  }

  render() {
    return (
      <TagCloud 
        className='cloud'
        style={styles.default}>
        {this.renderWords()}
      </TagCloud>
    );
  }
};

class App extends Component {
  render() {
    return (
      <div className='app-outer'>
        <div className='app-inner'>
          <div className='header'>
            <Anime 
              opacity={[0, 1]}
              translateY={[-100,0]}
              delay={(t, i) => 400 + (i * 6000)}
              easing={'easeInOutQuad'}
              duration={1000}>
              <div className='header-left-column'>
                <h1>Hein Rutjes</h1>
                <Anime 
                  opacity={{
                    delay: 2000,
                    value: 0.5
                  }}
                  translateX={[-1000, 0]}
                  delay={1000}
                  easing={'easeInOutQuad'}
                  duration={1000}>
                  <h2>App developer, professional, creative</h2>
                </Anime>
              </div>
            </Anime>
            <Anime 
              opacity={[0, 1]}
              delay={7000}
              duration={10000}>
              <div className='header-right-column'>
                <a href='https://www.linkedin.com/in/hein-rutjes-97b5b08/'><LinkedInIcon size={22} className='icon' /></a>
                <a href='https://github.com/IjzerenHein'><GithubIcon size={22} className='icon'/></a>
                <a href='mailto:hrutjes@gmail.com'><EnvelopeIcon size={22} className='icon' /></a>
              </div>
            </Anime>
          </div>
          <AppWordCloud />
        </div>
        <Anime 
          translateX={[
            {value: 0},
            {value: 5000, duration: 5000}
          ]}>
          <div className='app-slide' />
        </Anime>
      </div>
    );
  }
}

/*
<Anime 
                opacity={{
                  delay: 4000,
                  value: 0.5
                }}
                translateX={[1000, 0]}
                delay={3000}
                easing={'easeInOutQuad'}
                duration={1000}>
                <h2>Open source enthusiast, creative, kind</h2>
              </Anime>
              <h1>IjzerenHein</h1>
*/
export default App;
