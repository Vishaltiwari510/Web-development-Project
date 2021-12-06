//jshint esversion:6

//////////////////// Requires Dependency ///////////////////////////
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

/////////////////////// Use Express in App //////////////////////////////
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//connect database
mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});

//create schema
const articleSchema = {
  title: String,
  content: String()
};

//create model
const Article = mongoose.model("Article", articleSchema);

//////////////////////   Request targeting an article //////////////////////////////

/////////////////////////// Get all Articles /////////////////////////
app.route("/articles").get(function(req, res){
  Article.find(function(err, foundArticles){
    if(!err){

      res.send(foundArticles);
    }
    else{
      res.send(err);
    }

  });
})
/////////////////////////////// Post a New Article ///////////////////////////////////
.post(function(req, res){

  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  });
  newArticle.save(function(err){
    if(!err){
      res.send("successfully added a new article");
    } else{
      res.send(err);
    }
  });
})

////////////////////////////////// Delete all articles ///////////////////////////
.delete(function(req, res){
  Article.deleteMany(function(err){
    if(!err){
      res.send("successfully delete all articles.");
    }
    else{

      res.send(err);
    }
  });
});

//////////////////////   Request targeting a specific article //////////////////////////////

app.route("/articles/:articleTitle")


////////////////////////// Get an specific article ///////////////////////////
.get(function(req, res){

   Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
    if(foundArticle){
      res.send(foundArticle);
    }
    else{
      res.send("No article matching with title was found");
    }
  });
})

////////////////////////////// Put an specific Article ///////////////////////
.put(function(req, res){
Article.updateOne(
  {title: req.params.articleTitle},
    {title: req.body.title, content: req.body.content},

function(err){
  if(!err){
    res.send("successfully update article");
  }
}
);
})
////////////////////////// Patch an specific Article ////////////////////////////
.patch(function(req, res){
  Article.update(
    {title: req.params.articleTitle},
    {$set: req.body},
    function(err){
      if(!err){
        res.send("successfully update article");
      }
      else{
        res.send(err);
      }
    }

  );

})

//////////////////  Delete an specific Article  /////////////////////////////
.delete(function(req, res){
  Article.deleteOne(
    {
    title: req.params.articleTitle},


  function(err){
    if(!err){
      res.send("succesfully deleted specific article");
    }
    else{
      res.send(err);
    }
  }
);
});

/////////////////////// Listen on port 3000 /////////////////////////
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
