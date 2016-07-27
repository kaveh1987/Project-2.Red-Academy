$(document).ready(function(){


  $("#sections").on('change', function(event) {
    var instaChoice = event.target.value;

var url ='http://api.nytimes.com/svc/topstories/v2/' + instaChoice + '.json';
url += '?' + $.param({
  'api-key': "87b5a64b5b95405c863c1695a1ffe68f"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(nytData) {
   var nytItems = '';
  if (nytData.length !==0){
    nytItems += '<ul>';
  $.each(nytData.result, function(key, value) {
    if (value.multimedia.length){

      articleImageUrl = value.multimedia[4],url;
      articleCaption = value.abstract;
      articleLink = value.url;
      nytItems += '<li>';
      nytItems += '<a href = "'  + articleLink+'" target"-blank">';
      nytItems +='<div class="inner-item-wrapper">';
      nytItems +='<div class="article" style="background-image:url('+ articleImageUrl +')">';
      nytItems +='<div class="photo-meta">';
      nytItems +='<p>' + ( articleCpation || "this story has no description.")+'</P>';
      nytItems += '</div>';
      nytItems +='</div>';
      nytItems +='</a>';
      nytItems +='</li>';

  } nytItems += "<ul>"

});

 $('.stories') .append(nytItems);
}

}).fail(function(err) {
  throw err;
});
});
});
