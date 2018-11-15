const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Film = new Schema({
    name: String,
    image: String,
    link: String,
    Info: [
        {
          
          type: Schema.Types.ObjectId,
          ref: "Info"
      
        }
      ]
})

module.exports = mongoose.model('Film', Film)
