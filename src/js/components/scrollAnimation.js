const scrollAnimation = endElem => {
    const elem = document.querySelector(endElem);

    const observer = new IntersectionObserver(
        entries => {
            entries[0].isIntersecting ? elem.previousElementSibling.classList.add('animated') : elem.previousElementSibling.classList.remove('animated');
        },
        {
            rootMargin: '100px',
        },
    );

    try {
        observer.observe(elem);
    } catch (error) {}
};

scrollAnimation('.multicurr .end-elem1');
scrollAnimation('.multicurr .end-elem2');
scrollAnimation('.steps .end-elem');
scrollAnimation('.try .end-elem');
scrollAnimation('.screen .end-elem');
scrollAnimation('.manage .end-elem1');
scrollAnimation('.manage .end-elem2');
scrollAnimation('.manage .end-elem3');
scrollAnimation('.manage .end-elem4');
scrollAnimation('.securely .end-elem1');
scrollAnimation('.securely .end-elem2');
scrollAnimation('.main .securely-end-elem');