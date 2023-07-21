import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import {SearchFilter} from './SearchFilter/SearchFilter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
  
formSubmitHandler = (data) => {
  const {name} = data;
  const {contacts} = this.state;
    if (contacts.find(contact => contact.name === name)) {
      return alert (`Contact ${name} already exists`);
    }
  this.setState({contacts: [{id: nanoid(), data}, ...contacts]});
  console.log(contacts)
};

filterHandler = e => {
  console.log(e.currentTarget.value)
  this.setState({ filter: e.currentTarget.value });
}

// getFilteredContacts = () => {
//   const { filter, contacts } = this.state;
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(({name}) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

getFilteredContacts = () => {
  const { filter, contacts } = this.state;
  // const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.includes(filter),
  );
};

handleDelete = contactId => {
  this.setState(({contacts}) => ({
    contacts: contacts.filter(({id}) => id !== contactId),
  }))
}

  render() {
    const {contacts, filter} = this.state;
    // const filteredContacts = this.getFilteredContacts();
    return (
      <div style={{
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        color: '#010101',
      }}>
        <>
          <h1>Phonebook</h1>
          <ContactForm onFormSubmit={this.formSubmitHandler}/>

          <h2>Contacts</h2>

          <h3>Find contact by name</h3>
          <SearchFilter 
          value={filter} 
          onChange={this.filterHandler}
          />

          <ContactList 
          contacts={contacts}
          // contacts={filteredContacts}
          deleteContact={this.handleDelete} 
          />
        </>
      </div>
    )
  }
};