$(document).ready(function() {
  
  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJuVnRajzU3ogRpdz30sTIqkc&key=AIzaSyAnp_JROlZrZQKuy0ym5Me7WXEan7hG5H0",
    dataType: "json",
    type: "GET", 
  
    success: function(json) {
      
      $.each(json.result.reviews, function(i,v) {
        if (i == 4) {
            return false;
        }
        var rating = v.rating;
        if (rating == 5) {
          var starRating = "<i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i>";
        } else if (rating == 4) {
          var starRating = "<i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i>";
        }
        else if (rating == 3) {
          var starRating = "<i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i>";
        }
        else if (rating == 2) {
          var starRating = "<i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i>";
        }
        else {
          var starRating = "<i class='fa fa-star' aria-hidden='true'></i>";
        }
        
        
        if (rating == 5) {
          $('#google-reviews').append("<div class='review-wrap'>"
          +"<div class='author'>"
          +"<img class='author-img' src='"+v.profile_photo_url+"' alt='"+v.author_name+"' />"
          +"<div class='author-name'>"+v.author_name+"</div>"
          +"</div>"
          +"<div class='review'>"+v.text+"</div>"
          +"<div class='rating d-flex'>"+starRating+"</div>"
          +"</div>");
        }
      });
  },
  error: function(xhr, status, errorThrown) {
    //do something if there was an error. Right now it will just show the default values in the html
  }
 });
});