const navbarIcon = document.getElementById('navbarIcon')
const removeNavbar = document.getElementById('removeNavbar')
const navBarHorizontal = document.getElementById('navBarHorizontal')
const revelHangBurg = document.getElementById('revel-hang-burg')
const container = document.getElementById('container')
function navbar(value) {
    if (value) {
        navBarHorizontal.classList.add('navBarHorizontalActive');
        navbarIcon.style.visibility = 'hidden'
        removeNavbar.style.visibility = 'visible'
    } else {
        navBarHorizontal.classList.remove('navBarHorizontalActive')
        navbarIcon.style.visibility = 'visible'
        removeNavbar.style.visibility = 'hidden'
    }
}
const dispayNavbar = () => {
    navbarIcon.style.visibility = 'visible'
}

navbarIcon.addEventListener('click', () => {
    navbar(true)
})
removeNavbar.addEventListener('click', () => {
    navbar(false)
})

container.addEventListener('scroll', (event) => {
    let windowHeight = container.innerHeight;
    let revelHangBurgIcon = revelHangBurg.getBoundingClientRect().top;
    console.log( "  " + revelHangBurgIcon + "hi")
})