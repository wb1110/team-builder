import React, {   useState  } from 'react';

function Form() {
  const [formValues, setFormValues] = useState({name: "", email: "", role: ""});
  const [team, setTeam] = useState([]);

  const submit = (evt) => {
    evt.preventDefault();
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
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
        <form onSubmit={submit}>
          <label>Name
            <input 
              value={formValues.name} 
              name="name" 
              type="text" 
              onChange={change} 
            />
          </label>
          <label>Email
            <input 
              value={formValues.email} 
              name="email" 
              type="text" 
              onChange={change} 
            />
          </label>
          <label>Role
            <select value={formValues.role} name="role" onChange={change}>
              <option value="">Select a Role</option>
              <option value="Junior Developer">Junior Developer</option>
            </select>
          </label>
          <input value="Submit" type="submit"  />
          
        </form>
      </header>
    </div>
  );
}

export default Form;
