import React, { useState } from 'react';
import WilderForm from '../../components/wilder-form/wilder-form-cpnt';

const HeaderContainer = () => {
  const [isForm, setIsForm] = useState(false);

  const handleIsForm = () => {
    setIsForm(!isForm);
  }

  const closeTheForm = () => {
    setIsForm(false);
  }

  return (
    <header className="header-wrapper">
      <button onClick={handleIsForm} className="hw-button-handle-form"></button>
      <WilderForm isForm={isForm} closeTheForm={closeTheForm}/>
    </header>
  )
}

export default HeaderContainer;