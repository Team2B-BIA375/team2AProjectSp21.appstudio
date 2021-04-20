Button3.onclick=function(){
  let firstName = signUpFirst.value
  let lastName = signUpLast.value
  let email = signUpEmail.value
  let user = signUpUser.value
  let pass = signUpPass.value
  
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupa2&query=" + query)

  if (req.status == 200) { //transit trip worked.        
    console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
    results = JSON.parse(req.responseText) 
    }

  let query = "INSERT INTO user (`first_name`,`last_name`, `email`, `username`, `password`) VALUES ('" + firstName + "', '" + lastName + "', '" + email + "', '" + user + "', '" + pass + "')"
  
  ChangeForm(LogIn)
}

Button4.onclick=function(){
  ChangeForm(LogIn)
}


