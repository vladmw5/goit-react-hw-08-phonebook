import { useDispatch, useSelector } from 'react-redux/es/exports';
import {
  useGetAllContactsQuery,
  usePostContactMutation,
  useDeleteContactMutation,
} from 'redux/contactsApi';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout';
import Home from 'views/HomeView/HomeView';
import SignUpFormView from 'views/SignUpFormView/SignUpFormView';
import LogInFormView from 'views/LogInFormView/LogInFormView';

import Section from './Section';
import ContactList from './ContactList';
import Phonebook from './Phonebook';
import Filter from './Filter';
import Loader from './Loader';

import s from './App.module.css';
import capitalize from 'utils/capitalize';
import routes from 'utils/routes';

const { home, signup, login, contacts } = routes;

const App = () => {
  // const { data: contacts, isFetching: isFetchingContact } =
  //   useGetAllContactsQuery();
  // const [postContact, { isLoading: isLoadingPostContact }] =
  //   usePostContactMutation();
  // const [excContact, { isLoading: isLoadingDeleteContact }] =
  //   useDeleteContactMutation();
  // const filter = useSelector(state => state.filter);
  // const dispatch = useDispatch();

  // const doesAlreadyExist = newContact => {
  //   for (const { name } of contacts) {
  //     if (name === newContact.name) {
  //       return name;
  //     }
  //   }
  //   return false;
  // };

  // const addContact = newContact => {
  //   if (doesAlreadyExist(newContact)) {
  //     alert(
  //       `${capitalize(
  //         newContact.name
  //       )}'s contact already exists. Please, next time be more attentive to what you are trying to add`
  //     );
  //     return;
  //   }
  //   postContact(newContact);
  // };

  // const handleFilterInput = event => {
  //   dispatch(actions.changeFilter({ filter: event.target.value }));
  //   dispatch(actions.saveFilter());
  // };

  // const filterContacts = contacts => {
  //   return contacts?.filter(({ name }) =>
  //     name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const deleteContact = targetId => {
  //   excContact(targetId);
  // };

  // const handleDeleteContactBtnClick = event => {
  //   deleteContact(event.target.dataset.id);
  // };

  return (
    <div className={s.container}>
      <div className={s.app}>
        <Routes>
          <Route path={home} element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path={signup} element={<SignUpFormView />} />
            <Route path={login} element={<LogInFormView />} />
            <Route path="*" element={<Home />}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );

  // return (
  //   <div className={s.container}>
  //     <div className={s.app}>
  //       <Section title="Phonebook">
  //         <Phonebook addContact={addContact} />
  //       </Section>
  //       <Section title="Contacts">
  //         {contacts && (
  //           <Filter name={filter} inputHandler={handleFilterInput} />
  //         )}
  //         {contacts && (
  //           <ContactList
  //             contacts={filterContacts(contacts)}
  //             deleteBtnHandler={handleDeleteContactBtnClick}
  //           />
  //         )}
  //         {(isFetchingContact ||
  //           isLoadingPostContact ||
  //           isLoadingDeleteContact) && <Loader />}
  //       </Section>
  //     </div>
  //   </div>

  // );
};

export default App;
