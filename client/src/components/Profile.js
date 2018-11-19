import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Users from './Users';




const UserStyles = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 600px;
  height: 600px;
  background: rgb(43, 172, 174, 0.6);
  border-radius: 2px;
  border: inset 5;
  margin: 10px 0;
  
 

  button {
    position: absolute;
    bottom: 5px;
    right: 200px;
    color: white;
    background-color: red;
    border-radius: 5px;
  }
  .button2{
    position: absolute;
    top: 20px;
    left: 10px;
    color: blue; 
  }
  input,
  
  textarea {
      height: 90px;
    background-color: transparent;
    border: none;
     
  }
  input {
    height: 30%;
    
    font-size: 1.3rem;

  }
  textarea {
    height: 70%;

  }
  img{
   max-width: 250px;
       
  }
`


const UsersContainerStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-content: center;
  background-color: rgba(232, 232, 232, 0.653);
  
`

const NameNButtonStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-content: center;
  
`

class Profile extends Component {
    state = {
        users:[],
        user: '',
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
        axios.delete(`/api/users/${userId}`).then(() => {
            const newUsers = [...this.state.users]
            
            const filtered = newUsers.filter(user => {
                return user._id !== userId // ! = =
            })
            this.setState({ users: filtered })
        })
    }


    handleChange = (event, userId) => {
        const { value, name } = event.target
        const newUsers = [...this.state.users]
        const updatedValue = newUsers.map(user => {
            if (user._id === userId) {
                user[name] = value
            }
            return user
        })

        this.setState({ users: updatedValue })
    }

    handleUpdate = (userId) => {
        const userToUpdate = this.state.users.find(user => {
            return user._id === userId
        })
        axios.patch(`/api/users/${userId}`, userToUpdate).then(() => {
            console.log("Updated User")
        })
    }

    render() {

        return (
            <div>
  
                    <NameNButtonStyle>
                     <h1>{this.state.user.username}'s Profile </h1>
                        <br />
                    </NameNButtonStyle>

                    <div>Type in field to edit
                <UsersContainerStyle>


                                    <UserStyles>

                                        <input
                                            onBlur={() => this.handleUpdate()}
                                            onChange={(event) => this.handleChange(event)}
                                            type="text" name="username" 
                                            value={this.state.user.username}
                                        />
                                                                                <textarea
                                            onBlur={() => this.handleUpdate()}
                                            onChange={(event) => this.handleChange(event)}
                                            name="image" 
                                            value={this.state.user.image} 
                                        />   
                                        <img src={this.state.user.image} alt="user pic" />

                                        <textarea
                                            onBlur={() => this.handleUpdate()}
                                            onChange={(event) => this.handleChange(event)}
                                            type='password' 
                                            value={this.state.user.password} name="password" 
                                        />                   

                                        <textarea
                                            onBlur={() => this.handleUpdate()}
                                            onChange={(event) => this.handleChange(event)}
                                            name="email" 
                                            value={this.state.user.email} 
                                        />
                                        <textarea
                                            onBlur={() => this.handleUpdate()}
                                            onChange={(event) => this.handleChange(event)}
                                            name="bio" 
                                            value={this.state.user.bio} 
                                        />
                                      
                                        {/* <button onClick={deleteUser}>Delete User</button> */}

                                    </UserStyles>


                                {/* ) */}
                            {/* })} */}
                        </UsersContainerStyle>
                    </div>
 
                    Profile
                
                </div>
                )
            }
        }
export default Profile