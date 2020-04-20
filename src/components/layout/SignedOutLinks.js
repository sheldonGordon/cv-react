import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutlinks = () => {
    return(
        <ul className="right">
            <li><NavLink to ='/'>Créer un compte</NavLink></li>
            <li><NavLink to ='/'>Connexion</NavLink></li>
        </ul>
    )
}

export default SignedOutlinks