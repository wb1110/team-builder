// import './App.css';
import React, {   useState  } from 'react';
import Form from './Form';

function App() {

  const [formValues, setFormValues] = useState({name: "", email: "", role: ""});
  const [team, setTeam] = useState([]);

  
  const submit = (evt) => {
    evt.preventDefault();
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeam(team.concat(newMember));
    setFormValues({ ...formValues, name: "", email: "", role: ""});
  }

  const change = (evt) => {
    const {name, value} = evt.target;
    setFormValues({ ...formValues, [name]: value})
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form formValues={formValues} team={team} submit={submit} change={change}/>
      </header>
    </div>
  );
}

export default App;
