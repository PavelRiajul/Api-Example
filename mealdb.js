const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    //console.log(searchText)
     searchField.value = ''
     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
     fetch(url)
     .then(res => res.json())
     .then(data => displaySerachResult(data.meals))
     
}
const displaySerachResult = meals => {
    const searchResult = document.getElementById('search-result')
    meals.forEach(meal => {
       // console.log(meal)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="loadmialDeatil(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb} " class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal} </h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        `
        searchResult.appendChild(div)
        
    })
}
const loadmialDeatil = mealId => {
const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}` 
fetch(url)
.then(res => res.json())
.then(data => console.log(data.meals) )
}

