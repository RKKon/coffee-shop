import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ThanksRegAndLoginForm from '../thanksRegAndLoginForm/ThanksRegAndLoginForm';

import '../../assets/sass/style.sass';
import './registrationForm.sass';

const RegistrationForm = ({ toggleRegForm, toggleLogInForm }) => {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const [toggleThanksModal, setToggleThanksModal] = useState(false)

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

  const showThanksModal = (data) => {
    console.log(data);
    setToggleThanksModal(true)
    setTimeout(() => {
      setToggleThanksModal(false)
      toggleRegForm(false);
      setOverflowHidden(false);
    }, 2000)
  }

  useEffect(() => {
    const handleElementByClick = (e) => {
      if (e.code === 'Escape') {
        toggleRegForm(false);
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
    <div tabIndex={0} onClick={(event) => closeFormByClickWrapper(event)}
      className="registration_form_wrapper">
      {setOverflowHidden(true)}
      {!toggleThanksModal ?
        <form id="reg_from" className="registration_form" onSubmit={handleSubmit(showThanksModal)}>
          <div className='registration_form_cross' onClick={() => {
            toggleRegForm(false)
            setOverflowHidden(false)
          }}>&times;</div>
          <h2 className="registration_form_title">Register</h2>
          <input {...register("username", { required: true, minLength: { value: 2, message: "min length is 2" } })}
            className="registration_form_item" type="text" placeholder="Username" />
          {errors.username && <span className="reg_form_error" role="alert">{errors.username.message}</span>}
          <input {...register("password", {
            required: true, minLength: { value: 5, message: "min length is 5" }
          })}
            className="registration_form_item" type="text" placeholder="Password" />
          {errors.password && <span className="reg_form_error" role='alert'>{errors.password.message}</span>}

          {/* <input {...register("repeatPassword", {required: true, minLength: 5})}
        className="registration_form_item" type="text" placeholder="Repeat password" /> */}

          <input {...register("email", {
            required: true, pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
            className="registration_form_item" type="text" placeholder="Email" />
          {errors.email && <span className="reg_form_error" role="alert">{errors.email.message}</span>}
          <p onClick={openLogInForm} className="registration_form_link">
            Already registered?
          </p>
          <button className="registration_form_btn">Register</button>
        </form> : (
          <ThanksRegAndLoginForm />
        )
      }
    </div>
  )
}

export default RegistrationForm;