import { LabelFilter, InputFilter, FilterWrap } from './Filter.styled';
import { getFilterValue, setFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const changeFilter = evt => {
    return dispatch(setFilter(evt.target.value));
  };

  return (
    <FilterWrap>
    <LabelFilter>
      Find contact by name
      <InputFilter type="text" value={filter} onChange={changeFilter} />
      </LabelFilter>
    </FilterWrap>
  );
};
