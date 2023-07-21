import PropTypes from 'prop-types';

export const SearchFilter = ({value, onChange }) => {
    return (
    <>
      <input type="text" 
      value={value}
      onChange={onChange}/>
    </>
    )
};

SearchFilter.propTypes = {
  onChange: PropTypes.func,
};