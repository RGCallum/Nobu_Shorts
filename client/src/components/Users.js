import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const BkgdColors = styled.div`
display: flex ;
flex-direction: column ;
flex-wrap: wrap ;
justify-content: center ;
align-items: center ;
align-content: center ;
z-index: 1;
*{
    margin: 0;
}
img{
  border: inset 2px;
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

`
const FilmRollImg = styled.div`
z-index: 3;
position: absolute
`
const UserContainer = styled.div`
border: inset #C0C0C0;
background-color: #ffffff70;
width: 30vw;
border-radius: 15px;
display: flex ;
flex-direction: column ;
flex-wrap: wrap ;
justify-content: space-around ;
align-items: center ;
align-content: flex-end ;
padding: 10px;
box-shadow: 1px 1px 1px;

`

const ProImg = styled.div`
display: flex ;
flex-direction: row ;
flex-wrap: wrap ;
justify-content: center ;
align-items: center ;
align-content: center ;
img{
  max-width: 150px;
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
    const updatedNewUser = { ...this.state.newUser }

    updatedNewUser[event.target.name] = event.target.value
    this.setState({ newUser: updatedNewUser })
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
      this.setState({ users: res.data })
    })
  }

  componentDidMount() {
    this.getAllUsers()
  }

  render() {
    return (
      <div>

        <BkgdColors>
       
          <br />
          <h1>Featured Filmmakers: </h1>
          <br />

          {this.state.users.map((user) => (
            <div key={user._id}>

              <UserContainer>
                <Link to={`/users/${user._id}`}>
                  <h2>{user.username}</h2>  <br />
                  <ProImg><img src={user.image} alt="profile pic" /></ProImg>
                  <br />
                </Link>
                <h5> {user.bio}</h5>
                <br />
              </UserContainer>

            </div>

          ))} <br />


        </BkgdColors>
        {/* <FilmRollImg>
            <img src="/images/roll-of-film.png" alt="" />
          </FilmRollImg> */}
      </div>
    );
  }
}

export default User;