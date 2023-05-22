import React from 'react';
import './Topics.css'
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
const Topics = () => {
    const quizesData = useLoaderData();
    const quizes = quizesData.data;
    return (
        <div>
            <div className='header-title'>
                <h1>
                    <span>always be</span>
                    <div class="message">
                        <div class="word1">close</div>
                        <div class="word2">code</div>
                        <div class="word3">creating</div>
                    </div>
                </h1>
            </div>
            <div className='quizes'>
                {
                    quizes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Topics;