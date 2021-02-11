import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pets1 from './images/pets1.jpg';
import Pets2 from './images/pets2.jpeg';
import Pets3 from './images/pets3.jpg'
import './Landing.css'

export default class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <div className='landing__content'>
                    <h2>Welcome to the Petful Adoption agency!</h2>
                    <p>Here at petful, pets are offered for adoption on a first in first out basis.  This means that no animal is left waiting too long to find a new home. Curious about the choice of pets? Petful is home to both cats and dogs.  You will have to get in line to adopt.  Once you are at the front of the line, you will have the chance to adopt your new companion!</p>
                    <hr />
                    <p>Ready to adopt?  Click below!</p>
                    <div className='adoption-link'>
                    <Link 
                        to="/adopt"
                    >
                        <span className='ready-button'>I'm ready!</span>
                    </Link>
                    </div>
                    <div className='pet-photos'>
                        <img src={Pets1} alt='dog-and-cat-cuddling' />
                        <img src={Pets2} alt='cat-touching-dogs-nose' />
                        <img src={Pets3} alt='kitten-and-puppy-taking-a-nap' />
                    </div>
                </div>
            </div>
        )
    }
}
