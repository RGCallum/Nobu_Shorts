import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const ProImg = styled.div`
display: inline-block;
align-items: center;
img{
  max-width: 250px;
  border-radius: 500px;    
 }

`

class User extends Component {
    state = {
        users: [],
        newUser: {
          username: '',
          password: '',
          email: '',
          bio: '',
          image: '',
        }
      }
    
      handleChange = (event) => {
        const updatedNewUser = {...this.state.newUser}
    
        updatedNewUser[event.target.name] = event.target.value
        this.setState({newUser: updatedNewUser})
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
    
        axios.post('/api/users', this.state.newUser).then(res => {
          console.log(res.data)
          this.props.history.push(`/users/${res.data._id}`)
        })
        
      }
    
      getAllUsers = () => {
        axios.get('/api/users').then((res) => {
          this.setState({users: res.data})
        })
      }
    
      componentDidMount(){
        this.getAllUsers()
      }
    
      render() {
        return (
          <div> 
            <h3>Featured Filmmakers: </h3>
            { this.state.users.map((user) => (
              <div key={user._id}>
                <Link to={`/users/${user._id}`}> <h1>{user.username} </h1> </Link>
              <br/>
               <ProImg>
                  <img src= {user.image} alt="profile pic"/>
                  </ProImg>
                  <br/>
                <h4>
                  {user.bio}</h4> <br/>
                  <br/>
              </div>
            )) }
            
    
            <h3>Sign-Up</h3>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="username">User Name: </label>
                <input onChange={this.handleChange} value={this.state.newUser.username} type="text" name="username"/>
              </div>
              <div>
                <label htmlFor="password">Password: </label>
                <input onChange={this.handleChange} value={this.state.newUser.password} type="password" name="password"/>
              </div>
              <div>
                <label htmlFor="email">Email: </label>
                <input onChange={this.handleChange} value={this.state.newUser.email} type="text" name="email"/>
              </div>
              <div>
                <label htmlFor="bio">Bio: </label>
                <input onChange={this.handleChange} value={this.state.newUser.bio} type="text" name="bio"/>
              </div>
              <div>
                <label htmlFor="image">Image: </label>
                <input onChange={this.handleChange} value={this.state.newUser.image} type="text" name="image"/>
              </div>
              <div>
                <label htmlFor="films">Films: </label>
                <input onChange={this.handleChange} value={this.state.newUser.films} type="text" name="films"/>
              </div>
              <button type="submit">Create User</button>
            </form>
          </div>
        );
      }
    }
    
export default User;