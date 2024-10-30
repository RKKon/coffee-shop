<div tabIndex={1} autoFocus onClick={(event) => closeFormByClickWrapper(event)} className="registration_form_wrapper">
  {setOverflowHidden(true)}
  {!toggleThanksModal ? (<form className="registration_form" onSubmit={handleSubmit(onSubmit)}>
    <div className='registration_form_cross' onClick={() => {
      toggleLogInForm(false); setOverflowHidden(false);
    }} >&times;
    </div> <h2 className="registration_form_title">Sign up</h2>
    <input {...register("username", { required: true, minLength: { value: 2, message: "min length is 2" } })}
      className="registration_form_item" type="text" placeholder="Username" />
    {errors.username && <span className="reg_form_error" role="alert">{errors.username.message}</span>}
    <input {...register("password", { required: true, minLength: { value: 5, message: "min length is 5" } })}
      className="registration_form_item" type="text" placeholder="Password" />
    {errors.password && <span className="reg_form_error" role='alert'>{errors.password.message}</span>}
    <p onClick={openRegForm} className="registration_form_item registration_form_link"> Need to Register? </p>
    <button className="registration_form_btn">Sign up</button> </form>) :
    (<ThanksRegAndLoginForm />)}
</div>



<div tabIndex={1} autoFocus onClick={(event) => closeFormByClickWrapper(event)} className="registration_form_wrapper">
      {setOverflowHidden(true)}
      <form className="registration_form" onSubmit={handleSubmit((data) => {
        console.log(data);
        showThanksModal();
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
        <input {...register("username", { required: true, minLength: { value: 2, message: "min length is 2" } })}
          className="registration_form_item" type="text" placeholder="Username" />
        {errors.username && <span className="reg_form_error" role="alert">{errors.username.message}</span>}
        <input {...register("password", { required: true, minLength: { value: 5, message: "min length is 5" } })}
          className="registration_form_item" type="text" placeholder="Password" />
        {errors.password && <span className="reg_form_error" role='alert'>{errors.password.message}</span>}
        <p onClick={openRegForm} className="registration_form_item registration_form_link">
          Need to Register?
        </p>
        <button className="registration_form_btn">Sing up</button>
      </form>
      { toggleThanksModal ? <ThanksRegAndLoginForm /> : null }
    </div>