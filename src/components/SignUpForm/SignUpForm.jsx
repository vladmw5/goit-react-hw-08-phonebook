import { useState } from 'react';

import s from './SignUpForm.module.css';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const credentials = { name, email, password };
    console.log(credentials);
    reset();
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h1 className={s.title}>Registration</h1>
      <ul className={s.list}>
        <li className={s.item}>
          <label htmlFor="name" className={s.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="password"
            value={name}
            onChange={handleNameChange}
            className={s.input}
          />
        </li>
        <li className={s.item}>
          <label htmlFor="email" className={s.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="password"
            value={email}
            onChange={handleEmailChange}
            className={s.input}
          />
        </li>
        <li className={s.item}>
          <label htmlFor="password" className={s.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className={s.input}
          />
        </li>
      </ul>
      <button type="submit" className={s.button}>
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
