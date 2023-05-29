import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import style from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = userData => {
    const existingContact = this.state.contacts.find(
      contact => contact.name === userData.name
    );

    if (existingContact) {
      alert('This contact already exists.');
      return;
    }

    const newUser = { ...userData, id: nanoid() };
    this.setState(prevstate => {
      return { contacts: [...prevstate.contacts, newUser] };
    });
  };

  deleteContact = id => {
    this.setState(prevstate => {
      return { contacts: prevstate.contacts.filter(user => user.id !== id) };
    });
  };

  handleChangeFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <div className={style.book}>
        <h1 className={style.text}>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2 className={style.text}>Contacts</h2>

        <Filter handleChangeFilter={this.handleChangeFilter} filter={filter} />
        <ContactList
          contactSearch={this.filterContact()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
