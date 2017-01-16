var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")
var data =[
    {
      title: "Forest Camp",
      image:"https://farm9.staticflickr.com/8225/8524305204_43934a319d.jpg",
      description: "nice place and good wheather"
    },
     {
      title: "Hill Camp",
      image:"https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
     {
      title: "Family Camp",
      image:"https://farm9.staticflickr.com/8358/8444469474_8f4b935818.jpg",
      description: "family weekend party"
    }
    ]
function seedDB(){
    Campground.remove({},function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed yelpcamp");
        //add the campground data
        // data.forEach(function(seed){
        //     Campground.create( seed, function(err, campground){
        //     if(err){
        //         console.log(err)
        //     }else{
        //         console.log("added campground");
        //         //add a comment
        //     Comment.create({
        //         text:" wow what a beautiful place.",
        //         author:"Raviteja"
        //     }, function(err, comment){
        //         if(err){
        //             console.log(err);
        //         }else{
        //             campground.comments.push(comment);
        //             campground.save();
        //             console.log("comment saved")
        //         }
        //     });
        //     }
        // });
        // });
    });
}
module.exports = seedDB;