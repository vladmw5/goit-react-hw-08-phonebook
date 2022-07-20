import s from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={s.menu}>
      <p className={s.email}>user@mail.com</p>
      <button className={s.logout}>Log Out</button>
    </div>
  );
};

export default UserMenu;
