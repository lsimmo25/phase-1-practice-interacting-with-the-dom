// handleButtons

const counter = document.querySelector("#counter")
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const like = document.querySelector("#heart")
const pause = document.querySelector("#pause")

function handleButtons(){
    //subtract 1
    minus.addEventListener("click", () => {
        let currentValue = parseInt(counter.textContent);
        currentValue -= 1;
        counter.textContent = currentValue
    })

    //plus 1
    plus.addEventListener("click", () => {
        let currentValue = parseInt(counter.textContent);
        currentValue += 1
        counter.textContent = currentValue
    })

    //like number and add <li> to <ul>
    like.addEventListener("click", () =>{
        let currentValue = parseInt(counter.textContent);
        const li = document.createElement("li")
        li.textContent = `${currentValue} has been liked`
        console.log(li)
        const likesList = document.querySelector(".likes")
        likesList.appendChild(li);

    })

    //timer
    let intervalId;
    intervalId = setInterval(timer, 1000)

    //pause/resume timer
    pause.addEventListener("click", () => {
        if (intervalId !== undefined){
            clearInterval(intervalId);
            intervalId = undefined;
            pause.textContent = "resume";
            minus.disabled = true
            plus.disabled = true
            like.disabled = true
        } else {
            intervalId = setInterval(timer, 1000);
            pause.textContent = "pause";
            minus.classList.remove("paused")
            plus.classList.remove("paused")
            like.classList.remove("paused")
            minus.disabled = false
            plus.disabled = false
            like.disabled = false
        }
    })


}


//timer function

function timer(){
    let currentValue = parseInt(counter.textContent)
    currentValue += 1
    counter.textContent = currentValue
}



//comment

function submitComment() {
const form = document.querySelector("form")
let commentSection = document.querySelector("#list")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let p = document.createElement("p")
    p.textContent = document.querySelector("#comment-input").value-
    commentSection.appendChild(p)
})
}





//init
function init(){
    handleButtons()
    submitComment()
}

init()

