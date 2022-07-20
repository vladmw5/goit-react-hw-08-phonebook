import { Link } from 'react-router-dom';
import routes from 'utils/routes';
import s from './HomeView.module.css';

const { signup, login } = routes;

const Home = () => {
  return (
    <main className={s.view}>
      <div className={s.wrapper}>
        <h1 className={s.title}>Phonebook</h1>
        <p className={s.version}>4.0</p>
        <p className={s.greeting}>Welcome to the Phonebook app!</p>
        <p className={s.manual}>
          To start you have to{' '}
          <Link to={`/${signup}`} className={s.link}>
            Sign Up
          </Link>{' '}
          or{' '}
          <Link to={`/${login}`} className={s.link}>
            Log In
          </Link>
        </p>
        <p className={s.manual}>Then you can:</p>
        <ul className={s.list}>
          <li className={s.elem}>
            <span className={s.text}>Add Your Contacts to the Phonebook!</span>
          </li>
          <li className={s.elem}>
            <span className={s.text}>
              Delete Your Contacts from the Phonebook!
            </span>
          </li>
          <li className={s.elem}>
            <span className={s.text}>
              Filter Your Contacts in the Phonebook!
            </span>
          </li>
          <li className={s.elem}>
            <span className={s.text}>
              Change Your Contacts in the Phonebook!
            </span>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Home;
