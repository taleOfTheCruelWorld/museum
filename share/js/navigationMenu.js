function changeNavigationMenuVisability() {
    let menu = document.getElementById('menu-options');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        console.log('fa');
    }
    else {
        menu.classList.add('hidden')
        console.log('net')
    }
}
document.getElementById('nav-open-button').onclick = changeNavigationMenuVisability;
