import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Quiz.css'
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { id, logo, name } = quiz;
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img className='quiz-image' variant="top" src={logo} />
            <Card.Body className='quiz-body'>
                <Card.Title className='quiz-title'>{name}</Card.Title>

                <Link to={`/quiz/${id}`}>
                    <Button variant="primary">Start quizz <img className='arrow-image' src="https://tse4.mm.bing.net/th?id=OIP.zAk5CQCf8H_09pgNAwcUugHaFy&pid=Api&P=0&h=180" alt="" />
                    </Button>
                </Link>
            </Card.Body>
        </Card>

    );
};

export default Quiz;