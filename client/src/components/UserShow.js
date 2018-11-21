import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const BkgdColors = styled.div`

*{
    margin: 0;
}
img{
  border: inset 2px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px black;
}
h1{
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

const FilmStyles = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 600px;
  height: 600px;
  background: rgb(43, 172, 174, 0.5);
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
    background-color: red;
    border-radius: 5px;
    box-shadow: 2px 2px 2px black;
    font-weight: bold;

  }

  input, textarea {
    height: 40px;
    background-color: transparent;
    border: none;
    display: flex;
    margin-left: 100px;    
    // justify-content: center;
    text-align: center;
    font-weight: bold;
    // text-shadow: 1px 1px 1px white;
    color: black;
    max-width: 420px;
}

  img{
   max-width: 250px;
   display: block;
   justify-content: center;
   border-radius: 5px;
  }
`

const NewFilmButton = styled.button`
  background: #1d355763;
  color: white;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 10px ;
  border-radius: 5px;
  box-shadow: 2px 2px 2px black;


`

const FilmsContainerStyle = styled.div`
display: flex ;
flex-direction: row ;
flex-wrap: wrap ;
justify-content: space-around ;
align-items: center ;
align-content: center ;
  
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


const EditProButton = styled.button`
background: #1d355763;
box-shadow: 2px 2px 2px black;

color: white;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  a {
    color: #FFF;
  }
  a:hover {
     color: #FFF
  }
  display: flex ;
flex-direction: row ;
flex-wrap: wrap ;
justify-content: center ;
align-items: center ;
align-content: center ;

`
const FilmEditButton = styled.div`
display: flex ;
flex-direction: column ;
flex-wrap: wrap ;
justify-content: center ;
align-items: center ;
align-content: center ;
`

class UserShow extends Component {
    state = {
        user: '',
        films: [],
        newFilm: {
            name: '',
            image: '',
            link: '',
            synopsis: '',
            role: '',
            type: '',
            year: '',
            location: '',
            awards: '',
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
            name: 'Film Name',
            image: 'image',
            link: 'link',
            //   info: 'Film Description'

        }
        axios.post(`/api/users/${userId}/films`, payload).then(res => {
            const newFilm = res.data
            const newStateFilms = [...this.state.films, newFilm]
            this.setState({ films: newStateFilms })
        })
    }

    handleDelete = filmId => {
        axios.delete(`/api/films/${filmId}`).then(() => {
            const newFilms = [...this.state.films]
            const filtered = newFilms.filter(film => {
                return film._id !== filmId // ! = =
            })
            this.setState({ films: filtered })
        })
    }



    handleChange = (event, filmId) => {
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
        const filmToUpdate = this.state.films.find(film => {
            return film._id === filmId
        })
        axios.patch(`/api/films/${filmId}`, filmToUpdate).then(() => {
            console.log("Updated Film")
        })
    }

    render() {
        return (
            <div>

                <BkgdColors>
                    <br />
                    <NameNButtonStyle>
                        <h1>{this.state.user.username}'s Films </h1><br />
                        <img src={this.state.user.image} alt="film pic" /><br />
                    </NameNButtonStyle>

                    <FilmEditButton>
                        <EditProButton>
                            <Link to={`/users/${this.props.match.params.userId}/profile`} style={{ textDecoration: 'none' }}> Edit My Profile </Link>
                        </EditProButton>
                        <br />
                        <h4>Type in the fields below to automatically edit your film's information or...</h4>
                         <br/> 
                        <NewFilmButton onClick={this.handleCreateNewFilm}>
                            Add a New Film
                        </NewFilmButton>
                    </FilmEditButton>
                    <div> <br />
                        <FilmsContainerStyle>

                            {this.state.films.map(film => {
                                const deleteFilm = () => {

                                    return this.handleDelete(film._id)

                                }

                                return (

                                    <FilmStyles>



                                        <textarea
                                            onBlur={() => this.handleUpdate(film._id)}
                                            onChange={(event) => this.handleChange(event, film._id)}
                                            name="image" placeholder='Edit Photo'
                                        />                   <img src={film.image} alt="film pic" />

                                        <h2><input
                                            onBlur={() => this.handleUpdate(film._id)}
                                            onChange={(event) => this.handleChange(event, film._id)}
                                            type="text" name="name" placeholder='Edit film name'
                                            value={film.name}
                                        /></h2>
                                        <textarea
                                            onBlur={() => this.handleUpdate(film._id)}
                                            onChange={(event) => this.handleChange(event, film._id)}
                                            name="link" placeholder='Edit Link to film'
                                        />
                                        <Link to={film.link}>Watch {film.name} here</Link>
                                        <textarea
                                            onBlur={() => this.handleUpdate(film._id)}
                                            onChange={(event) => this.handleChange(event, film._id)}
                                            name="synopsis" value={film.synopsis} placeholder='Edit Synopsis'
                                        />
                                        <textarea
                                            onBlur={() => this.handleUpdate(film._id)}
                                            onChange={(event) => this.handleChange(event, film._id)}
                                            name="role" value={film.role} placeholder='Edit Your Role'
                                        />
                                        <textarea
                                            onBlur={() => this.handleUpdate(film._id)}
                                            onChange={(event) => this.handleChange(event, film._id)}
                                            name="type" value={film.type} placeholder='Type of Work...film/music video/'
                                        />
                                        <textarea
                                            onBlur={() => this.handleUpdate(film._id)}
                                            onChange={(event) => this.handleChange(event, film._id)}
                                            name="year" value={film.year} placeholder='Year released'
                                        />
                                        <textarea
                                            onBlur={() => this.handleUpdate(film._id)}
                                            onChange={(event) => this.handleChange(event, film._id)}
                                            name="location" value={film.location} placeholder='Location'
                                        />
                                        <textarea
                                            onBlur={() => this.handleUpdate(film._id)}
                                            onChange={(event) => this.handleChange(event, film._id)}
                                            name="awards" value={film.awards} placeholder='Awards'
                                        />
                                        <button onClick={deleteFilm}>Delete Film</button>
                                    </FilmStyles>
                                )
                            })}
                        </FilmsContainerStyle>
                    </div>
                </BkgdColors>
            </div>
        )
    }
}

export default UserShow