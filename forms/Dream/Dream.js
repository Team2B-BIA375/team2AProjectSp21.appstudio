
btnDreamSubmit.onclick=function(){
  let InsertDreamDate = inptDreamDate.value
  let Dream = txtaDream.value
  
 let query = "INSERT INTO dream (`user_id`,`date`, `dream`) VALUES ('" + user_id + "', '" +InsertDreamDate + "', '"+ Dream + "')"
    // look at how the query is rendered
    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

  if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblDreamMessage.value = "You have successfully logged your dream!"
        else
            lblDreamMessage.value = "There was a problem with logging your dream to the database. Please try again or use the support function to contact us!"
    } else // transit error
        lblDreamMessage.value = "Error: " + req.status

}

btnNextViewDreams.onclick=function(){
  ChangeForm(PastDreams)
}
