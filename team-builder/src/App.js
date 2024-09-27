import './App.css';
import React, {   useState  } from 'react';
import Form from './Form';
import Member from './Member';

function App() {

  const [formValues, setFormValues] = useState({name: "", email: "", role: "", entitled:false});
  const [team, setTeam] = useState([]);

  
  const submit = (evt) => {
    evt.preventDefault();
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      entitled: formValues.entitled
    }
    setTeam(team.concat(newMember));
    setFormValues({ ...formValues, name: "", email: "", role: "", entitled:false});
  }

  

  const change = (evt) => {
    const {name, value, type, checked} = evt.target;
    const updatedValues = type === 'checkbox' ? checked : value;
    setFormValues({ ...formValues, [name]: updatedValues})
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form formValues={formValues} team={team} submit={submit} change={change}/>
        {team.map(member => {
          return (
            <Member key={member.name} details={member}/>
          )
          })
        }
      </header>
    </div>
  );
}

export default App;
