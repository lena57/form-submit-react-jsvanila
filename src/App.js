import { useState } from 'react';
import './App.css';
import submitForm from './submitForm';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const toggle = (e) =>{
   setName('');
   setEmail('');
   setMessage('');
  }

  const handleSubmit = (e) => {
    console.log(e)
    submitForm(e);
    e.preventDefault();
    toggle();
  }
  return (
    <div className="App">
     <form style={{margin: '30px'}}
     onSubmit={handleSubmit}
     action='https://www.greatfrontend.com/api/questions/contact-form'
     method='POST'
     >
      <div>
        <label htmlFor='name'>Name Field </label>
        <input id='name' type='text' required value={name} 
        onChange={(e)=>setName(e.target.value)}/>
      </div>
      <br/>
      <div>
        <label htmlFor='email'>Name Email </label>
        <input id='email' type='email' required value={email} 
        onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <br/>
      <div>
        <label htmlFor='message'>Name Field </label>
        <textarea id='message' type='text' required value={message} 
        onChange={(e)=>setMessage(e.target.value)}/>
      </div>
      <br/>
      <div>
        <button type='submit'>Send</button>
      </div>

     </form>
    </div>
  );
}

export default App;
