import React from 'react';
import {CommentInput} from './CommentInput.jsx';
import {Comment} from './Comment.jsx';

export class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likesCount: this.props.info.likesCount,
            hideCommentBlock: true,
            commentsCount: 0
        }
        this.onLikeClick = this.onLikeClick.bind(this);

    }

    onLikeClick() {
        this.setState({
            likesCount: this.state.likesCount + 1
        });
    }

    onCommentClick = () => {
        this.setState({
            hideCommentBlock: !this.state.hideCommentBlock
        })
    }
    onCommentClickOut = () => {
        this.setState({
            hideCommentBlock: true
        });
    }

    render() {
        let likesBlock = <span className="level-item ">{this.state.likesCount != 0 ? this.state.likesCount : " " }</span>
        let commentsBlock = <span className="level-item">
                {this.props.info.comments && this.props.info.comments.length != 0 
                    ? this.props.info.comments.length
                    : ""
                }
            </span>
        return <div className="container" style={{padding: '10px 10%'}}>
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img className="is-rounded" src={this.props.info.user.avatar} alt="Image"/>
                    </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <pre>
                    <strong>{this.props.info.user.name} </strong> <small>{this.props.info.user.login}</small> <small>31m</small>
                    <br />
                    {this.props.info.text}
                    </pre>
                </div>
                <div>
                    <nav className="level is-mobile">
                        {<div className="level-left">
                            <a className="level-item " aria-label="commemt">
                                <span className="icon is-small has-text-danger" onClick={this.onCommentClick}>
                                    <i className="fas fa-comment"></i>
                                </span>
                            </a>
                            {commentsBlock}
                        </div> }
                        <div className="level-right">
                            {likesBlock}
                            <a className="level-item" aria-label="like">
                                <span className="icon is-small has-text-danger">
                                    <i className="fas fa-heart" aria-hidden="true" onClick={this.onLikeClick} />
                                </span>
                            </a>
                        </div>
                    </nav>
                    {this.props.info.comments && this.props.info.comments.length > 0 &&
                        this.props.info.comments.map((comment, index) => {
                            return <Comment key={index} info={comment}/>
                        })    
                    }
                    {this.state.hideCommentBlock
                        ? null
                        : <CommentInput onCommentClickOut={this.onCommentClickOut}/>

                    }
                </div>
               
                </div>
            </article>
        </div>

      </div>
    }

}