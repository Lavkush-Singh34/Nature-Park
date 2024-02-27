const darkBtn = document.querySelector('#darkBtn');
const container = document.querySelector('.container');
darkBtn.addEventListener('click', function(){
    container.classList.toggle('dark')
});