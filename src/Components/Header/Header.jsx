import Navigation from '../Navigation/Navigation';
import logo from 'img/logo.svg';

export default function Header() {
  return (
    <div className='header'>
      <div className='container header__container'>  
        <a href="#">
          <img className='header__logo' src={logo} alt="logo" />
        </a>
        <Navigation/>
      </div>
    </div>
  );
}
