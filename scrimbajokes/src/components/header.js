import React from "react";
import Laughing from '../images/Laughing.png'


export default function Header () {
    return (
        <div className="Banner">
            <p className="Title"> Tell us a joke . . .  </p>
            <img src={Laughing} alt='Laughing Emoji' className="LaughingImg" />
        </div>
    )
}