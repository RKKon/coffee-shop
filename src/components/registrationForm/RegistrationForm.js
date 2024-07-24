import { useForm } from "react-hook-form";

import '../../assets/sass/style.sass';
import './registrationForm.sass';

const RegistrationForm = ({ toggleRegForm, toggleLogInForm }) => {
  const { register, handleSubmit } = useForm();

  const setOverflowHidden = (boolean = false) => {
    boolean ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''
  }

  const openLogInForm = () => {
    toggleRegForm(false);
    toggleLogInForm(true);
  }

  const closeFormByClickWrapper = (event) => {
    if (event.target.classList.contains('registration_form_wrapper')) {
      toggleRegForm(false);
      setOverflowHidden(false);
    }
  }

  return (
    <div onClick={(event) => closeFormByClickWrapper(event)} className="registration_form_wrapper">
      {setOverflowHidden(true)}
      <form className="registration_form" onSubmit={handleSubmit((data) => {
        console.log(data);
        toggleRegForm(false);
        setOverflowHidden(false);
      })}
      >
        <div className='registration_form_cross' onClick={() => {
          toggleRegForm(false)
          setOverflowHidden(false)
        }}>&times;</div>
        <h2 className="registration_form_title">Register</h2>
        <input {...register("username", { required: true, minLength: 2 })}
          className="registration_form_item" type="text" placeholder="Username" />
        <input {...register("password", { required: true, minLength: 5 })}
          className="registration_form_item" type="text" placeholder="Password" />
        {/* <input {...register("repeatPassword", {required: true, minLength: 5})}
        className="registration_form_item" type="text" placeholder="Repeat password" /> */}
        <input {...register("email", { required: true })}
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