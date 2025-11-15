import rocket from 'img/rocket-footer.svg';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container footer__container">
        <img className="footer__icon" src={rocket} alt="rocket" />
        <p className="footer__text">Exciting space adventure!</p>
      </div>
    </div>
  )
}