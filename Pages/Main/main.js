const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry, index) =>{
        if (entry.isIntersecting){

            setTimeout(() =>{
                entry.target.classList.add("show")
            }, index*200);

            observer.unobserve(entry.target);
        }
    });
},{
    threshold: 0.2
});

const hiddenElement = document.querySelectorAll(".hidden")
hiddenElement.forEach(el => observer.observe(el))