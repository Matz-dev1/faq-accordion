import starIcon from '../assets/images/icon-star.svg';
import Questions from './Questions';

function FaqContainer({ questions }){
  return (
    <div className='faqWrapper'>
      <div>
        <img src={starIcon} alt="star icon" className="starIcon" />
        <span className='faqTitle'>FAQs</span>
      </div>
      <div>
        <Questions questions={questions}/>
      </div>
    </div>
  )
}

export default FaqContainer;