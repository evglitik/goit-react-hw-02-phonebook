import { FilterLable } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ name, onChange }) => {
  return (
    <FilterLable>
      Find contacts by name
      <input type="text" value={name} onChange={onChange} />
    </FilterLable>
  );
};

Filter.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};
