const LoadRestAPI = ()=> {
    fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(data => DisplayUsers(data))
}
function DisplayUsers(datas){
    let quote = document.getElementById('h11');
    quote.innerHTML = datas.quote; 
}
