function initNavbar(){
    const menuBtn = document.getElementById("menu-btn")
    const navLinks = document.getElementById("nav-links")
    if (!menuBtn || !navLinks) return

    const menuBtnIcon = menuBtn.querySelector("i")

    menuBtn.addEventListener("click",() =>{
        navLinks.classList.toggle("open")
        menuBtnIcon.setAttribute("class", navLinks.classList.contains("open") ? "ri-close-line" : "ri-menu-line")
    })

    navLinks.addEventListener("click",() =>{
        navLinks.classList.remove("open")
        menuBtnIcon.setAttribute("class","ri-menu-line")
    })

    window.addEventListener("scroll",()=>{
        const nav = document.querySelector("nav")
        if (nav) nav.classList.toggle("scrolled", window.scrollY > 50)
    })
}