import React from "react";
import { render } from 'react-dom';

import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Home } from './components/Home/Home';

class App extends React.Component{
  render(){
    var user = {
      name: 'Raj',
      hobbies: ['Sports', 'Reading']
    };
    return (
      <div className="main-box">
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Home name={'Amit'} age={38} user={user}>
                <p>This is a paragraph.</p>
              </Home>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
