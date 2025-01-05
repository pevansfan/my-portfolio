/******************* Logo Animation *******************/
// j'attends d'abord que l'animation soit fini
setTimeout(() => {

    const spinner = document.querySelector('.cube');
    spinner.style.display = 'block';

    // Wait for the spinner to complete
    setTimeout(() => {
        // Transition to homepage
        const preloader = document.querySelector('.preloader');
        const homepage = document.querySelector('.homepage');
        preloader.style.transform = 'translateX(-100%)';
        preloader.style.opacity = '0';

        setTimeout(() => {
            preloader.style.display = 'none';
            homepage.classList.add('active');
        }, 1000);
    }, 3000);
}, 3000);

/******************* SHOW SIDEBAR *******************/
const navMenu = document.getElementById('sidebar')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-sidebar')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/******************* Skills Tabs *******************/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove("skills__active")
        })

        target.classList.add('skills__active')

        tabs.forEach(tab => {
            tab.classList.remove("skills__active")
        })

        tab.classList.add('skills__active')
    })
})

/******************* MIXITUP FILTER PORTFOLIO *******************/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener("click", activeWork))

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work__button")) {
        togglePortfolioPopup()
        portfolioDetailsParent(e.target.parentElement)
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open")
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioDetailsParent(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML
}

/* Share POPUP */

const viewBtn = document.querySelector(".view-modal"),
    popup = document.querySelector(".popup"),
    close = popup.querySelector(".close"),
    field = popup.querySelector(".field"),
    input = field.querySelector("input"),
    copy = field.querySelector("button");
viewBtn.onclick = () => {
    popup.classList.toggle("show");
}
close.onclick = () => {
    viewBtn.click();
}
copy.onclick = () => {
    input.select(); //select input value
    if (document.execCommand("copy")) { //if the selected text copy
        field.classList.add("active");
        copy.innerText = "Copié";
        setTimeout(() => {
            window.getSelection().removeAllRanges(); //remove selection from document
            field.classList.remove("active");
            copy.innerText = "Copier";
        }, 3000);
    }
}

/* Services Modal */
const modalViews = document.querySelectorAll('.services__modal')
      modalBtns = document.querySelectorAll('.services__button')
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/* Input Animation */
const inputs = document.querySelectorAll('.input')

function focusFunc() {
    let parent = this.parentNode
    parent.classList.add("focus")
}

function blurFunc() {
    let parent = this.parentNode
    if (this.value == "") {
        parent.classList.remove("focus")
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc)
    input.addEventListener("blur", blurFunc)
})

/* Scroll sections active link */
// const sections = document.querySelectorAll("section[id]");

// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {
//     let myscrollY = window.scrollY;

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight; // Hauteur totale de la section
//         const sectionTop = current.offsetTop - 50,  // Position de la section ajustée
//         sectionId = current.getAttribute("id");
        

//         if (myscrollY > sectionTop && myscrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.nav__menu a[href*="#' + sectionId + '"]').classList.add("active-link");
//         } else {
//             document.querySelector('.nav__menu a[href*="#' + sectionId + '"]').classList.remove("active-link");
//         }
//     });
// }