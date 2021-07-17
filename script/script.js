// NAVEGAÇÃO POR TABS

function iniciaNavTab() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li'); 
    const tabContent = document.querySelectorAll('.js-tabcontent section'); 
    tabContent[0].classList.add('ativo'); 
    if (tabMenu.length && tabContent.length){ 
        function ativaTab(index){
            tabContent.forEach((item) => {
                item.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }
        tabMenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                ativaTab(index);
            });
        });
    }
}
iniciaNavTab();

// ACCORDION LIST

function iniciaAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const classeAtivo = 'ativo';
    if (accordionList.length){
        accordionList[0].classList.add(classeAtivo); 
        accordionList[0].nextElementSibling.classList.add(classeAtivo);
        function addClase(){
            this.classList.toggle(classeAtivo);
            this.nextElementSibling.classList.toggle(classeAtivo);
        }
        accordionList.forEach((item) => {
            item.addEventListener('click', addClase);
        });
    }
}
iniciaAccordion();

// SCROLL SUAVE

function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href); 
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    linksInternos.forEach((item) => {
        item.addEventListener('click', scrollToSection);
    });
}
initScrollSuave();

// ANIMAÇÃO SCROLL

function animacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll');
    const tamanhoTela = window.innerHeight * 0.6;
    if (sections.length){
        function animaScroll() {
            sections.forEach((item) => {
                const alturaTopo = item.getBoundingClientRect().top;
                const horaAnimacao = (alturaTopo - tamanhoTela) < 0;
                if(horaAnimacao){
                    item.classList.add('ativo');
                }else{
                    item.classList.remove('ativo');
                }
            });
        }
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}
animacaoScroll();