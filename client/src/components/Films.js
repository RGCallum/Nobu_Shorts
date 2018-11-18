import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Info extends Component {
      state = {
        infos: [],
        newInfo: {
          name:'',  
          synopsis: '',
          role: '',
          type: '',
          year: '',
          location: '',
          image: '',
          awards: '',
    }
  }
    
  handleChange = (event) => {
    const updatedNewInfo = {...this.state.newInfo}

    updatedNewInfo[event.target.name] = event.target.value
    this.setState({newInfo: updatedNewInfo})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios.post('/api/infos', this.state.newInfo).then(res => {
      console.log(res.data)
      this.props.history.push(`/infos/${res.data._id}`)
    })
    
  }

  getAllInfos = () => {
    axios.get('/api/infos/:infoId').then((res) => {
      this.setState({infos: res.data})
    })
  }

  componentDidMount(){
    this.getAllInfos()
  }

  render() {
    return (
      <div> 
        {/* <h3> All About {this.state.film.name}'s </h3> */}
        {/* { this.state.infos.map((info) => (
          <div key={info._id}>
            <Link to={`/infos/${info._id}`}>{info.infoname}</Link>
          </div>
        )) } */}

        <h3>Edit Film Info</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input onChange={this.handleChange} 
            // value={this.state.newInfo.name}  placeholder= {Info} 
            type="text" name="name"/>
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.synopsis} placeholder=  {this.state.newInfo.synopsis}  type="synopsis" name="synopsis"/>
          </div>
          <div>
            <label htmlFor="role">Role: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.role} placeholder=  {this.state.newInfo.role} type="text" name="role"/>
          </div>
          <div>
            <label htmlFor="type">type: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.type}  placeholder= {this.state.newInfo.type} type="text" name="type"/>
          </div>
          <div>
            <label htmlFor="year">Year: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.year} placeholder=  {this.state.newInfo.year} type="text" name="year"/>
          </div>
          <div>
            <label htmlFor="location">Location: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.location} placeholder=  {this.state.newInfo.location} type="text" name="location"/>
          </div>
          <div>
            <label htmlFor="image">Image: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.image}  placeholder= {this.state.newInfo.image} type="text" name="image"/>
          </div>
          <div>
            <label htmlFor="awards">Awards: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.awards} placeholder= {this.state.newInfo.awards} type="text" name="awards"/>
          </div>
          <button type="submit">Create Info</button>
        </form>
      </div>
    );
  }
}
export default Info;



// import React, { Component } from 'react'
// import axios from 'axios'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'




// const FilmStyles = styled.div`
//   display: flex;
//   position: relative;
//   flex-direction: column;
//   width: 200px;
//   height: 50px;
//   background: rgb(43, 172, 174, 0.6);
//   margin: 10px 0;
  

//   button {
//     position: absolute;
//     top: 5px;
//     right: 10px;
//     color: red;
//   }
//   .button2{
//     position: absolute;
//     top: 20px;
//     left: 10px;
//     color: blue; 
//   }
//   input,
//   textarea {
//     background-color: transparent;
//     border: none;
     
//   }
//   input {


//   }

// `

// const NewFilmButton = styled.button`
//   background: #1d3557;
//   color: white;
//   font-size: 1.3rem;
//   padding: 10px 10px;
//   border-radius: 5px;

// `

// const FilmsContainerStyle = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   flex-wrap: wrap;
//   align-content: center;
//   background-color: rgba(232, 232, 232, 0.653);
  
// `

// const NameNButtonStyle = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   flex-wrap: wrap;
//   align-content: center;
  
// `

// class Film extends Component {
//     state = {
//         films: [],
//         newFilm: {
//             name: '',
//             image: '',
//             link: '',
//             info: '',

//         }
//     }


//     componentDidMount() {
//         // make an api call to get one single user
//         // On the server URL is '/api/users/:userId'
//         const userId = this.props.match.params.userId
//         axios.get(`/api/users/${userId}`).then(res => {
//             console.log(res.data)
//             this.setState({
//                 user: res.data,
//                 films: res.data.films
//             })
//         })
//     }

//     handleCreateNewFilm = () => {
//         const userId = this.props.match.params.userId
//         const payload = {
//             name: 'Film Name',
//             image: 'image',
//             link: 'link',
//             //   info: 'Film Description'

//         }
//         axios.post(`/api/users/${userId}/films`, payload).then(res => {
//             const newFilm = res.data
//             const newStateFilms = [...this.state.films, newFilm]
//             this.setState({ films: newStateFilms })
//         })
//     }

//     handleDelete = filmId => {
//         // some unique value
//         axios.delete(`/api/films/${filmId}`).then(() => {
//             //Remove the film with filmID from this.state.films
//             const newFilms = [...this.state.films]
//             // Return only films that are NOT the id provided
//             const filtered = newFilms.filter(film => {
//                 return film._id !== filmId // ! = =
//             })
//             // Take filtered data and set it to films
//             this.setState({ films: filtered })
//         })
//     }



//     handleChange = (event, filmId) => {
//         // const name = event.target.name
//         // const value = event.target.value
//         const { value, name } = event.target
//         const newFilms = [...this.state.films]
//         const updatedValue = newFilms.map(film => {
//             if (film._id === filmId) {
//                 film[name] = value
//             }
//             return film
//         })

//         this.setState({ films: updatedValue })
//     }

//     handleUpdate = (filmId) => {
//         // Find the individual updated film from this.state.films
//         const filmToUpdate = this.state.films.find(film => {
//             return film._id === filmId
//         })
//         // axios post the endpoint with updated data
//         axios.patch(`/api/films/${filmId}`, filmToUpdate).then(() => {
//             console.log("Updated Film")
//         })
//         // console .log saved
//     }

//     render() {
//         return (
//             <div>
// <h1>Film info page</h1>

//                 <NameNButtonStyle>


//                     {/* <h1>{this.state.user.username}'s Films </h1> */}
//                     <br />
//                 </NameNButtonStyle>
//                 <NewFilmButton onClick={this.handleCreateNewFilm}>
//                     New Film
//         </NewFilmButton>


//                 <FilmsContainerStyle>
//                     {this.state.films.map(film => {
//                         const deleteFilm = () => {

//                             return this.handleDelete(film._id)
//                         }

//                         return (
//                             <FilmStyles>
//                                 <input
//                                     onBlur={() => this.handleUpdate(film._id)}
//                                     onChange={(event) => this.handleChange(event, film._id)}
//                                     type="text" name="name"
//                                     value={film.name}
//                                 />

//                                 <button onClick={deleteFilm}>X</button>
//                                 {/* <Link to={`/films/${film._id}`}>{film.name}</Link> */}
//                                 <Link to={`/films/${film._id}`}> 🎬 Film Info</Link>

//                                 {/* <button className = 'button2'>Film Info</button> */}
//                             </FilmStyles>


//                         )
//                     })}
//                 </FilmsContainerStyle>
//                 {/* <div>
//                     {this.state.films.map((film) => (
//                         <div key={film._id}>
//                             <Link to={`/films/${film._id}`}>{film.name}</Link>
//                         </div>
//                     ))}
//                 </div> */}
//                 <div>
//                     {this.state.films.map((film) => (
//                         <div key={film._id}>
//                             <Link to={`/infos/${film._id}`}>{film.name}</Link>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         )
//     }
// }
// export default Film