import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInlinks = () => {
    return(
        <ul className="right">
            <li><NavLink to ='/create'>Nouveau CV</NavLink></li>
            <li><NavLink to ='/'>Déconnexion</NavLink></li>
            <li><NavLink to ='/' className='btn btn-floating red lighten-1'>AA</NavLink></li>
        </ul>
    )
}

export default SignedInlinks