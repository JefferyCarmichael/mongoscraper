var mongoose = require("mongoose");

// Schema constructor
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  // Ariticle Title
  title: {
    type: String,
    required: true
  },
  //Article Summary
  summary: {
    type: String,
    required: true
  },
  // Link
  link: {
    type: String,
    required: true
  },
  //New articles = false.   Saved articles = true
  saved: {
    type: Boolean,
    default: false
},

  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
