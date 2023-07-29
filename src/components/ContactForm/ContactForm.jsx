import {
  FormWrap,
  Label,
  Input,
  ButtonAddDeleteContact,
} from './ContactForm.styled';
import FormError from 'components/FormError/FormError';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsItems } from '../../redux/contacts/contactsSlice';
import { addContact } from 'redux/contacts/contacts-operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = { name: '', number: '' };

const schema = Yup.object().shape({
  name: Yup.string().min(3).required(),
  number: Yup.number().min(4).required(),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const isDuplicateName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicateName) {
      toast.info(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormWrap>
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" />
          <FormError name="name" />
        </Label>

        <Label htmlFor="tel">
          Number
          <Input type="tel" name="number" />
          <FormError name="number" />
        </Label>
        <ButtonAddDeleteContact type="submit">
          Add contact
        </ButtonAddDeleteContact>
      </FormWrap>
    </Formik>
  );
}
