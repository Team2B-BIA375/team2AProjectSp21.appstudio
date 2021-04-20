let netID = "Jrs03677"
let pw = "Silverfrog221"
let database = "375groupa2"

submit.onclick = function() {
  let name = userInpt.value
  let pass = passInpt.value

  query = 'SELECT password FROM user where username = "`${name}`";'

  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupa2&query=" + query)
  
  if (req.status == 200) { //transit trip worked.        
    results = JSON.parse(req.responseText)
    if (results == pass) {
      ChangeForm(Welcome)
    }
    else {
    label.value = "invalid password"  
    }
  }
}


Button2.onclick = function() {
  ChangeForm(SignUp)
}