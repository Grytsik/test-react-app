import { linkConfig } from "constants/content";

export default function Navigation() {


  return (
    <nav className='nav'>
      
      <input id='burger-toggle' type='checkbox' />
      <label htmlFor='burger-toggle' className='burger'>
        <span className='burger__line'></span>
      </label>

      <div className='nav__list'>
        <div className='nav__items'>
          {linkConfig.map((item) => (
            <a key={item.id} href={item.href} className={item.className}>
              {item.text && item.text}
              {item.icon && <img src={item.icon} alt='cart' />}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
