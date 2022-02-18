fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=2000&diet=vegetarian&exclude=shellfish%2C%20olives", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "3d001f9d8emshad8baf330954b72p18c7d7jsnd54d7284750d"
	}
})
.then(response => {
	return response.json()
})
.then(console.log)
.catch(err => {
    console.error(err);
})