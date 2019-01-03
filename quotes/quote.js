var quote = "";
var translations = "";
function getQuote(){
  $(".loader").show();

  WikiquoteApi.getRandomQuote("Swedish_proverbs", win, fail);


function win(succ){
  quote = JSON.stringify(succ.quote);
  translations = removeFirst(JSON.stringify(succ.translation));
  $("h1").html(quote);
  $("h5").html(translations);
  $(".loader").hide();

}
function removeFirst(str){
  str = str.split("\"");
  return str[1];

}

function fail(fail){
  $(".loader").hide();
  $("new_quote").text("Try Again.");
}

}

$(document).ready(function() {

  getQuote();
  $("#new_quote").click(getQuote);

  $("#new_quote, #twitter").hover(function() {
    $(this).css("cursor", "pointer");

  });

  $("#twitter").click( function(){

  window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote) +
    "&hashtags=quotes,svenska");

  });

});
