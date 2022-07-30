// template_hmcbqgr
// service_rabysg2
// dWjaieDZpoIA9IOv8

// function contact(event) {
//     event.preventDefault();
//     // emailjs 
//     //     .sendForm(
//     //         'service_rabysg2',
//     //         //template after the public user
//     //         'template_hmcbqgr',
//     //         event.target,
//     //         'dWjaieDZpoIA9IOv8',
//     // ) .then(() => {
//     // console.log('this worked1')
//     // })

//     // too add the loading and success part
//     const loading = document.querySelector(".modal__overlay--loading");
//     const success = document.querySelector(".modal__overlay--success")
//     // when using a selecting a class must have space between (""") " model" example 
//     loading.classList += " modal__overlay--visible"
//     // this is just to not use up the free emails (normally use above)
//     setTimeout(() => {
//         loading.classList.remove("modal__overlay--visible");
//         success.classList += " modal__overlay--visible"
//         console.log('it worked 1')
//     }, 1000);
// }
const scaleFactor = 1 / 20;
function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i <shapes.length; ++i) {
        const isOdd = i % 2 !==0;
        const boolInt = isOdd ? -1 : 1;
        //Adding rotate when moving mouse
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y *boolInt}px) rotate(${x * boolInt * 10}deg)`
    }
}


let contrastToggle = false;
function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += "dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

// How the code should actually look
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success")
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_rabysg2',
            'template_hmcbqgr',
            event.target,
            'dWjaieDZpoIA9IOv8',
        ) .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible"
        }) .catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly"
            );
        })
}

//Toggle the Modal
// and to toggel off with the same element button
let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}
