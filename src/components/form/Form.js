import { useEffect } from 'react';

import './form.sass'

const Form = ({ closeForm, sendForm, customerPhoneValue }) => {
  const getPhone = (e) => customerPhoneValue(e.target.value)

  return (
    <div className='form_wrapper'>
      <form className='form'/* action="" */>
        <div onClick={closeForm} className='form_cross'>&times;</div> {/* cross */}
        <h2 className='form_h2'>It is time to drink coffee</h2>
        <input onChange={getPhone} required name='phone' className='form_input' type="text" placeholder='Your phone number' />
        <button type='submit' onClick={sendForm} className='form_btn'>I want coffee</button>
      </form>
    </div>
  )
}

export const ShowMessageForm = () => {
  const messageForm = {
    loading: 'Loading...',
    success: 'Thank you. Soon we will contact you.',
    error: 'Error. Try again or contact us.'
  }
  return (
    <div className='form_message'>
      <h2 className='form_message_text'>{messageForm.success}</h2>
    </div>
  )
}

export default Form