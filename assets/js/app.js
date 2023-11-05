const cl = console.log;

const showsidebar = document.getElementById("showsidebar")
const opensidebar = document.getElementById('opensidebar')
const hidesidebar = document.getElementById('hidesidebar')
const backdrop = document.getElementById('backdrop');


const onActive = () => {
    opensidebar.classList.toggle('active');
    backdrop.classList.toggle('active');
}



showsidebar.addEventListener('click',onActive)
hidesidebar.addEventListener('click',onActive)
backdrop.addEventListener('click',onActive);