import { Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import s from './SharedLayout.module.css';
import Loader from 'components/Loader';

import Navbar from 'components/Navbar';
import UserMenu from 'components/UserMenu';

const SharedLayout = () => {
  return (
    <Fragment>
      <header className={s.header}>
        <Navbar />
        <UserMenu />
      </header>
      <Suspense fallback={<Loader />}>
        <div className={s.outlet}>
          <Outlet />
        </div>
      </Suspense>
    </Fragment>
  );
};

export default SharedLayout;
