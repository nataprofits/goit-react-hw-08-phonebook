
import { getFilterValue, setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const changeFilter = evt => {
    return dispatch(setFilter(evt.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
};