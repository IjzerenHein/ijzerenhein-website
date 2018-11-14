import React, { Component } from 'react';
import Anime from './Anime';
import WordCloud from './WordCloud';
import LinkedInIcon from 'react-icons/lib/fa/linkedin';
import EnvelopeIcon from 'react-icons/lib/fa/envelope';
import GithubIcon from 'react-icons/lib/fa/github';

class App extends Component {
  render() {
    return (
      <div className="app-outer">
        <div className="app-inner">
          <div className="header">
            <Anime
              opacity={[0, 1]}
              translateY={[-100, 0]}
              delay={(t, i) => 400 + i * 6000}
              easing={'easeInOutQuad'}
              duration={1000}
            >
              <div className="header-left-column">
                <h1>Hein Rutjes</h1>
                <Anime
                  opacity={{
                    delay: 2000,
                    value: 0.5,
                  }}
                  translateX={[-1000, 0]}
                  delay={1000}
                  easing={'easeInOutQuad'}
                  duration={1000}
                >
                  <h2>Software ninja, App developer, creative</h2>
                </Anime>
              </div>
            </Anime>
            <Anime opacity={[0, 1]} delay={7000} duration={10000}>
              <div className="header-right-column">
                <a href="https://www.linkedin.com/in/hein-rutjes-97b5b08/">
                  <LinkedInIcon size={22} className="icon" />
                </a>
                <a href="https://github.com/IjzerenHein">
                  <GithubIcon size={22} className="icon" />
                </a>
                <a href="mailto:hrutjes@gmail.com">
                  <EnvelopeIcon size={22} className="icon" />
                </a>
              </div>
            </Anime>
          </div>
          <WordCloud />
          <Anime
            opacity={[0, 0.5]}
            translateY={[100, 0]}
            easing={'easeInOutQuad'}
            duration={1000}
            delay={7000}
          >
            <div className="footer">
              <h2>KvK 72827645 - TAX NL165052727B02</h2>
            </div>
          </Anime>
        </div>
        <Anime translateX={[{ value: 0 }, { value: 5000, duration: 5000 }]}>
          <div className="app-slide" />
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
