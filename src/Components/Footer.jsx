import React from 'react'

export class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Твиттер-хуитер</strong> by <a href="">Dimas</a>. The source code is licensed MIT. Написал хуйню и рад. 
          </p>
        </div>
      </footer>
    }
}