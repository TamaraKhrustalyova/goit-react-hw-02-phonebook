import PropTypes from 'prop-types';

export const ContactList = ({contacts, deleteContact}) => {
    console.log(contacts)
    return (
    <>
        {contacts.map(({id, data: {name, number}}) => {
        return (
            <li key={id}>
                {name}: {number}
                <button 
                type="button"
                name="delete"
                onClick={() => deleteContact(id)}>Delete</button>
            </li>
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