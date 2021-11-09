// import './App.css';
import React from 'react';

function Member(props) {

 console.log(props);

  return (
    <div className="Member">
        <h1>
          Name: {props.details.name}
        </h1>
        <h2>
          Email: {props.details.email}
          Role: {props.details.role}
        </h2>
    </div>
  );
}

export default Member;
