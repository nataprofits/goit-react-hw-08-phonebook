import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import {
  FormRegister,
  LabelRegister,
  InputRegister,
  ButtonRegister,
} from '../../components/RegisterForm/RegisterForm.styled';

import {  Formik } from 'formik';
import * as Yup from 'yup';
import FormError from 'components/FormError/FormError';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = { name: '', email: '', password: '' };

const schema = Yup.object().shape({
  name: Yup.string().min(4).required(),
  email: Yup.string().min(4).required(),
  password: Yup.string().min(5).max(16).required(),
});
export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const { name, email, password } = values;

    dispatch(
      register({
        name,
        email,
        password,
      })
    ).unwrap().then(()=>toast.success("Registration succesfully")).catch(()=> toast.error("Something went wrong. Try again"));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormRegister>
        <LabelRegister htmlFor="name">
          Username
          <InputRegister type="text" name="name" />
          <FormError name="name"/>
        </LabelRegister>

        <LabelRegister htmlFor="email">
          Email
          <InputRegister type="email" name="email" />
          <FormError name="email"/>
        </LabelRegister>

        <LabelRegister htmlFor="password">
          Password
          <InputRegister type="password" name="password" />
          <FormError name="password"/>
        </LabelRegister>
        <ButtonRegister type="submit">Register</ButtonRegister>
      </FormRegister>
    </Formik>
  );
}
