import React, { Component } from 'react';

class Services extends Component {
  constructor(props){
    super(props);
    this.state = {
      services:[
        {id:1, linkURL:"/#", iconClass:"bi bi-briefcase", title:"Lorem Ipsum", description:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"},
        {id:2, linkURL:"/#" ,iconClass:"bi bi-card-checklist", title:"Dolor Sitema", description:"Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata"},
        {id:3, linkURL:"/#" ,iconClass:"bi bi-bar-chart", title:"Sed ut perspiciatis", description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"},
        {id:4, linkURL:"/#" ,iconClass:"bi bi-binoculars", title:"Magni Dolores", description:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
        {id:5, linkURL:"/#" ,iconClass:"bi bi-brightness-high", title:"Nemo Enim", description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"},
        {id:6, linkURL:"/#" ,iconClass:"bi bi-calendar4-week", title:"Eiusmod Tempor", description:"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi"},
      ]
    }
  }
  DisplayServices(service){
    return(
      <div className="col-lg-4 col-md-6" data-aos="zoom-in" key={service.id}>
        <div className="box">
          <div className="icon"><a href={service.linkURL}><i className={service.iconClass}></i></a></div>
          <h4 className="title"><a href={service.linkURL}>{service.title}</a></h4>
          <p className="description">{service.description}</p>
        </div>
      </div>
    );
  }
  render() { 
    return (
      <div className="row">
        {this.state.services.map(service=>(
          this.DisplayServices(service)
        ))}
      </div>
      );
  }
}
 
export default Services;

