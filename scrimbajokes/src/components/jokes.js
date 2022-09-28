import React from 'react'
import Joke from '../images/Joke.png'

export default function Jokes (props) {
    return (

    <div className='Card'>
        <img src={Joke} alt='Laughing Emoji' className='JokeImg' />
        <div>
        <p className='Setup'>{props.setup}</p>
        <p className='Punchline'>{props.punchline}</p>
        </div>
    </div>
)

}
