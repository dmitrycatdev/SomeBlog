import React from "react";

export class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return <div>
        <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                    <img className="is-rounded" src={this.props.info.user.avatar} alt="Image" />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <pre>
                    <strong>{this.props.info.user.name} </strong> <small>{this.props.info.user.login}</small> 
                    <small>{this.props.info.createDate.toUTCString()}</small>
                    <br />
                    {this.props.info.text}
                    </pre>
                </div>
            </div>
        </article>
    </div>;
    }
}