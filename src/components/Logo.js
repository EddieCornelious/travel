import React from "react";
import "../styles/Logo.scss";

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  render() {
    return (
      <div className="logo">
        <h1 className="logo__heading">Manuel's</h1>
      </div>
    );
  }
}

export default Logo;
