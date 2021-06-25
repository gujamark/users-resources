import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import styles from './sign-in.module.css';
import API_SERVICE from '../../../services/api';
import { AUTH_TOKEN } from '../../../utils/constants';
import withNoAuth from '../../../hoc/withNoAuth';
import { setAuthUserAction } from '../../../redux/actions';

function SignInForm() {
  const [loginSuccess, setloginSuccess] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const loginResponse = await API_SERVICE.login(data);
    if (loginResponse.error) {
      setloginSuccess(loginResponse.error);
    } else {
      localStorage.setItem(AUTH_TOKEN, JSON.stringify(loginResponse.token));
      dispatch(setAuthUserAction(true));
      history.replace('/');
    }
  };

  return (
    <div className={styles.FormWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginSuccess && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert">
            {loginSuccess}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            Email address
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              {...register('email', { required: true })}
              defaultValue="eve.holt@reqres.in"
            />
            {errors.email && (
              <span className="text-danger">Email is required</span>
            )}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">
            Password
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              {...register('password', { required: true })}
              defaultValue="cityslicka"
            />
            {errors.password && (
              <span className="text-danger">Password is required</span>
            )}
          </label>
        </div>
        <hr />
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default withNoAuth(SignInForm);
