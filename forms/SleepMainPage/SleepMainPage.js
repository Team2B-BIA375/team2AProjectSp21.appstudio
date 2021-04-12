
hmbMySleep.onclick=function(s){
  if (typeof(s) == "object") 
    return
  else {
       switch(s) {
          case "Enter Your Sleep":
            ChangeForm(SleepMainPage)
            break
          case "View your sleep log":
            ChangeForm(PastSleep)
            break
          case "Log a dream":
            ChangeForm(Dream)
            break
          case "Sleep Music":
                // Go to the Mobile Nav form
            ChangeForm(SleepMusic)
            break
       }  //switch
   } //else
}





navMySleep.onclick=function(s){
    if (typeof(s) == "object") 
    return
  else {
       switch(s) {
          case "Diet":
            ChangeForm(Diet)
            break
          case "Fitness":
            ChangeForm(Fitness)
            break
          case "Sleep":
            ChangeForm(Sleep)
            break
          case "Sleep Music":
                // Go to the Mobile Nav form
            ChangeForm(SleepMusic)
            break
       }  //switch
   } //else
}

Calendar1.onclick=function(){
  
}
