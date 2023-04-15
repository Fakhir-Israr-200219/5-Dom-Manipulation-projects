const btn=document.querySelector("#new-quate")
const quate=document.querySelector(".quate")
const person=document.querySelector(".person")

const Quates=[{
    quote:`“You've gotta dance like there's nobody watching, Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth.”`,
    person:`William W. Purkey`
},{
    quote:`“Be the change that you wish to see in the world.”,`,
    person:`Mahatma Gandhi` 
},{
    quote:`“In three words I can sum up everything I've learned about life: it goes on.”`,
    person:`Robert Frost` 
},{
    quote:`“If you tell the truth, you don't have to remember anything.”`,
    person:`Mark Twain`
},{
    quote:`“A friend is someone who knows all about you and still loves you.”`,
    person:`Elbert Hubbard`
},{
    quote:`“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
    person:`Mahatma Gandhi`
},{
    quote:`"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`,
    person:`Bernard M. Baruch`
}, ];

btn.addEventListener("click",change)

function change() {

    let random = Math.floor(Math.random() * Quates.length)

    quate.innerText=Quates[random].quote;
    person.innerText=Quates[random].person;
}