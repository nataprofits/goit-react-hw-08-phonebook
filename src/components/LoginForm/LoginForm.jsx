import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import {
  FormLogin,
  LabelLogin,
  InputLogin,
  ButtonLogin,
} from '../../components/LoginForm/LoginFormstyled';
import {  Formik } from 'formik';
import * as Yup from 'yup';
import FormError from 'components/FormError/FormError';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = { email: '', password: '' };

const schema = Yup.object().shape({
  email: Yup.string().min(4).required(),
  password: Yup.string().min(5).max(16).required(),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;

    dispatch(logIn({ email, password })).unwrap().then(()=>toast.success("Login In succesfully")).catch(()=> toast.error("Something went wrong. Try again"));;
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormLogin>
        <LabelLogin htmlFor="email">
          Email
          <InputLogin type="email" name="email" />
          <FormError name= "email"/>
        </LabelLogin>

        <LabelLogin htmlFor="password">
          Password
          <InputLogin type="password" name="password" />
          <FormError name ="password"/>
        </LabelLogin>
        <ButtonLogin type="submit">Login</ButtonLogin>
      </FormLogin>
    </Formik>
  );
}
