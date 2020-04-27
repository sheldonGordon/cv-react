import React from 'react'
import { Link } from 'react-router-dom'
import SignedInlinks from './SignedInLinks'
import SignedOutlinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Curriculums</Link>
                <SignedInlinks />
                <SignedOutlinks />
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return{

    }
}
export default connect(mapStateToProps)(Navbar)