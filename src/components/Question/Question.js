import React from 'react';
import Form from 'react-bootstrap/Form';
import './Question.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ question, questions }) => {
    const { id } = question;
    const answers = question.options;
    const singleQuestion = question.question;
    const firstSingleQues = singleQuestion.split('<p>')[1]
    const secondSingleQues = firstSingleQues.split('</p>')[0]



    const handleSeeAnswerBtn = (event) => {

        event.preventDefault();
        const myQuestion = questions.find(ques => ques.id === id)
        const correctAnswer = myQuestion.correctAnswer;
        if (correctAnswer) {
            toast(correctAnswer);
        }
    }
    return (
        <div className='questions'>
            <Form>
                <div>
                    {secondSingleQues}
                </div>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`}
                        className="mb-3">
                        {
                            answers.map(answer =>
                                <div>
                                    <Form.Check
                                        inline
                                        label={answer}
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                </div>)
                        }
                        <button onClick={handleSeeAnswerBtn}>See Answer</button>
                    </div>

                ))}
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Question;