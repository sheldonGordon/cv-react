import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutlinks = () => {
    return(
        <ul className="right">
            <li><NavLink to ='/signup'>Créer un compte</NavLink></li>
            <li><NavLink to ='/signin'>Connexion</NavLink></li>
        </ul>
    )
}

export default SignedOutlinks