import { NavLink } from 'react-router-dom';

import s from './Navbar.module.css';
import routes from 'utils/routes';

const Navbar = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.elem}>
          <NavLink to={routes.home} className={s.link}>
            Home
          </NavLink>
        </li>
        <li className={s.elem}>
          <NavLink to={`/${routes.contacts}`} className={s.link}>
            Contacts
          </NavLink>
        </li>
        <li className={s.elem}>
          <NavLink to={`/${routes.signup}`} className={s.link}>
            Sign Up
          </NavLink>
        </li>
        <li className={s.elem}>
          <NavLink to={`/${routes.login}`} className={s.link}>
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
