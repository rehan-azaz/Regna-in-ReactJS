import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, imgURL: "assets/img/portfolio/portfolio-1.jpg", itemClass: "col-lg-4 col-md-6 portfolio-item filter-app", itemName: "App 1", itemText: "App", title: "App 1" },
        { id: 2, imgURL: "assets/img/portfolio/portfolio-2.jpg", itemClass: "col-lg-4 col-md-6 portfolio-item filter-web", itemName: "Web 3", itemText: "Web", title: "Web 3" },
        { id: 3, imgURL: "assets/img/portfolio/portfolio-3.jpg", itemClass: "col-lg-4 col-md-6 portfolio-item filter-app", itemName: "App 2", itemText: "App", title: "App 2" },
        { id: 4, imgURL: "assets/img/portfolio/portfolio-4.jpg", itemClass: "col-lg-4 col-md-6 portfolio-item filter-card", itemName: "Card 2", itemText: "Card", title: "Card 2" },
        { id: 5, imgURL: "assets/img/portfolio/portfolio-5.jpg", itemClass: "col-lg-4 col-md-6 portfolio-item filter-web", itemName: "Web 2", itemText: "Web", title: "Web 2" },
        { id: 6, imgURL: "assets/img/portfolio/portfolio-6.jpg", itemClass: "col-lg-4 col-md-6 portfolio-item filter-app", itemName: "App 3", itemText: "App", title: "App 3" },
        { id: 7, imgURL: "assets/img/portfolio/portfolio-7.jpg", itemClass: "col-lg-4 col-md-6 portfolio-item filter-card", itemName: "Card 1", itemText: "Card", title: "Card 1" },
        { id: 8, imgURL: "assets/img/portfolio/portfolio-8.jpg", itemClass: "col-lg-4 col-md-6 portfolio-item filter-card", itemName: "Card 3", itemText: "Card", title: "Card 3" },
        { id: 9, imgURL: "assets/img/portfolio/portfolio-9.jpg", itemClass: "col-lg-4 col-md-6 portfolio-item filter-web", itemName: "Web 1", itemText: "Web", title: "Web 1" }
      ]
    }
  }

  PortfolioItems(item) {
    return (
      <div className={item.itemClass} key={item.id}>
        <img src={item.imgURL} className="img-fluid" alt="" />
        <div className="portfolio-info">
          <h4>{item.itemName}</h4>
          <p>{item.itemText}</p>
          <a href={item.imgURL} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title={item.title}><i className="bx bx-plus"></i></a>
          <a href="/portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
        </div>
      </div>
    );
  }
  render() {
    return (
      <>
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          {this.state.items.map(item => (
            this.PortfolioItems(item)
          ))}
        </div>
      </>
    );
  }
}

export default Portfolio;