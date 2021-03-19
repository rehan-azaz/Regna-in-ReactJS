import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {
          id: 0,
          name: 'Home',
          link: '/#hero',
          class: 'nav-link scrollto active',
          children: []
        },
        {
          id: 1,
          name: 'About',
          link: '/#about',
          class: 'nav-link scrollto',
          children: []
        },
        {
          id: 2,
          name: 'Services',
          link: '/#services',
          class: 'nav-link scrollto',
          children: []
        },
        {
          id: 3,
          name: 'Portfolio',
          link: '/#portfolio',
          class: 'nav-link scrollto',
          children: []
        },
        {
          id: 4,
          name: 'Team',
          link: '/#team',
          class: 'nav-link scrollto',
          children: []
        },
        {
          id: 5,
          name: 'Drop Down',
          link: '/#',
          class: 'dropdown',
          iconClass: 'bi bi-chevron-down',
          children: [
            {
              id: 7,
              name: 'Drop Down 1',
              link: '/#',
              children: []
            },
            {
              id: 8,
              name: 'Deep Drop Down',
              link: '/#',
              class: 'dropdown',
              iconClass: 'bi bi-chevron-right',
              children: [
                {
                  id: 12,
                  name: 'Deep Drop Down 1',
                  link: '/#',
                  children: []
                },
                {
                  id: 13,
                  name: 'Deep Drop Down 2',
                  link: '/#',
                  children: []
                },
                {
                  id: 14,
                  name: 'Deep Drop Down 3',
                  link: '/#',
                  children: []
                },
                {
                  id: 15,
                  name: 'Deep Drop Down 4',
                  link: '/#',
                  children: []
                },
                {
                  id: 16,
                  name: 'Deep Drop Down 5',
                  link: '/#',
                  children: []
                },
              ]
            },
            {
              id: 9,
              name: 'Drop Down 2',
              link: '/#',
              children: []
            },
            {
              id: 10,
              name: 'Drop Down 3',
              link: '/#',
              children: []
            },
            {
              id: 11,
              name: 'Drop Down 4',
              link: '/#',
              children: []
            },
          ]
        },
        {
          id: 6,
          name: 'Contact',
          link: '/#contact',
          class: 'nav-link scrollto',
          children: []
        }
      ]
    }
  }

  DisplayNavLinks(navItem) {
    if (navItem.children.length > 0) {
      return (
        <li className={navItem.class} key={navItem.id}><a href={navItem.link}><span>{navItem.name}</span><i className={navItem.iconClass}></i></a>
          <ul>
            {navItem.children.map(navItem => (
              this.DisplayNavLinks(navItem)
            ))}
          </ul>
        </li>
      );
    }
    else {
      return (
        <li key={navItem.id}><a className={navItem.class} href={navItem.link}>{navItem.name}</a></li>
      );
    }
  }

  render() {
    return (
      <nav id="navbar" className="navbar">
        <ul>
          {this.state.navItems.map(navItem => (
            this.DisplayNavLinks(navItem)
          ))}
        </ul>

        <i className="bi bi-list mobile-nav-toggle" ></i>
      </nav>
    );
  }
}

export default Navbar;
