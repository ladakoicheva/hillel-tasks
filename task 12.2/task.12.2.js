const div = document.querySelector(".container");
div.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        console.log(`Клікнуто по кнопці: ${event.target.textContent} `);
    }
})