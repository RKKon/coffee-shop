import { useForm } from 'react-hook-form';

import '../../assets/sass/style.sass';
import '../registrationForm/registrationForm.sass';

const LogInForm = ({ toggleRegForm, toggleLogInForm }) => {
  const { register, handleSubmit } = useForm();

  const setOverflowHidden = (boolean = false) => {
    boolean ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
  }

  const openRegForm = () => {
    toggleRegForm(true);
    toggleLogInForm(false);
  }

  const closeFormByClickWrapper = (event) => {
    if (event.target.classList.contains('registration_form_wrapper')) {
      toggleLogInForm(false);
      setOverflowHidden(false);
    }
  }

  return (
    <div onClick={(event) => closeFormByClickWrapper(event)} className="registration_form_wrapper">
      {setOverflowHidden(true)}
      <form className="registration_form" onSubmit={handleSubmit((data) => {
        console.log(data);
        toggleLogInForm(false);
        setOverflowHidden(false);
      })}
      >
        <div className='registration_form_cross'
          onClick={() => {
            toggleLogInForm(false);
            setOverflowHidden(false);
          }} >&times;</div>
        <h2 className="registration_form_title">Sign up</h2>
        <input {...register("username", { required: true, minLength: 2 })}
          className="registration_form_item" type="text" placeholder="Username" />
        <input {...register("password", { required: true, minLength: 5 })}
          className="registration_form_item" type="text" placeholder="Password" />
        <p onClick={openRegForm} className="registration_form_item registration_form_link">
          Need to Register?
        </p>
        <button className="registration_form_btn">Sing up</button>
      </form>
    </div>
  )
}

export default LogInForm