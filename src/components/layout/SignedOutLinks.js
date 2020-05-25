import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import { Menu } from 'antd'

const SignedOutlinks = () => {
    return(
        <Menu theme='dark' mode='horizontal'>
            <Menu.Item><Link to='/' className="brand-logo">Curriculums</Link></Menu.Item>
            <Menu.Item><NavLink to ='/signup'>Créer un compte</NavLink></Menu.Item>
            <Menu.Item><NavLink to ='/signin'>Connexion</NavLink></Menu.Item>
        </Menu>
    )
}

export default SignedOutlinks