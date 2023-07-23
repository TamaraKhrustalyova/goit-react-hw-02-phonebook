import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import {SearchFilter} from './SearchFilter/SearchFilter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid'
import {Container, ContactTitle, PhonebookTitle, SubTitle} from './App.styled'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
  
formSubmitHandler = (data) => {
  const {name} = data;
  const {contacts} = this.state;
  console.log(data, contacts);
    if (contacts.find((contact) => contact.data.name === name)) {
      return alert (`Contact ${name} already exists`);
    }
  this.setState({contacts: [{id: nanoid(), data}, ...contacts]});
  console.log(contacts)
};

filterHandler = e => {
  console.log(e.currentTarget.value)
  this.setState({ filter: e.currentTarget.value });
}

getFilteredContacts = () => {
  const { filter, contacts } = this.state;
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({data}) =>
    data.name.toLowerCase().includes(normalizedFilter),
  );
};

handleDelete = contactId => {
  this.setState(({contacts}) => ({
    contacts: contacts.filter(({id}) => id !== contactId),
  }))
}

  render() {
    const {filter} = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Container>
          <PhonebookTitle>Phonebook</PhonebookTitle>
          <ContactForm onFormSubmit={this.formSubmitHandler}/>

          <ContactTitle>Contacts</ContactTitle>

          <SubTitle>Find contact by name</SubTitle>
          <SearchFilter 
          value={filter} 
          onChange={this.filterHandler}
          />

          <ContactList 
          // contacts={contacts}
          contacts={filteredContacts}
          deleteContact={this.handleDelete} 
          />     
      </Container>
    )
  }
};