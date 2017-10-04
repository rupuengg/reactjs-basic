import React from 'react';

export class Header extends React.Component{
  render(){
    return (
      <div className="navbar navbar-default">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><a href="#home">Home</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
