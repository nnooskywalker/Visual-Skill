//FAQ
const faq = document.querySelectorAll(".faq-item")

faq.forEach(item =>{
    item.addEventListener("click", ()=>{
        item.classList.toggle("active")
    })
})


//Counter animation
const counters = document.querySelectorAll(".counter")

const runCounter = (counter) =>{
    const target = +counter.getAttribute("data-target")
    let count = 0

    const speed = target / 100

    const update = () =>{
        count += speed

        if (count < target){
            counter.innerText = Math.floor(count)
            requestAnimationFrame(update)
        }
        else{
            counter.innerText = formatNumber(target)
        }
    }

    update()
}

// number
function formatNumber(num){
    if (num >= 1000){
        return num.toLocaleString()
    }

    return num + "+"
}


// Observer
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            const counter = entry.target
            runCounter(counter)
            observer.unobserve(counter)
        }
    })
})

counters.forEach(counter =>{
    observer.observe(counter)
})

//Slider
const track = document.querySelector(".job-track")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")

next.addEventListener("click",()=>{
    track.scrollBy({left: 300, behavior: "smooth"})
})

prev.addEventListener("click",()=>{
    track.scrollBy({left: -300, behavior: "smooth"})
})


window.addEventListener("DOMContentLoaded", () =>{
    const elements = document.querySelectorAll(".header-content, .header-img")

    elements.forEach((el, index) =>{
        setTimeout(() =>{
            el.classList.add("show")
        }, index*300)
    })
})