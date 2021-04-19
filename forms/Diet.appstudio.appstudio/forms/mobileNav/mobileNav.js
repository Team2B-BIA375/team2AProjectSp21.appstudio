hmbrNav.onclick=function(s){
  if (typeof(s) == "object") {
    return
  } else {
    switch (s) {
      case "Food Entry Inputs":
        ChangeForm(RealDiet)
        break
      case "Recipes Guide":
        ChangeForm(Recipes)
        break
      case "Meal History":
        ChangeForm(MealHistory)
        break
      case "Back to Diet Home Page":
        ChangeForm(Diet)
        break
    }
  }
}
