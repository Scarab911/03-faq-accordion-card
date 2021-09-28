const allArrowsDOM = document.querySelectorAll('.arrow');

const allQuestionsDOM = document.querySelectorAll('.question');


allQuestionsDOM.forEach(element => {
    element.addEventListener('click', () => {

        element.closest('.qna-box').classList.toggle('show');
        element.closest('h2').classList.toggle('selected');
        element.classList.toggle('rotate');
    })
});
