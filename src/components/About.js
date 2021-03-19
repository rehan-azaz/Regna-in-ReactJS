import React, { Component } from 'react';


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutItems: [
        { id: 1, delay: "100", iconClass: "bi bi-briefcase", linkURL: "/#", title: "Eiusmod Tempor", description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi" },
        { id: 2, delay: "200", iconClass: "bi bi-card-checklist", linkURL: "/#", title: "Magni Dolores", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
        { id: 3, delay: "300", iconClass: "bi bi-binoculars", linkURL: "/#", title: "Dolor Sitema", description: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata" }
      ]
    }
  }


  AboutItem(item) {
    return (
      <div className="icon-box" data-aos="fade-up" data-aos-delay={item.delay} key={item.id}>
        <div className="icon"><i className={item.iconClass}></i></div>
        <h4 className="title"><a href={item.linkURL}>{item.title}</a></h4>
        <p className="description">{item.description}</p>
      </div>
    );
  }
  render() {
    return (
      <>
        {this.state.aboutItems.map(item => (
          this.AboutItem(item)
        ))}
      </>
    );
  }
}

export default About;