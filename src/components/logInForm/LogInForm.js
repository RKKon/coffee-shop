import { useForm } from 'react-hook-form';

import '../../assets/sass/style.sass';
import '../registrationForm/registrationForm.sass';

const LogInForm = ({toggleRegForm, toggleLogInForm}) => {
  const { register, handleSubmit } = useForm();
  const openRegForm = () => {
    toggleRegForm(true);
    toggleLogInForm(false)
  }
  return (
    <div className="registration_form_wrapper">
      <form className="registration_form" onSubmit={handleSubmit((data) => {
        console.log(data);
        toggleLogInForm(false);
      })}
      > 
        <div onClick={() => toggleLogInForm(false)} className='registration_form_cross'>&times;</div>
        <h2 className="registration_form_title">Sign up</h2>
        <input {...register("username", {required: true, minLength: 2})} 
          className="registration_form_item" type="text" placeholder="Username" />
        <input {...register("password", {required: true, minLength: 5})} 
          className="registration_form_item" type="text" placeholder="Password" />
        <p onClick={openRegForm} className="registration_form_item registration_form_link"> 
          Need to Sign up?
        </p>
        <button className="registration_form_btn">Register</button>  
      </form>
    </div>
  )
}

export default LogInForm