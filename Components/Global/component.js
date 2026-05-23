//Call Navbar and Footer
async function loadComponent(containerId, filePath, callback){
    try {
        const response = await fetch(filePath)
        if (!response.ok) throw new Error('Failed to load ${filePath}')
        const html = await response.text()
        document.getElementById(containerId).innerHTML = html
        if (callback) callback()
    } catch (error) {
        console.error(error)
    }
}

async function loadComponents() {
    await loadComponent('navbar-container','../../Components/Navbar/navbar.html',()=>{
        if (typeof initNavbar == 'function') initNavbar()
    })

    await loadComponent('footer-container','../../Components/Footer/footer.html')
}

document.addEventListener('DOMContentLoaded', loadComponents)

