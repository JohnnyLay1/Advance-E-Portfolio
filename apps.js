// template_hmcbqgr
// service_rabysg2
// dWjaieDZpoIA9IOv8

function contact(event) {
    event.preventDefault();
    // emailjs 
    //     .sendForm(
    //         'service_rabysg2',
    //         //template after the public user
    //         'template_hmcbqgr',
    //         event.target,
    //         'dWjaieDZpoIA9IOv8',
    // ) .then(() => {
    // console.log('this worked1')
    // })

    // too add the loading and success part
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    // when using a selecting a class must have space between (""") " model" example 
    loading.classList += " modal__overlay--visible"
    // this is just to not use up the free emails (normally use above)
    setTimeout(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += (" modal__overlay--success")
        console.log('it worked 1')
    }, 1000);
}
