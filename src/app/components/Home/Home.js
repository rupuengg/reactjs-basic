import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component{
  render(){
    console.log(this.props);
    var text = "Somthing!";
    return (
      <div>
        In a Home component
        <p>{text}</p>
        <p>Your name is {this.props.name}, your age is {this.props.age}</p>
        <p>User object => name: {this.props.user.name}</p>
        <div>
          <h4>Hobbies</h4>
          <ul>
            {this.props.user.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
};
