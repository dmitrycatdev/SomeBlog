import React from 'react'

export class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
        this.onChangeText = this.onChangeText.bind(this);
    }
    addNewPost = () => {
        this.props.addPost(this.state.inputText);
        this.setState({
            inputText: ''
        })
    }
    onChangeText = (e) => {
        this.setState({
            inputText: e.target.value
        }) 
    }

    render() {
        var self = this;
        return (
        <div className="container" style={{padding: '30px 10%'}}>
            <div className="field">
                <div className="control">
                    <textarea 
                        onKeyPress={(e) => {
                            if(e.charCode==13) {
                                this.addNewPost()
                            }
                        }}
                        onChange={(e) => {
                            this.setState({ inputText: e.target.value })
                        }}
                        value={this.state.inputText} 
                        className="textarea" 
                        placeholder="Твой высер никому не нужен.."></textarea>
                </div>
            </div>
            {(this.state.inputText.length > 0 && this.state.inputText.length < 150)
                ? <a onClick={this.addNewPost} className="button is-danger">Запостить</a>
                : <a disabled className="button is-danger ">Запостить</a>
            }

        </div> 
        );
    }
}