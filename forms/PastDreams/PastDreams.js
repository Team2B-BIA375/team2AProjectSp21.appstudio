
btnPastSleepSubmit.onclick=function(){
  let PastSleepDate = inptPastSleepDate.value
  console.log(PastSleepDate)
  let date = 'date'

   let query = `SELECT ${date}, duration, quality from sleep where user_id = ${user_id} AND ${date} = '${PastSleepDate}'` 
    
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

  if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(results)
        if (results.length == 0)    
           txtaPastSleepLog.value = "There is no sleep log for that date."
        else {        
           txtaPastSleepLog.value = results
           //txtaPastSleepLog.value = `Displaying sleep log for ${results[0][1]} \n Duration: ${results[1][1]} \n Quality: ${results[2][1]}`
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblPastSleepMessage.value = "Error code: " + req.status
}



btnNextDream.onclick=function(){
  ChangeForm(Dream)
}
