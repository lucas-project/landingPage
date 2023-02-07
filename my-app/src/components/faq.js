import React, { useState } from 'react';

function Question({ question, answer }) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div>
      <p onClick={() => setExpanded(!isExpanded)}   className='question'>
      {question}{isExpanded ? <img className="expandLogoStyle" src="minimize.png" alt="minimize"/>  : <img className="expandLogoStyle" src="add-button.png" alt="expand"/>} 
      </p >
      {isExpanded && <p  className='question-list'>{answer}
      </p >}
    </div>
    
  );
}

function QuestionList({ questions }) {
  return (
    <div className='container sideMargin'>
      {questions.map((question, index) => (
        <Question key={index} question={question.question} answer={question.answer} />
      ))}

    </div>
  );
}

export default QuestionList;