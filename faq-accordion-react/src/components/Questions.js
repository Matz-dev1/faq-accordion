import { useState } from 'react';
import plusIcon from '../assets/images/icon-plus.svg';
import minusIcon from '../assets/images/icon-minus.svg';


function Questions({questions}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="questions-container">
      {questions.map((item, index) => (
        <div key={item.id} className="questionItem">
          <div className="questionHeader" onClick={() => toggleAnswer(index)}>
            <h3>{item.question}</h3>
            <img 
              src={openIndex === index ? minusIcon : plusIcon} 
              alt={openIndex === index ? "minus icon" : "plus icon"} 
            />
          </div>
          {openIndex === index && (
            <p>{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Questions;