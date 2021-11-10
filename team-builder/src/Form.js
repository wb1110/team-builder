import React from 'react';

function Form(props) {
  const formValues = props.formValues;
  const change = props.change;
  const submit = props.submit;
  
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
              <option value="Senior Developer">Senior Developer</option>
            </select>
          </label>
          <label>Is Entitled?
            <input 
            name="entitled" 
            type="checkbox" 
            onChange={change} 
            checked={formValues.entitled} />
          </label>
          <input value="Submit" type="submit"  />
          
        </form>
      </header>
    </div>
  );
}

export default Form;
