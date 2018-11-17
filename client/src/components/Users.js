import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



class User extends Component {
    state = {
        users: [],
        newUser: {
          username: '',
          password: '',
          email: '',
          bio: '',
          image: '',
        //   films: [],
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
            <h3>All Users: </h3>
            { this.state.users.map((user) => (
              <div key={user._id}>
                <Link to={`/users/${user._id}`}>{user.username}</Link>
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