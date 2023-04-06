import { useForm } from "react-hook-form";

import '../../assets/sass/style.sass';
import './registrationForm.sass';

const RegistrationForm = ({toggleRegForm, toggleLogInForm}) => {
  const { register, handleSubmit } = useForm();
  const openLogInForm = () => {
    toggleRegForm(false);
    toggleLogInForm(true)
  }
  return (
    <div className="registration_form_wrapper">
      <form className="registration_form" onSubmit={handleSubmit((data) => {
        console.log(data);
        toggleRegForm(false);
      })}
      > 
        <div onClick={() => toggleRegForm(false)} className='registration_form_cross'>&times;</div>
        <h2 className="registration_form_title">Sign up</h2>
        <input {...register("username", {required: true, minLength: 2})} 
          className="registration_form_item" type="text" placeholder="Username" />
        <input {...register("password", {required: true, minLength: 5})} 
          className="registration_form_item" type="text" placeholder="Password" />
        <input {...register("repeatPassword", {required: true, minLength: 5})}
        className="registration_form_item" type="text" placeholder="Repeat password" />
        <input {...register("email", {required: true})} 
          className="registration_form_item" type="text" placeholder="Email" />
        <p onClick={openLogInForm} className="registration_form_link"> 
          Already registered?
        </p>
        <button className="registration_form_btn">Register</button>  
      </form>
    </div>
  )
}

export default RegistrationForm;