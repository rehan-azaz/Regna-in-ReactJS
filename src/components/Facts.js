import React, { Component } from 'react'

class Facts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      facts: [
        { id: 1, start: "0", end: "232", duration: "1", class: "purecounter", factName: "Clients" },
        { id: 2, start: "0", end: "232", duration: "1", class: "purecounter", factName: "Projects" },
        { id: 3, start: "0", end: "1463", duration: "1", class: "purecounter", factName: "Hours Of Support" },
        { id: 4, start: "0", end: "42", duration: "1", class: "purecounter", factName: "Hard Workers" }
      ]
    }
  }

  Counter(start, end) {

    let i = start;
    console.log(i);
    for (i; i === end; i++) {
      return (
        <p>
          {i}
        </p>
      );
    }
  }
  Fact(fact) {
    return (
      <div className="col-lg-3 col-6 text-center" key={fact.id}>
        <span className="purecounter" >
          {this.Counter(fact.start, fact.end)}
        </span>
        <p>{fact.factName}</p>
      </div>
    );
  }
  render() {
    return (
      <div className="row counters">
        {this.state.facts.map(fact => (
          this.Fact(fact)
        ))}
      </div>
    );
  }
}

export default Facts;