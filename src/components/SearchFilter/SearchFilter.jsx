import PropTypes from 'prop-types';
import {Input} from './SearchFilter.styled'

export const SearchFilter = ({value, onChange }) => {
    return (
    <>
      <Input type="text" 
      value={value}
      onChange={onChange}/>
    </>
    )
};

SearchFilter.propTypes = {
  onChange: PropTypes.func,
};