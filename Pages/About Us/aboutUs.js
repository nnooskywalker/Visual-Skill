const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry, index) =>{
        if (entry.isIntersecting){
            let delay = entry.target.classList.contains("about-card")
            ? index*250
            : index*400

            setTimeout(() =>{
                entry.target.classList.add("show")
            }, delay)

            observer.unobserve(entry.target)
        }
    })
}, {
    threshold: 0.2
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach(el => observer.observe(el))