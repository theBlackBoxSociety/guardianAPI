

// Input from user
var input;

function setup() {
  noCanvas();

  // Grab the input and button from HTML
  input = select('#search');
  var button = select('#submit');
  // Attach a callback to button press
  button.mousePressed(search);

}

// Run the API call
function search() {
  var term = input.value();

  // URL for querying the times
  /*var url = 'http://content.guardianapis.com/search?'
          + 'q=robot'
          + '&api-key=f6540056-25ea-4b2b-b476-b75057c5cd75';*/

  var url = 'http://content.guardianapis.com/search?q='
          + term
          + '&api-key=f6540056-25ea-4b2b-b476-b75057c5cd75'
  //var url = 'https://content.guardianapis.com/search?q=debate%20AND%20economy&tag=politics/politics&from-date=2014-01-01&api-key=f6540056-25ea-4b2b-b476-b75057c5cd75'
  // Query the URL, set a callback
  // 'jsonp' is needed for security
  //loadJSON(url, gotData, 'jsonp');
  loadJSON(url, gotData,'jsonp');
}

// Request is completed
function gotData(data) {
  console.log(data);
  // Go through and show some results
  //docs = data.response.docs;
  results = data.response.results;

  // Iterate through the articles in "docs"
  //for (var i = 0; i < docs.length; i++) {
  for (var i = 0; i < results.length; i++) {

    // Make each headline a link to the article
    var webTitle = createElement('h3', '');
    //var link = createA(results[i].webUrl, results[i].webTitle.main);
    var link = createA(results[i].webUrl, results[i].webTitle);
    link.parent(webTitle);
    webTitle.parent('results');

    // Make a <p> for "lead paragraph"
    //var par = createP(results[i].webTitle);
    var par = createP(results[i].webUrl);
    par.parent('results');
  }
}
