const loadQuotes = ()=>{
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayQuotes(data))
} 
function displayQuotes(data){
    let div1 = document.getElementById('div1');
    let h2 = document.createElement('h2');
    h2.innerHTML = `h1 ${data.quote}`
    div1.append(h2);
}