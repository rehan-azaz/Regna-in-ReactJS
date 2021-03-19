import React, { Component } from 'react';

class CallToAction extends Component {
  state = {
    heading: "Call To Action",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    linkURL: "/#",
    btnText: "Call To Action"
  }
  render() {
    return (
      <>
        <div className="col-lg-9 text-center text-lg-start">
          <h3 className="cta-title">{this.state.heading}</h3>
          <p className="cta-text">{this.state.text} </p>
        </div>
        <div className="col-lg-3 cta-btn-container text-center">
          <a className="cta-btn align-middle" href={this.state.linkURL}>{this.state.btnText}</a>
        </div>
      </>
    );
  }
}

export default CallToAction;