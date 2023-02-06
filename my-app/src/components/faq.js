import React, { useState } from 'react';

function Question({ question, answer }) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div>
      <p onClick={() => setExpanded(!isExpanded)}   className='question'>
        {isExpanded ? '-' : '+'} {question}
      </p >
      {isExpanded && <p  className='question-list'>{answer}
      </p >}
    </div>
    
  );
}

function QuestionList({ questions }) {
  return (
    <div className='container'>
      {questions.map((question, index) => (
        <Question key={index} question={question.question} answer={question.answer} />
      ))}

    </div>
  );
}

export default QuestionList;