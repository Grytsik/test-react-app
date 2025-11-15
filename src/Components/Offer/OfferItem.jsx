import { useEffect, useState } from 'react';

export default function OfferItem({ props }) {
  const [short, setShort] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => setShort(window.innerWidth <= 767);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`offer__item ${props.className ?? ''}`}
      style={{ backgroundImage: `url(${props.img})` }}>
      <div className='offer__content'>
        <h1 className='offer__content-title'>{props.title}</h1>
        <p
          style={{ opacity: props.start_visible ? (short ? 1 : 0) : 1 }}
          className='offer__content-text'>
          {props.text_short && short ? props.text_short : props.text}
        </p>
        <button className='btn btn--outlined'>Learn more</button>
      </div>
    </div>
  );
}
