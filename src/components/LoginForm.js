import {useForm} from '../hooks/FormHooks';

const LoginForm = (props) => {
  const alkuarvot = {
    username: '',
    password: '',
  };
  const doLogin = () => {
    console.log('doRegister');
  };
  const {inputs, handleInputChange} = useForm(doLogin, alkuarvot);
  console.log(inputs);
  return (
    <form>
      <input
        placeholder="username"
        name="username"
        onChange={handleInputChange}
      />
      <input
        placeholder="password"
        name="password"
        type="password"
        onChange={handleInputChange}
      />
      <input type="submit" value="login" />
    </form>
  );
};

export default LoginForm;
