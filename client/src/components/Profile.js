import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Users from './Users';


const BkgdColors = styled.div`

*{
    margin: 0;
}
img{
  border: inset 2px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px black;
}
h1, h2{
  color: black;
  text-shadow: 1px 1px 1px white;
  
}

animation: color-change-5x 30s linear infinite alternate both;

@keyframes color-change-5x {
    0% {
      background: #19dcea;
    }
    25% {
      background: #b22cff;
    }
    50% {
      background: #ea2222;
    }
    75% {
      background: #f5be10;
    }
    100% {
      background: #3bd80d;
    }
  }
text-align: center;
`

const UserStyles = styled.div`
display: flex;
  position: relative;
  flex-direction: column;
  width: 600px;
  height: 600px;
  background: rgb(43, 172, 174, 0.4);
  border-radius: 2px;
  border: inset 5;
  margin: 10px 0;
  background-image: url('/images/filmstrip.png');
  background-size: cover;
  background-position: top;
  background-repeat:no-repeat;
  img{
    margin-left: 30%;
    max-width: 150px;
    max-height: 150px;
}
  
  button {
    position: absolute;
    bottom: 25px;
    right: 260px;
    color: white;
    font-weight: bold;
    background-color: red;
    border-radius: 5px;
    box-shadow: 2px 2px 2px black;

  }

  input, textarea {
    height: 100px;
    background-color: transparent;
    border: none;
    display: flex;
    // justify-content: center;
    text-align: center;
    margin-left: 100px;    
    font-weight: bold;
    // text-shadow: 1px 1px 1px white;
    color: black;
    max-width: 410px;
}

  img{
   max-width: 250px;
   display: block;
   justify-content: center;
   border-radius: 5px;
  }
`


const UsersContainerStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-content: center;
  
`

const NameNButtonStyle = styled.div`
display: flex ;
flex-direction: column ;
flex-wrap: wrap ;
justify-content: space-around ;
align-items: center ;
align-content: flex-end ;
  img{
    max-width: 200px;
    max-height: 200px;
        
   }
`

class Profile extends Component {
    state = {
        user: {},
        username: '',
        password: '',
        email: '',
        bio: '',
        image: '',
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then(res => {
            console.log(res.data)
            this.setState({
                user: res.data,
            })
        })
    }

    handleDelete = userId => {
        if (this.props.match.params.userId) {
            const userId = this.props.match.params.userId;
            console.log(userId);
            axios.delete(`/api/users/${userId}`)
                .then(res => {
                    this.setState({ user: res.data.user });
                    this.props.history.push(`/users/`)

                })
        }
    }

    handleChange = (event) => {
        //take it
        const user = { ...this.state.user }
        //change it
        const name = event.target.name
        const value = event.target.value
        console.log(name, value)
        user[name] = value

        //put it back
        this.setState({ user })
    }

    handleUpdate = () => {
        const userId = this.props.match.params.id
        const updatedUser = this.state.user
        // console.log(userId)
        axios.patch(`/api/users/${userId}`, updatedUser)
            .then((res) => {
                console.log(res.data)
                this.setState({ user: this.state.user })
            })
    }

    render() {

        return (
            <div>
                <BkgdColors>
                    <br />
                    <NameNButtonStyle>
                        <h1>{this.state.user.username}'s Profile </h1><br />
                        <img src={this.state.user.image} alt="film pic" />
                    </NameNButtonStyle>

                    <div> 
                    <h2><Link to={`/users/${this.props.match.params.userId}`}> 🔙  </Link></h2> <br/>
                    <h4>Type in field below to edit Profile </h4> 
                <UsersContainerStyle>


                            <UserStyles>

                                <input
                                    onBlur={() => this.handleUpdate()}
                                    onChange={(event) => this.handleChange(event)}
                                    type="text" name="username" placeholder={this.state.user.username}
                                value={this.state.user.username}
                                />
                                <textarea
                                    onBlur={() => this.handleUpdate()}
                                    onChange={(event) => this.handleChange(event)}
                                    name="image"
                                    value={this.state.user.image}
                                />
                                {/* <img src={this.state.user.image} alt="user pic" /> */}

                                <textarea
                                    onBlur={() => this.handleUpdate()}
                                    onChange={(event) => this.handleChange(event)}
                                    type='password' placeholder='password'
                                    // value={this.state.user.password} 
                                    name="password"
                                />

                                <textarea
                                    onBlur={() => this.handleUpdate()}
                                    onChange={(event) => this.handleChange(event)}
                                    name="email"
                                    value={this.state.user.email}
                                />
                                <textarea
                                    onBlur={() => this.handleUpdate()}
                                    onChange={this.handleChange}
                                    name="bio"
                                    value={this.state.user.bio}
                                />

                                <Link to={`/users`}>
                                    <button onClick={this.handleDelete}>Delete User</button>
                                </Link>

                            </UserStyles>
                        </UsersContainerStyle>
                    </div>

                    </BkgdColors>
            </div>
        )
    }
}
export default Profile
