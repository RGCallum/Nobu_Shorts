import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


// Need info about a film
// Need info about that films films

const FilmStyles = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 200px;
  height: 100px;
  background: rgb(43, 172, 174, 0.6);
  margin: 10px 0;
  

  button {
    position: absolute;
    top: 5px;
    right: 10px;
    color: red;
  }
  input,
  textarea {
    background-color: transparent;
    border: none;
     
  }
  input {
    height: 30%;
    font-size: 1.3rem;
    // background-color: rgba(232, 232, 232, 0.653);

  }
  textarea {
    height: 70%;

  }
`

const NewFilmButton = styled.button`
  background: #1d3557;
  color: white;
  font-size: 1.3rem;
  padding: 10px 10px;
  border-radius: 5px;

`

const FilmsContainerStyle = styled.div`
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

class Film extends Component {
    state = {
        films: [],
        newFilm: {
          name: '',
          image: '',
          link: '',
        //   info: '',

        }
      }
    
    
  componentDidMount() {
    // make an api call to get one single user
    // On the server URL is '/api/users/:userId'
    const userId = this.props.match.params.userId
    axios.get(`/api/users/${userId}`).then(res => {
      console.log(res.data)
      this.setState({
        user: res.data,
        films: res.data.films
      })
    })
  }

  handleCreateNewFilm = () => {
    const userId = this.props.match.params.userId
    const payload = {
      name: 'Film Title',
      image: 'Film Description',
      link: 'Film Description',
      info: 'Film Description'

    }
    axios.post(`/api/users/${userId}/films`, payload).then(res => {
      const newFilm = res.data
      const newStateFilms = [...this.state.films, newFilm]
      this.setState({ films: newStateFilms })
    })
  }

  handleDelete = filmId => {
    // some unique value
    axios.delete(`/api/films/${filmId}`).then(() => {
      //Remove the film with filmID from this.state.films
      const newFilms = [...this.state.films]
      // Return only films that are NOT the id provided
      const filtered = newFilms.filter(film => {
        return film._id !== filmId // ! = =
      })
      // Take filtered data and set it to films
      this.setState({ films: filtered })
    })
  }



  handleChange = (event, filmId) => {
    // const name = event.target.name
    // const value = event.target.value
    const { value, name } = event.target
    const newFilms = [...this.state.films]
    const updatedValue = newFilms.map(film => {
      if (film._id === filmId) {
        film[name] = value
      }
      return film
    })

    this.setState({ films: updatedValue })
  }

  handleUpdate = (filmId) => {
    // Find the individual updated film from this.state.films
    const filmToUpdate = this.state.films.find(film => {
      return film._id === filmId
    })
    // axios post the endpoint with updated data
    axios.patch(`/api/films/${filmId}`, filmToUpdate).then(() => {
      console.log("Updated Film")
    })
    // console .log saved
  }

  render() {
    return (
      <div>
        {/* <NameNButtonStyle> */}

          <h1>{this.state.user.username}'s Films </h1>
          <br />
        {/* </NameNButtonStyle> */}
        <NewFilmButton onClick={this.handleCreateNewFilm}>
          New Film
        </NewFilmButton>


        <FilmsContainerStyle>
          {this.state.films.map(film => {
            const deleteFilm = () => {
              return this.handleDelete(film._id)
            }

            return (
              <FilmStyles>
                <input
                  onBlur={() => this.handleUpdate(film._id)}
                  onChange={(event) => this.handleChange(event, film._id)}
                  type="text" name="title"
                  value={film.title}
                />
                <textarea
                  onBlur={() => this.handleUpdate(film._id)}
                  onChange={(event) => this.handleChange(event, film._id)}
                  name="description"
                  value={film.description}
                />
                <button onClick={deleteFilm}>X</button>

              </FilmStyles>


            )
          })}
        </FilmsContainerStyle>
      </div>
    )
  }
}
export default Film