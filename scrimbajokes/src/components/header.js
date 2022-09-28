import React from "react";
import Laughing from '../images/TellUsAJoke.JPG'

export default function Header () {
    return (
        <div className="Banner">
            <img src={Laughing} alt='Laughing Emoji' className="LaughingImg" />
        </div>
    )
}