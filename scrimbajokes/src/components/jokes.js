import React from 'react'
import Joke from '../images/Joke.png'

export default function Jokes (props) {
    return (
    
    <div className='container'>
        <div className='Card'>
        <img src={Joke} alt='Laughing Emoji' className='JokeImg' />
        <div className='Setup'>
        <p>{props.setup}</p>
        </div>
        <div className='Punchline'>
        <p>{props.punchline}</p>
        </div>
        </div>
    </div>
)

}
