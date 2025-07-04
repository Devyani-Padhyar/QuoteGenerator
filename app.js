let btn = document.querySelector("#btn")
let input = document.querySelector("#name")
let label = document.querySelector("#label")
let inptH2 = document.querySelector("h2")
let inputDiv = document.querySelector(".input")
let emptyDiv = document.querySelector(".empty")
let outerInput = document.querySelector(".outerinput")
 
let quotes = [
    "“Believe in yourself and all that you are.”",
    "“You are capable of amazing things.”",
    "“Success doesn’t come from what you do occasionally, it comes from what you do consistently.”",
    "“Push yourself, because no one else is going to do it for you.”",
    "“Doubt kills more dreams than failure ever will.”",
    "“The secret of getting ahead is getting started.”",
    "“Wake up with determination, go to bed with satisfaction.”",
    "“You are stronger than you think.”",
    "“Keep it simple.”",
    "“There is no full stop in success, only commas.”",
    "“You must be the change you wish to see in the world.”",
    "“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.”",
    "“Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.”",
    "“We must accept finite disappointment, but never lose infinite hope",
    "“Success usually comes to those who are too busy to be looking for it.”",
    "“Pursue what catches your heart, not what catches your eyes.”",
    "“You cannot control the behavior of others, but you can always choose how you respond to it. ”",
    "“Life becomes easier and more beautiful when we can see the good in other people.”",
    "“Make improvements, not excuses. Seek respect, not attention.”",
    "“Follow your heart, listen to your inner voice, stop caring about what others think.”",
    "“Never lose hope. Storms make people stronger and never last forever.”",
    "“Always find opportunities to make someone smile, and to offer random acts of kindness in everyday life.”",
    "“The only way to do great work is to love what you do.”",
    "“Believe you can and you're halfway there.”",
    "“Success is not final, failure is not fatal: It is the courage to continue that counts.”",
    "“Happiness is not something ready made. It comes from your own actions.”",
    "“Whether you think you can or you think you can’t, you’re right.”",
    "“Don’t count the days, make the days count.”",
]

function capitalizeWords(str) {
  return str.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
}
let length = quotes.length
// console.log(quote)
btn.addEventListener("click",() => {
    let quote = parseInt(Math.random()*length)
    let inptVal = capitalizeWords(input.value);
    if(inptVal == "" && btn.textContent == "Generate Quote"){
        // if(inputDiv.style.visibility == "visible"){
            emptyDiv.textContent = "Enter your name first... "
            emptyDiv.style.visibility = "visible"
        return
    }else{
        console.log("btn is clicked!")
        console.log(inptVal)
        input.value = ""
        inputDiv.style.visibility = "hidden"
        emptyDiv.style.visibility = "hidden"
        btn.textContent = "Next Quote"
        outerInput.style.height = "4.25rem"
        outerInput.style.padding = "15px"
        outerInput.textContent = `${quotes[quote]}`
        if(inptVal == ""){
            return
        }else{
            inptH2.textContent = `Welcome, ${inptVal} 💜`;
        }
    }
})