import React from 'react'
import { Link } from 'react-router-dom'
import SignedInlinks from './SignedInLinks'
import SignedOutlinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth } = props
    const links = auth.uid ? <SignedInlinks /> : <SignedOutlinks />
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Curriculums</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar)