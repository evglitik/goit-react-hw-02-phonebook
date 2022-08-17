import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { availableContact } from 'utils/availableContact';
import { Box } from 'Box';
import { GlobalStyle } from 'components/GlobalStyle';
import { TitleApp, TitleContacts } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  addContact = contact => {
    const availableCont = availableContact(this.state.contacts, contact);

    availableCont
      ? alert(`${availableCont} is alredy in contact`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  handleFilter = e => {
    this.setState({ name: e.currentTarget.value });
  };

  render() {
    const { contacts, name } = this.state;

    const normalizateName = name.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizateName)
    );

    return (
      <Box p={4} as="main">
        <TitleApp>Phonebook</TitleApp>
        <ContactForm addContact={this.addContact} />

        <TitleContacts>Contacts</TitleContacts>
        <Filter name={name} onChange={this.handleFilter} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </Box>
    );
  }
}
