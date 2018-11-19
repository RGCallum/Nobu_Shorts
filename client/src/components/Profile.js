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
        users: [],
       
            username: '',
            password: '',
            email: '',
            bio: '',
            image: '',
        
        
    }


    componentDidMount() {
        // make an api call to get one single user
        // On the server URL is '/api/users/:userId'
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}/profile`).then(res => {
            console.log(res.data)
            this.setState({
                user: res.data,
                users: res.data.users
            })
        })
    }


    handleDelete = userId => {
        // some unique value
        axios.delete(`/api/users/${userId}/profile`).then(() => {
            //Remove the user with userID from this.state.users
            const newUsers = [...this.state.users]
            // Return only users that are NOT the id provided
            const filtered = newUsers.filter(user => {
                return user._id !== userId // ! = =
            })
            // Take filtered data and set it to users
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
        axios.patch(`/api/users/${userId}/profile`, userToUpdate).then(() => {
            console.log("Updated User")
        })
    }

    render() {
        return (
            <div>
                
  
                    
                    <NameNButtonStyle>
                     {/* <h1>{this.state.user.username}'s Users </h1> */}
                        <br />
                    </NameNButtonStyle>
                   

                    <div>Type in field to edit
                <UsersContainerStyle>
                    
                            {this.state.users.map(user => {
                                const deleteUser = () => {

                                    return this.handleDelete(user._id)

                                }

                                return (

                                    <UserStyles>

                                        <input
                                            onBlur={() => this.handleUpdate(user._id)}
                                            onChange={(event) => this.handleChange(event, user._id)}
                                            type="text" name="username" placeholder={'Name'}
                                            value={user.username}
                                        />

                                        <textarea
                                            onBlur={() => this.handleUpdate(user._id)}
                                            onChange={(event) => this.handleChange(event, user._id)}
                                            type='password' value={user.password} name="password" 
                                        />                   

                                        <textarea
                                            onBlur={() => this.handleUpdate(user._id)}
                                            onChange={(event) => this.handleChange(event, user._id)}
                                            name="email" value={user.email} 
                                        />
                                        <textarea
                                            onBlur={() => this.handleUpdate(user._id)}
                                            onChange={(event) => this.handleChange(event, user._id)}
                                            name="bio" value={user.bio} 
                                        />
                                        <textarea
                                            onBlur={() => this.handleUpdate(user._id)}
                                            onChange={(event) => this.handleChange(event, user._id)}
                                            name="image" value={user.image} 
                                        />   <img src={user.image} alt="user pic" />
                                        
                                        <button onClick={deleteUser}>Delete User</button>
                                        <Link to={`/infos/${user._id}/profile`}></Link>
                                        {/* <a href="/infos/:infoId">🎬 User Info</a> */}
                                        {/* <button className = 'button2'>User Info</button> */}


                                    </UserStyles>


                                )
                            })}
                        </UsersContainerStyle>
                    </div>
 
                    Profile
                
                </div>
                )
            }
        }
export default Profile
