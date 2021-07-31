import get from './includes/getElement.js'
import getUser from './includes/getUser.js'

const btn = get('.btn');
const image = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btns = [...document.querySelectorAll('.icon')]

const showUser = async () => {
    //Get User from API
    const person = await getUser();

    //Display User
    image.src = person.image
    value.textContent = person.name;
    title.textContent = `My name is`;
    btns.forEach((btn) => btn.classList.remove('active'))
    btns[0].classList.add('active');


    btns.forEach((btn) => {
        const label = btn.dataset.label;
        btn.addEventListener('click', () => {
            title.textContent = `My ${label} is`;
            value.textContent = person[label];

            btns.forEach((btn) => btn.classList.remove('active'))
            btn.classList.add('active')
        })
    })


}


// Show user when load the page, and when we click the btn
window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)



