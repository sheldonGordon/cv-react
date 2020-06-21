import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";

import { Menu, Avatar } from "antd";
const SignedInlinks = (props) => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[""]}>
      <Menu.Item key="racine">
        <Link to="/" className="brand-logo">
          Curriculums
        </Link>
      </Menu.Item>
      <Menu.Item key="create">
        <NavLink to="/create">Nouveau CV</NavLink>
      </Menu.Item>
      <Menu.Item key="signout">
        <a href="/#" onClick={props.signOut}>
          Déconnexion
        </a>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/">
          <Avatar
            size={40}
            style={{
              backgroundColor: "rgb(245, 106, 0)",
              verticalAlign: "middle",
            }}
          >
            {props.profile.initials}
          </Avatar>
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(null, mapDispatchToProps)(SignedInlinks);
