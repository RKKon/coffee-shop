import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

import '../../assets/sass/style.sass';
import '../registrationForm/registrationForm.sass';

import ThanksRegAndLoginForm from '../thanksRegAndLoginForm/ThanksRegAndLoginForm';

const LogInForm = ({ toggleRegForm, toggleLogInForm }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [toggleThanksModal, setToggleThanksModal] = useState(false)

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

  const showThanksModal = (data) => {
    console.log(data);
    setToggleThanksModal(true);
    setTimeout(() => {
      setToggleThanksModal(false);
      toggleLogInForm(false);
      setOverflowHidden(false);
    }, 2000);
  }

  useEffect(() => {
    setOverflowHidden(true);
    const handleElementByClick = (e) => {
      if (e.code === 'Escape') {
        toggleLogInForm(false);
        setOverflowHidden(false);
      }
    };

    document.addEventListener('keydown', handleElementByClick)

    return () => {
      setOverflowHidden(false);
      document.removeEventListener('keydown', handleElementByClick);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div tabIndex={1} autoFocus onClick={(event) => closeFormByClickWrapper(event)} className="registration_form_wrapper">
      {setOverflowHidden(true)}
      {!toggleThanksModal ? (
        <form className="registration_form" onSubmit={handleSubmit(showThanksModal)} >
          <div className='registration_form_cross' onClick={() => {
            toggleLogInForm(false);
            setOverflowHidden(false);
          }} >&times;
          </div>
          <h2 className="registration_form_title">Sign up</h2>
          <input {...register("username", { required: true, minLength: { value: 2, message: "min length is 2" } })}
            className="registration_form_item" type="text" placeholder="Username" />
          {errors.username && <span className="reg_form_error" role="alert">{errors.username.message}</span>}
          <input {...register("password", { required: true, minLength: { value: 5, message: "min length is 5" } })}
            className="registration_form_item" type="text" placeholder="Password" />
          {errors.password && <span className="reg_form_error" role='alert'>{errors.password.message}</span>}
          <p onClick={openRegForm} className="registration_form_item registration_form_link">
            Need to Register?
          </p>
          <button className="registration_form_btn">Sign up</button>
        </form>) : (
        <ThanksRegAndLoginForm />
      )}
    </div>
  )
}

export default LogInForm