import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

const SignedInlinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to ='/create'>Nouveau CV</NavLink></li>
            <li><a href='/#' onClick={props.signOut}>Déconnexion</a></li>
            <li><NavLink to ='/' className='btn btn-floating red lighten-1'>AA</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInlinks)