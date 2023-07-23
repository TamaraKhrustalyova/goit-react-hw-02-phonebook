import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form, Label, Input, Btn} from './ContactForm.styled'

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

handleChange = (e) => {
    const {name, value} = e.currentTarget;
    this.setState({ [name]: value });
}

handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.reset();
}

reset =() => {
    this.setState({
        name: '',
        number: '',
    })
}

render() {
    const {name, number} = this.state
    return (
        <>
            <Form onSubmit={this.handleSubmit}>
                <Label htmlFor="">
                    Name
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label htmlFor="">
                Phone number
                <Input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.handleChange}
                    // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required 
                />
                </Label>
                <Btn type='submit'>Add contact</Btn>     
            </Form>
        </>        
     )
    }
}

ContactForm.propTypes = {
    onFormSubmit: PropTypes.func,
};



