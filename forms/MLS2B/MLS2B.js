

btnSubmit.onclick=function(){
    let date = inptDate.value
    let duration = inptDuration.value
    let quality = inptQuality.value
    
    let query = "INSERT INTO sleep (date, duration, quality) VALUES ('" + date + "', '" + duration + "', '" + quality + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
    if (req.status == 200) { 
        if (req.responseText == 500)    
            lblMessage3.value = "You have successfully added the sleep log!"
        else
            lblMessage3.value = "There was a problem with adding the sleep log to the database."
    } else 
        lblMessage3.value = "Error: " + req.status
}
