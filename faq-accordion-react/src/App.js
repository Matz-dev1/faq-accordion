import logo from './logo.svg';
import './App.css';
import BackgroundImage from './components/BackgroundImage.js'
import FaqContainer from './components/FaqContainer.js';
import { questions } from './data/faqData';

function App() {
  return (
   <div>
      <FaqContainer questions={questions}/>
      <BackgroundImage/>
   </div>
  );
}

export default App;
