let query = ""
let req = {}
let netID = "sme89450"
let pw = "Chocolate-0-"
let results = []
let databaseSchema = '375groupa2'




MLS2.onshow=function(){
  query = "SELECT * FROM gym"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblMessage1.value = "There are no pets in the database."
         else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           lblMessage1.value = message
        } // end else

    } else {  // the transit didn't work - bad wifi? server turned off?
        lblMessage1.value = "Error code: " + req.status }
}



