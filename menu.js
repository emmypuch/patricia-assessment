const toggleButton = document.getElementById('navLinks')

toggleButton.addEventListener('click', function () {
    let navLinksWrapper = document.getElementsByClassName('linkks')[0]
    
    if (navLinksWrapper.style.visibility == 'hidden') {
        navLinksWrapper.style.visibility = 'visible'
    } else {
        navLinksWrapper.style.visibility = 'hidden'
    }
})