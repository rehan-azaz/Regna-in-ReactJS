import React, { Component } from 'react'

class Team extends Component {
    constructor(props){
      super(props);
      this.state = { 
        team:[
          {id:1, dataIosDelay:"100", imgURL:"assets/img/team-1.jpg", name:"Walter White", role:"Chief Executive Officer",
            links:[
              {id:1, linkURL:"/#", classes:"bi bi-twitter"},
              {id:2, linkURL:"/#", classes:"bi bi-facebook"},
              {id:3, linkURL:"/#", classes:"bi bi-instagram"},
              {id:4, linkURL:"/#", classes:"bi bi-linkedin"}
            ]
          },
          {id:2, dataIosDelay:"200", imgURL:"assets/img/team-2.jpg", name:"Sarah Jhinson", role:"Product Manager", 
            links:[
              {id:1, linkURL:"/#", classes:"bi bi-twitter"},
              {id:2, linkURL:"/#", classes:"bi bi-facebook"},
              {id:3, linkURL:"/#", classes:"bi bi-instagram"},
              {id:4, linkURL:"/#", classes:"bi bi-linkedin"}
            ]
          },
          {id:3, dataIosDelay:"300", imgURL:"assets/img/team-3.jpg", name:"William Anderson", role:"CTO",
          links:[
            {id:1, linkURL:"/#", classes:"bi bi-twitter"},
            {id:2, linkURL:"/#", classes:"bi bi-facebook"},
            {id:3, linkURL:"/#", classes:"bi bi-instagram"},
            {id:4, linkURL:"/#", classes:"bi bi-linkedin"}
          ]
          },
          {id:4, dataIosDelay:"400", imgURL:"assets/img/team-4.jpg", name:"Amanda Jepson", role:"Accountant",
            links:[
              {id:1, linkURL:"/#", classes:"bi bi-twitter"},
              {id:2, linkURL:"/#", classes:"bi bi-facebook"},
              {id:3, linkURL:"/#", classes:"bi bi-instagram"},
              {id:4, linkURL:"/#", classes:"bi bi-linkedin"}
            ]
          }
        ]
     }
    }
     

     TeamCard(teamMember){
      var linkBar = teamMember.links.map(link=>(
        <a href={link.linkURL} key={link.id} ><i className={link.classes}></i></a>
      ))
      return(
          <div className="col-lg-3 col-md-6" key={teamMember.id}>
              <div className="member" data-aos="fade-up" data-aos-delay={teamMember.dataIosDelay}>
                <div className="pic"><img src={teamMember.imgURL} alt="" /></div>
                <h4>{teamMember.name}</h4>
                <span>{teamMember.role}</span>
                <div className="social">
                {linkBar}
                </div>
              </div>
            </div>
      );
  }
    render() { 
      return (    
        <div className="row">
          {this.state.team.map(teamMember=>(
              this.TeamCard(teamMember)
            ))}
        </div>
      );
    }
}
 
export default Team;