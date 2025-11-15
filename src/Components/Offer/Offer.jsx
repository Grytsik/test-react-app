import { offerConfig, readData } from 'constants/content';
import OfferItem from './OfferItem';
import Readmore from 'Components/Readmore/Readmore';

export default function Offer() {

  return (
      <div className='offer'>
        <div className='container'>
          <h2 className='offer__title'>Offer</h2>
          <div className='offer__grid'>
            {offerConfig.map((item) => (
              <OfferItem key={item.title} props={item} />
            ))}
          </div>

          <Readmore data={readData[0]}/>
        </div>
      </div>
    
  );
}
