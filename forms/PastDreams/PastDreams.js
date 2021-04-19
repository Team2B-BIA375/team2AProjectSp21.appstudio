
btnPastDreamSubmit.onclick=function(){
  let PastDreamDate = inptPastDreamDate.value
  console.log(PastDreamDate)
  let date = 'date'

   let query = `SELECT dream from dream where user_id = ${user_id} AND ${date} = '${PastDreamDate}'` 
    
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

  if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(results)
        if (results.length == 0)    
           txtaPastDreamLog.value = "There is no sleep log for that date."
         else {    
           txtaPastDreamLog.value = results
           //txtaPastDreamLog.value = `Displaying sleep log for ${results[0][1]} \n Duration: ${results[1][1]} \n Quality: ${results[2][1]}`
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblPastDreamMessage.value = "Error code: " + req.status
}


btnNextMusic.onclick=function(){
  ChangeForm(SleepMusic)
}
