const sections = document.querySelectorAll('section');
const menus = document.querySelectorAll('nav a');

window.onscroll = () => {
    sections.forEach(section =>{
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            menus.forEach(menu => {
                menu.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}