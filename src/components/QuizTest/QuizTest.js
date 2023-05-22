import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizTest.css'

const QuizTest = () => {
    const allQuestions = useLoaderData();
    const questions = allQuestions.data.questions
    return (
        <div className='test'>
            <h1 style={{ margin: '90px' }}>Total Questions : {questions.length}</h1>
            {
                questions.map(question => <Question
                    key={question.id}
                    question={question}
                    questions={questions}
                ></Question>)
            }
        </div>
    );
};

export default QuizTest;