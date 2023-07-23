import PropTypes from 'prop-types';
import {Contact, Btn} from './ContactList.styled'

export const ContactList = ({contacts, deleteContact}) => {
    console.log(contacts)
    return (
    <>
        {contacts.map(({id, data: {name, number}}) => {
        return (
            <Contact key={id}>
                {name}: {number}
                <Btn 
                type="button"
                name="delete"
                onClick={() => deleteContact(id)}>Delete</Btn>
            </Contact>
        )} 
        )}    
    </>
    )  
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          number: PropTypes.string,
        })
      ),
      deleteContact: PropTypes.func,
    };