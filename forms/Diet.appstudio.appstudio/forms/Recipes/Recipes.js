// 1. *** use your own url copied from Postman ****
let requestURL = "https://www.themealdb.com/api/json/v1/1/random.php?Key=1"

function onXHRLoad() {
    let message = 'Instructions to prepare this Meal:'
    
    // 'this' is another name for the object returned from the API call
    let apiData = JSON.parse(this.responseText)
    
 
    // 2. *** put your textarea control name here ****
    txtanewRecipe.value = apiData.meals[0].strMeal + "\n" + message + "\n" + apiData.meals[0].strInstructions
    
    // if want to add to database call a function here that does that
    // addToDatabase()
    
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
    xhttp.open('GET', 'https://cors.bridged.cc/' + requestURL)
    
    // if you DON'T need cors use this code:
    //xhttp.open('GET',URL)
    
    /* Headers */
    // if you need to set the returned data type, use this line of code: 
    //xhttp.setRequestHeader('Content-Type', 'application/json')
    
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
    */

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}

// 3. *** add a new button onclick event and put the callAPI code into it ***
btnNewRecipe.onclick=function(){
    // call the code that will make the API call, then process what comes back
    callAPI(requestURL)
}






btnreturnhome.onclick=function(){
  ChangeForm(Diet)
}

