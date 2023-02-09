import React, { useState } from 'react';

function Question({ question, answer }) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div>
      <p onClick={() => setExpanded(!isExpanded)}   className='question'>
      {question}{isExpanded ? <img className="inlineLogoStyle-right" src="minimize.png" alt="minimize"/>  : <img className="inlineLogoStyle-right" src="add-button.png" alt="expand"/>} 
      </p >
      {isExpanded && <p  className='question-list'>{answer}
      </p >}
    </div>
    
  );
}

function QuestionList({ questions }) {
  return (
    <div className='container mx-5'>
      {questions.map((question, index) => (
        <Question key={index} question={question.question} answer={question.answer} />
      ))}

    </div>
  );
}

export default QuestionList;