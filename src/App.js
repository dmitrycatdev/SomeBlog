import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Post} from './Components/Post/Post.jsx'
import {Header} from './Components/Header.jsx'
import { NewPost } from './Components/NewPost.jsx'
import { Footer } from './Components/Footer.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        id: 1,
        name: 'Unregistered User',
        login: '@unregistered',
        avatar: "https://yt3.ggpht.com/a-/ACSszfHSSfTTHK5CTN49Ooog6dEeppxWpF3YVT2swg=s900-mo-c-c0xffffffff-rj-k-no"
      },
      posts: [
        {
          user: users[0],
          text: "че пацаны аниме",
          likesCount: 0,
          comments: [
            {
              user: users[1],
              text: "Пошел нахуй",
              createDate: new Date()
            }
          ]
        },
        {
          user: users[1], 
          text: "Сука ебаные коты ненавижу здохните мрази ",
          likesCount: 0,
          comments: []
        },
        {
          user: users[2],
          text: "Часик в радость чефир в сладость \nНогам ходу голове приходу",
          likesCount: 0,
          comments: []
        }
      ]
    }
  }

  pushNewPostInfo = (postInfo) => {
    var arr = this.state.posts; 
    arr.push({
      id: this.state.posts.length+1,
      name: this.state.userInfo.name,
      login: this.state.userInfo.login,
      text: postInfo,
      avatar: this.state.userInfo.avatar,
      likesCount: 0
    });
    this.setState({arr});
  }

  render() {
    const postsToRender = this.state.posts;
    return (
    <div>
      <Header />
      <NewPost 
        user={this.state.userInfo} 
        addPost={this.pushNewPostInfo} />
      {
        this.state.posts.slice().reverse().map((post, index) => {
          return <Post key={index} info={post}/>
        })
      }
      <Footer />
    </div>
    );
  }
  
}

const users = [
  {
    id: 1,
    name: "Димас", 
    login: "@dimasvzheppuraz",
    avatar: "http://www.files-warehouse.com/files/stickers/85/851d/851d0b9992a4266cc824e72e8eb4b064.jpg"
  },
  {
    id:2,
    name: "Чмоха", 
    login: "@chmo", 
    avatar: "http://www.files-warehouse.com/files/stickers/97/9730/9730edeb0d85352e92fe3b8f1d0f63b9.jpg"      
  },
  {
    id:3,
    name: "Павук Бродяга", 
    login: "@pavuk", 
    avatar: "https://4.404content.com/1/9E/A6/1183390199097853728/fullsize.jpg"
  }
]

export default App;
