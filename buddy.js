const loadBy .name.uddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displyBuddies(data) )
    
}
loadBuddies()
const displyBuddies = data => {
    const buddies = data.results
    const buddiesDiv = document.getElementById('buddies')
for(const buddy of buddies){
    console.log(buddfirst)
    const p = document.createElement('p')
    p.innerText =`Name : ${buddy.name.first} email : ${buddy.email}`
    buddiesDiv.appendChild(p)
}
}