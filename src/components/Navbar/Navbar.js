import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <img className='web-logo' src="https://media1.thehungryjpeg.com/thumbs2/ori_3490124_c128d45b04a6b32c3e7229155e64806e015e85c4_quiz-game-show-logo-quizzes-and-test-competition-icon-with-tick-symbo.jpg" alt="" />
            </div>
            <div>
                <NavLink
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    to='/topics'> Topics</NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    to='/statistics'>Statistics</NavLink>
                <NavLink
                    lassName={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    to='/blogs'>Blogs</NavLink>
            </div>

        </div>
    );
};

export default Navbar;