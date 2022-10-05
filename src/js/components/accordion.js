function accordion(trigger, activeClass, allContents) {
    const items = document.querySelectorAll(trigger);
    const contents = document.querySelectorAll(allContents);

    if (items) {
        const accordionRemoveItemElems = () => {
            items.forEach(item => item.parentElement.classList.remove(activeClass));
            contents.forEach(content => content.classList.remove('accordion__answer--show'));
        }

        items.forEach((elem, i) => {
            elem.addEventListener('click', (e) => {
                e.preventDefault();
                if (elem.parentElement.classList.contains(activeClass)) {
                    accordionRemoveItemElems();
                } else {
                    accordionRemoveItemElems();
                    elem.parentElement.classList.add(activeClass);
                    contents[i].classList.add('accordion__answer--show');
                }
                document.querySelector(elem.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
          });

          document.querySelector('.accordion-contents').addEventListener('scroll', () => {
            const scrollAnimationAccordion = endElem => {
                const elem = document.querySelector(endElem);
              
                const observer = new IntersectionObserver(
                    entries => {
                        entries[0].isIntersecting ? elem.nextElementSibling.classList.add('animated') : elem.nextElementSibling.classList.remove('animated');
                    },
                    {
                        rootMargin: '100px',
                    },
                );
              
                try {
                    observer.observe(elem);
                } catch (error) {}
                };

                scrollAnimationAccordion('.accordion-contents .end-elem1');
                scrollAnimationAccordion('.accordion-contents .end-elem2');
                scrollAnimationAccordion('.accordion-contents .end-elem3');
                scrollAnimationAccordion('.accordion-contents .end-elem4');
                scrollAnimationAccordion('.accordion-contents .end-elem5');
                scrollAnimationAccordion('.accordion-contents .end-elem6');
                scrollAnimationAccordion('.accordion-contents .end-elem7');
                scrollAnimationAccordion('.accordion-contents .end-elem8');
                scrollAnimationAccordion('.accordion-contents .end-elem9');
            
                if (contents[i].classList.contains('animated')) {
                    accordionRemoveItemElems();
                    items[contents[i].id.replace('q', '') - 1].parentElement.classList.add(activeClass);
                }
            });
        });
    }
};

accordion('.accordion__question', 'accordion__item--active', '.accordion-contents .accordion__answer');