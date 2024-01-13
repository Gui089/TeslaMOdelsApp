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
        <img className='logo-tesla' src= './public/img/TeslaLogo.png' alt="logo da marca Tesla" />
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
      <li><img className='menu-icon' src="./public/img/github.png" alt="" /><p>MyGithub</p></li>
      <li><img className='menu-icon' src="./public/img/linkedin.png" alt="" /><p>Linkedin</p></li>
     </ul>
    </div>)
    }
    {toggleClick && (
    <div className='nav-bar-close'>
      <button onClick={onClickClose} className='btn-close-clicked'><img className='btn-close-img' src="./public/img/rightArr.png" alt="" /></button>
       <div className='logo-clicked'>
        <img className='logo-tesla' src="./public/img/TeslaLogo.png" alt="logo da marca Tesla" />
       </div>
      <div className='list-menu'>
      <ul className='list-clicked' >
         <li className='li-clicked'><img className='menu-icon-clicked' src="./public/img/home (5).png" alt="logo casa" /></li>
         <li className='li-clicked'><img className='menu-icon-clicked' src="./public/img/information (1).png" alt="imagem de ponto exclamcacao" /></li>
         <li className='li-clicked'><img className='menu-icon-clicked' src="/public/img/cloud (1).png" alt="" /></li>
         <li className='li-clicked'><img className='menu-icon-clicked' src="/public/img/mail.png" alt="" /></li>
         <li className='li-clicked'><img className='menu-icon-clicked' src="/public/img/car.png" alt="" /></li>
       </ul>
      </div>

    <ul className='list-contact-clicked'>
      <li className='li-clicked'><img className='menu-icon-clicked' src="./public/img/github.png" alt="" /></li>
      <li className='li-clicked'><img className='menu-icon-clicked' src="./public/img/linkedin.png" alt="" /></li>
     </ul>
    </div>)}
  </>

  )
}

export {LateralBar};