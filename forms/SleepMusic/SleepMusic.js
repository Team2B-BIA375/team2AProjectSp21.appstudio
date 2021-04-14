
//array of random search terms (made them code related)
let searchTerms = ["factory%20functions","data%20structures", "array%20functions%20javascript", "composition%20over%20inheritance", "lambda%20functions", "streams%20java", "higher%20order%functions%javascript", "functional%20programming", "c++%20lambda%20functions", "sorting%20algorithms"];

//a function to get a random search term
let getSearchTerm = () => searchTerms[Math.floor(Math.random() * (searchTerms.length-1))];

//variable for your API_KEY
let YOUTUBE_API_KEY = "AIzaSyD-lMQaX5IUsw7Vu48XMpeDUItLFLAPaDA";

//url from YouTube docs modified for my random term and API key,
let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${getSearchTerm()}&key=${YOUTUBE_API_KEY}`;

//fetch function following the aforementioned process
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.items[0].id.videoId);
    //console.log above is to help access proper data in the JSON
    //object
    //set iframe source to proper URL (notice same dynamic strings 
    //used above)
    document.querySelector(".iframeClass").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
});


btnMusic.onclick=function(){
}


/* // 1. *** use your own url copied from Postman ****
let requestURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD-lMQaX5IUsw7Vu48XMpeDUItLFLAPaDA&q=sleeping music&maxResults=1"

function onXHRLoad() {
    let message = ""
    
    // 'this' is another name for the object returned from the API call
    let apiData = JSON.parse(this.responseText)
    
        message = apiData
    
    
    // 2. *** put your textarea control name here ****
    txtaSleepMusic.value = message
    
    // if want to add to database call a function here that does that
    // addToDatabase()
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
    //xhttp.open('GET', 'https://cors.bridged.cc/' + requestURL)
    
    // if you DON'T need cors use this code:
    xhttp.open('GET',requestURL)
    
    /* Headers
    // if you need to set the returned data type, use this line of code: 
    xhttp.setRequestHeader('youtube#video', 'application/json')
    
    // if you need authorization token (stored in myToken) use this line of code: 
    // xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)
    
    // if you need a key and it's not in the url use code in one of the following
    // examples (think of headers as parameters)
    // or just use the Postman url which has all the parameters already added like I did here. 
    
    
    // Here are headers you might need: 
    /*
    xhttp.setRequestHeader('key','AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY')
    xhttp.setRequestHeader('location','41.276900,-95.942310')
    xhttp.setRequestHeader('rankby','distance')
    xhttp.setRequestHeader('type','restaurant')
    

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}

// 3. *** add a new button onclick event and put the callAPI code into it ***
*/



