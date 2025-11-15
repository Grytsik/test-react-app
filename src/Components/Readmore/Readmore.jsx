export default function Readmore({ data }) {
  return (
    <div className='read'>
      <div className='read__container'>

        <h2 className='read__title'>{data.title}</h2>
        <p className='read__text'>{data.text_short}</p>

        <span className='read__dots'>...</span>

        <p className='read__extra'>{data.text_long}</p>
        
        <input type='checkbox' className='read__btn' id='btn' />
        <label htmlFor='btn'></label>
      </div>
    </div>
  );
}
