const texts = [
    "java developer",
    "great programmer",
    "data scientist",
    "skilled web developer",
    "professional AI consultant",
    "software engineer",
    "data consultant"
]

let i = 0, j = 0
let currentText = ""
let isDeleting = false

function typeEffect(){
    currentText = texts[i]

    if(isDeleting){
        j--
    }
    else{
        j++
    }

    document.getElementById("typewriter").textContent = currentText.substring(0,j)

    if(!isDeleting && j === currentText.length){
        isDeleting = true
        setTimeout(typeEffect,1200)
        return
    }

    if(isDeleting && j === 0){
        isDeleting = false
        i = (i + 1) % texts.length
    }

    setTimeout(typeEffect, isDeleting ? 40 : 80)
}

document.addEventListener("DOMContentLoaded", ()=>{
    typeEffect()
})

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry, index) =>{
        if (entry.isIntersecting){

            let delay = entry.target.classList.contains("course-card")
                ? index * 200
                : index * 400

            setTimeout(() =>{
                entry.target.classList.add("show");
            }, delay)

            observer.unobserve(entry.target)
        }
    })
}, {
    threshold: 0.2
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach( el => observer.observe(el))