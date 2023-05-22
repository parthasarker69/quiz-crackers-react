import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <div>
                <img className='web-logo' src="https://media1.thehungryjpeg.com/thumbs2/ori_3490124_c128d45b04a6b32c3e7229155e64806e015e85c4_quiz-game-show-logo-quizzes-and-test-competition-icon-with-tick-symbo.jpg" alt="" />
            </div>
            <div>
                <Link to='/topics'> Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blogs'>Blogs</Link>
            </div>

        </div>
    );
};

export default Navbar;