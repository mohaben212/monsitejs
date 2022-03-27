var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    genre: {type: String, required: true, maxLength: 300, minLength;3},

  }
);

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/Genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);