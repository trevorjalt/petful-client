import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <div className='landing__content'>
                <h1>petFul adoptions</h1>
                <p>Welcome to the petFul FIFO adoption agency!</p>
                <img src='https://www.purelypetsinsurance.co.uk/media/1136/kitten-touching-dog.jpg' alt='Dog and cat playing together' />
                <p>At petFul you have the choice between a dog and a cat, and animals are adopted on a first in, first out basis.  You will have to get in line to adopt.  Once you are at the front of the line, you will have the chance to adopt your new companion!</p>
                <p>Ready to adopt?  Click below!</p>
                <Link 
                    to="/adopt"
                >
                    I'm ready!
                </Link>
                </div>
            </div>
        )
    }
}

export default Landing