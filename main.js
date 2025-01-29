// function bot () {
//     const username = prompt("Ism kiriting")
//     console.log(username);
//     const newTag = document.createElement("h1")
//     newTag.textContent = username
//     document.body.appendChild(newTag)
// }

// bot() 


// function lightMode() {
//     document.body.classList.add('light-mode');
//     document.body.classList.remove('dark-mode');
// }

// function darkMode() {
//     document.body.classList.add('dark-mode');
//     document.body.classList.remove('light-mode');
// }

const lightButton = document.getElementById('lightButton');
const darkButton = document.getElementById('darkButton');

lightButton.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'light');
    alert("У вас включился Light режим");
});

darkButton.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    alert("У вас включился Dark режим");
});
