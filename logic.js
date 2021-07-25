const accordion = document.querySelector('.accordion');
const items     = document.querySelectorAll('li');
const questions = document.querySelectorAll('.question');


function toggleAccordion(){
    const thisItem = this.parentNode;


    items.forEach(item => {
        if (thisItem == item){
            thisItem.classList.toggle('open');
            return;
        }

        item.classList.remove('open')
    });



}

questions.forEach(function(question){
    question.addEventListener('click',toggleAccordion)
});

