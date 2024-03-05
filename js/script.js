let userName = prompt ("qual é il tuo nome?");
let surName = prompt ("qual é il tuo cognome?");
let favoriteColor = prompt ("qual é il tuo colore preferito?");
let number1 = (23)

console.log(userName)
console.log(surName)
console.log(favoriteColor)

let messaggio = `${userName}${surName}${favoriteColor}${number1}`;
document.getElementById('title').innerHTML = (messaggio);