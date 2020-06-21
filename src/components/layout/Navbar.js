import React from "react";
import SignedInlinks from "./SignedInLinks";
import SignedOutlinks from "./SignedOutLinks";
import { connect } from "react-redux";

import { Layout } from "antd";

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedInlinks profile={profile} />
  ) : (
    <SignedOutlinks />
  );
  return <Layout.Header>{links}</Layout.Header>;
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(Navbar);
