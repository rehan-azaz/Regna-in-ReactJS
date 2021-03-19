import React, { Component } from 'react';
import About from './About';
import Facts from './Facts';
import Services from './Services';
import CallToAction from './CallToAction';
import Portfolio from './Portfolio';
import Team from './Team';
import Contact from './Contact';



class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        { id: 0, sectionID: "hero", dataAOS: "zoom-in", dataAosDelay: "100", sectionTitle: "Welcome to Regna", sectionDescription: "We are team of talented designers making websites with Bootstrap", btnText: "Get Started" },
        { id: 1, comp: <About />, sectionID: "about", dataAOS: "fade-up", sectionTitle: "Few Words About Us", sectionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { id: 2, comp: <Facts />, sectionID: "facts", dataAOS: "fade-up", sectionTitle: "Facts", sectionDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque" },
        { id: 3, comp: <Services />, sectionID: "services", dataAOS: "fade-up", sectionTitle: "Services", sectionDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque" },
        { id: 4, comp: <CallToAction />, sectionID: "call-to-action", dataAOS: "zoom-in" },
        { id: 5, comp: <Portfolio />, sectionID: "portfolio", dataAOS: "fade-up", sectionTitle: "Portfolio", sectionDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque" },
        { id: 6, comp: <Team />, sectionID: "team", sectionCLass: "", dataAOS: "fade-up", sectionTitle: "Team", sectionDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque" },
        { id: 7, comp: <Contact />, sectionID: "contact", sectionCLass: "", dataAOS: "", sectionTitle: "Contact", sectionDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque" },
      ]
    }
  }

  DisplaySection(section) {
    if (section.id === 0) {
      return (
        <>
          <section id={section.sectionID} key={section.id}>
            <div className="hero-container" data-aos={section.dataAOS} data-aos-delay={section.dataAosDelay}>
              <h1>{section.sectionTitle}</h1>
              <h2>{section.sectionDescription}</h2>
              <a href="#about" className="btn-get-started">{section.btnText}</a>
            </div>
          </section>
        </>
      );
    }
    else if (section.id === 1) {
      return (
        <section id={section.sectionID} key={section.id}>
          <div className="container" data-aos={section.dataAOS}>
            <div className="row about-container">
              <div className="col-lg-6 content order-lg-1 order-2">
                <h2 className="title">{section.sectionTitle}</h2>
                <p>{section.sectionDescription}</p>
                {section.comp}
              </div>
              <div className="col-lg-6 background order-lg-2 order-1" data-aos="fade-left" data-aos-delay="100"></div>
            </div>
          </div>
        </section>
      );
    }
    else if (section.id === 4) {
      return (
        <section id={section.sectionID} key={section.id}>
          <div className="container" data-aos={section.dataAOS}>
            <div className="row" data-aos={section.dataAOS}>
              {section.comp}
            </div>
          </div>
        </section>
      );
    }
    else {
      return (
        <section id={section.sectionID} key={section.id}>
          <div className="container" data-aos={section.dataAOS}>
            <div className="section-header">
              <h3 className="section-title">{section.sectionTitle}</h3>
              <p className="section-description">{section.sectionDescription}</p>
            </div>
            {section.comp}
          </div>
        </section>
      );
    }
  }
  render() {
    return (
      <>
        {this.state.sections.map(section => (
          this.DisplaySection(section)
        ))}

      </>

    );
  }
}

export default Section;