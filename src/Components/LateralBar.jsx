import { useState } from 'react';

const LateralBar = () => {

  const [toggleClick, setToggleClick] = useState(false);

  const onClickClose = () => setToggleClick(t => !t);

  return (
    <>
     {!toggleClick && (
     <div className='nav-bar'>
      <button onClick={onClickClose} className='btn-close'><img className='btn-close-img' src="./public/img/left-chevron.png" alt="" /></button>
       <div className='logo'>
        <img className='logo-tesla' src="./public/img/TeslaLogo.png" alt="logo da marca Tesla" />
        <h1 className='tittle'>ESLA</h1>
       </div>
      <div className='list-menu'>
      <ul >
         <li><img className='menu-icon' src="./public/img/home (5).png" alt="logo casa" /><p>home</p></li>
         <li><img className='menu-icon' src="./public/img/information (1).png" alt="imagem de ponto exclamcacao" /><p>About us</p></li>
         <li><img className='menu-icon' src="/public/img/cloud (1).png" alt="" /><p>Services</p></li>
         <li><img className='menu-icon' src="/public/img/mail.png" alt="" /><p>Contact</p></li>
         <li><img className='menu-icon' src="/public/img/car.png" alt="" /><p>Models</p></li>
       </ul>
      </div>

    <ul className='list-contact'>
      <li>MyGithub</li>
      <li>Linkedin</li>
     </ul>
    </div>)
    }
    {toggleClick && (
    <div className='nav-bar-close'>
      <button onClick={onClickClose} className='btn-close'><img className='btn-close-img' src="./public/img/left-chevron.png" alt="" /></button>
       <div className='logo'>
        <img className='logo-tesla' src="./public/img/TeslaLogo.png" alt="logo da marca Tesla" />
       </div>
      <div className='list-menu'>
      <ul >
         <li><img className='menu-icon' src="./public/img/home (5).png" alt="logo casa" /></li>
         <li><img className='menu-icon' src="./public/img/information (1).png" alt="imagem de ponto exclamcacao" /></li>
         <li><img className='menu-icon' src="/public/img/cloud (1).png" alt="" /></li>
         <li><img className='menu-icon' src="/public/img/mail.png" alt="" /></li>
         <li><img className='menu-icon' src="/public/img/car.png" alt="" /></li>
       </ul>
      </div>

    <ul className='list-contact'>
      <li></li>
      <li></li>
     </ul>
    </div>)}
  </>

  )
}

export {LateralBar};