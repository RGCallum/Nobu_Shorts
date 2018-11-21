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
  box-shadow: 1px 1px 1px black;

}
h1{
  color: black;
  text-shadow: 1px 1px 1px white;
}



animation: color-change-5x 20s linear infinite alternate both;

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
background-image: url('/images/roll-of-film.png')

`
const UserContainer = styled.div`
background-image: url('/images/filmstrip.png');
background-size: cover;
background-position: top;
background-color: #ffffff70;
width: 45vw;
display: flex ;
flex-direction: column ;
flex-wrap: wrap ;
justify-content: space-around ;
align-items: center ;
align-content: flex-end ;
padding: 10px;
box-shadow: 1px 1px 1px;
h4{
  margin-top: 2%;
  color: black;
  width: 30vw;
  text-align: center;
}
h2{
  margin-top: 15%;
  text-shadow: 1px 1px 1px black;

} 


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
  border-radius: 30px;
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
        {/* <FilmRollImg> */}

          <br />
          <h1>🎥 Featured Nobu Filmmakers: </h1>
          <br />

          {this.state.users.map((user) => (
            <div key={user._id}>

              <UserContainer>
                <Link to={`/users/${user._id}`}>
                  <h2>{user.username}</h2>  <br />
                  <ProImg><img src={user.image} alt="profile pic" /></ProImg>
                </Link>
                <h4> {user.bio}</h4>
              </UserContainer>

            </div>

          ))} <br />

          {/* </FilmRollImg> */}

        </BkgdColors>
      </div>
    );
  }
}

export default User;