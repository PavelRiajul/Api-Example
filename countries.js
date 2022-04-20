const loadCountryis = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountryis()
const displayCountries = countries => {
//for( const country of countries){
    //console.log(country)
//}
const countriesDiv = document.getElementById('countries')
countries.forEach(country => {
    const div = document.createElement('div')
    div.classList.add('country')
    div.innerHTML =`
    <h3>${country.name}</h3>
    <p>${country.capital} </p>
    <button onclick="loadCountryByNmae('${country.name}')">Details</button>
    `
    countriesDiv.appendChild(div)
})
}
const loadCountryByNmae = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = country => {
    const countriesDiv = document.getElementById('country-detail')
    countriesDiv.innerHTML =`
   <h5>${country.name} </h5>
   <p>popolation:${country.population} </p>
   <img src="${country.flag}">
    `
}

    
   