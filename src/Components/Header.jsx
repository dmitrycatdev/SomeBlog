import React from 'react'

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Твиттер-хуитер
            </h1>
          </div>
        </div>
      </section>
      
    }
}