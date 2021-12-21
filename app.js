const span = document.getElementById("span");
const ask = [
    'what is your name'
];
for (let i = 0; i < ask.length; i++) {
    span.innerHTML = prompt(ask[i]);
    
}



