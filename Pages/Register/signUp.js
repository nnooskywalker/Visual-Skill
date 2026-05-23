const form = document.getElementById("signup-form")

form.addEventListener("submit", function(e){
    e.preventDefault()

    let valid = true

    const email = document.getElementById("email").value
    const username = document.getElementById("username").value
    const dob = document.getElementById("dob").value
    const gender = document.getElementById("gender").value
    const password = document.getElementById("password").value
    const confirm = document.getElementById("confirm-password").value
    const terms = document.getElementById("terms").checked

    document.querySelectorAll(".error").forEach(e=> e.innerText = "")

    //Email
    if (email.length === 0){
        document.getElementById("email-error").innerText = "Email must be filled"
        valid = false
    }
    else if(!email.includes("@")){
        document.getElementById("email-error").innerText = "Invalid email format"
        valid = false
    }

    //username
    if (username.length < 3){
        document.getElementById("username-error").innerText = "Username min 3 characters"
        valid = false
    }

    //birth
    if (dob === ""){
        document.getElementById("dob-error").innerText = "Date of birth required"
        valid = false
    }

    //gender
    if (gender === ""){
        document.getElementById("gender-error").innerText = "Please select gender"
        valid = false
    }

    //Password
    if (password.length < 8){
        document.getElementById("password-error").innerText = "Password min 8 characters"
        valid = false
    }

    //confirm
    if (confirm !== password){
        document.getElementById("confirm-error").innerText = "Password not match"
        valid = false
    }

    //terms
    if (!terms){
        document.getElementById("terms-error").innerText = "You must agree first"
        valid = false
    }

    if (valid){
        alert("Sign Up Success!")
        window.location.href = "../Main/main.html"
    }


})


//eyes on off
const toggles = document.querySelectorAll(".toggle-password")

toggles.forEach(icon =>{
    icon.addEventListener("click",function(){
        const targetId = this.getAttribute("data-target")
        const input = document.getElementById(targetId)

        if (input.type === "password"){
            input.type = "text"
            this.classList.replace("ri-eye-line","ri-eye-off-line")
        }
        else{
            input.type = "password"
            this.classList.replace("ri-eye-off-line","ri-eye-line")
        }
    })
})