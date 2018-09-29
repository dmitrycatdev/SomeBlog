import React from 'react';
const ClickOutHandler = require('react-onclickout');

export class CommentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
    }
    addNewComment = () => {

    }

    render() {
        return <ClickOutHandler onClickOut={() => {this.props.onCommentClickOut()}}>
            <div className="field">
                <div className="control" >
                    <textarea 
                        onChange={(e) => {
                            this.setState({ inputText: e.target.value })
                        }}
                        style={{height: "50%"}} 
                        className="textarea" 
                        placeholder="Никто не спрашивал твоего мнения.."></textarea>
                </div>
            </div>
            {(this.state.inputText.length > 0 && this.state.inputText.length < 150)
                ? <a onClick={this.addNewPost} className="button is-danger">Отправить</a>
                : <a disabled className="button is-danger ">Отправить</a>
            }
        </ClickOutHandler>
    }
}