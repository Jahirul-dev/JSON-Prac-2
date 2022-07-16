const loadBuddies =() =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => displayBuddies(data))
}
let displayBuddies = (value) =>{
    const buddies = value.results;
    let buddies1 = document.getElementById('buddies'); 
    for(let Buddy of buddies){
        console.log(Buddy);
        let li = document.createElement('p');
        li.innerHTML = `Name: ${Buddy.name.title} ${Buddy.name.first} ${Buddy.name.last} <br> 
        Email: ${Buddy.email}<br><br>
        `
        buddies1.appendChild(li);
    }
}