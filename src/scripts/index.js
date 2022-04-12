import '../index.html';
import '../styles/index.scss';

let vH

function calcVH() {
  vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  document.documentElement.style.setProperty('--100vh', `${vH}px`);
}
calcVH();
window.addEventListener('onorientationchange', calcVH, true);
window.addEventListener('resize', calcVH, true);

document.addEventListener('DOMContentLoaded', function(){
  const page = document.querySelector('.page');
  const preloader = document.querySelector('.preloader-wrapper');
  const promo__social = document.querySelector('.promo__social');
  const header = document.querySelector('.header');
  const works = document.querySelector('.works');
  const about = document.querySelector('.about');
  const footer = document.querySelector('.footer');

  window.onload = function() {
    preloader.style = 'display: none';
    page.style = '';
    promo__social.style = '';
    header.style = '';
    works.style = '';
    about.style = '';
    footer.style = '';
  }

  const gridItems = document.querySelectorAll('.works__item')

  function worksGridScrollAnimation(selector) {
    selector.forEach((item) => {
      let boundingClientRect = item.getBoundingClientRect().y;
      let clientRectToCenter = boundingClientRect + +item.clientHeight/2 * +item.style.transform.slice(6,-1);
      const breakPoint = vH/2;

      if (clientRectToCenter >  vH) {
        item.style.opacity = 0;
        item.style.transform = `scale(${0})`
      } else if (clientRectToCenter > breakPoint &&
      clientRectToCenter < vH) {
        const perc = (vH/clientRectToCenter - 1)*2;
        const ratio = perc > 1 ? 1 : perc.toFixed(2);
        item.style.opacity = ratio;
        item.style.transform = `scale(${ratio})`
      }
    })
  }

  window.addEventListener('scroll', () => {worksGridScrollAnimation(gridItems)});

  const lng = localStorage.getItem('lng') ? localStorage.getItem('lng') : 'ru';
  const h1 = document.querySelector('.header__title');
  const aboutTitle = document.querySelector('.about__title');
  const aboutText = document.querySelector('.about__text');
  const footerDescr = document.querySelector('.footer__description');
  const footerSocTitle = document.querySelector('.footer__socials-title');
  const langButtons = document.querySelectorAll('.works__btn-lang');
  const promoSocialText = document.querySelector('.promo__social-text');
  const html = document.querySelector('html');
  const promoSocialDivider = document.querySelector('.promo__social-divider');

  function switchLang(lang) {
    switch (lang) {
      case 'ru':
        h1.innerHTML = 'Фронтенд разработчик.<br><p class="header__title-span">Усердно работаю каждый день, чтобы делать что-то крутое</p>';
        aboutTitle.innerText = 'О, привет!';
        aboutText.innerText = 'Меня зовут Артём, я фронтенд разработчик из Краснодара. Работаю с JS ES6+, TypeScript, React 16.8+, Redux, Next.js, разными библиотеками вроде MUI, i18n и другими. Верстка - CSS3 (Flexbox, Grid, variables и тд) + SCSS, SASS, LESS. Тесты на Jest. С бэком тоже имел дело: Node.js + express, Nest.js. БД - mongoDB, PostgreSQL. Мой опыт работы можно посмотреть в резюме ниже. И Github там же.'
        footerDescr.innerHTML = '<span><a href="https://drive.google.com/file/d/1m8bJrt5wkPCCK47aeP62QGzKu0JcPShN/view?usp=sharing" class="footer__link" target="blank">Здесь</a> вы можете ознакомиться с моим резюме, если ищите Frontend разработчика.<br>Или свяжитесь со мной<br><br><a href="tel:89676618584" class="footer__link">8 (967) 661-85-84</a><br><a href="mailto:a.rachkov94@gmail.com" class="footer__link">a.rachkov94@gmail.com</a></span>';
        footerSocTitle.innerText = 'Мои социальные сети';
        promoSocialText.innerText = 'Социальные сети';
        promoSocialDivider.style.width = '';
        break
      case 'en':
        h1.innerHTML = 'Frontend developer.<br><p class="header__title-span">WORKING HARD TO MAKE THE INTERNET AWESOME</p>';
        aboutTitle.innerText = 'Oh, hi!';
        aboutText.innerText = "My name is Artem, I am a frontend developer from Krasnodar. I work with JS ES6+, TypeScript, React 16.8+, Redux, Next.js, different libraries like MUI, i18n and others. Layout - CSS3 (Flexbox, Grid, variables, etc.) + SCSS, SASS, LESS. Tests with Jest. Also I dealt with the back: Node.js + express, Nest.js . DB - MongoDB, PostgreSQL. My work experience can be found in the CV below. And Github in the same place."
        footerDescr.innerHTML = '<span><a href="https://drive.google.com/file/d/1m8bJrt5wkPCCK47aeP62QGzKu0JcPShN/view?usp=sharing" class="footer__link" target="blank">Here</a> you can see my resume if you are looking for a frontend developer.<br>Or contact me<br><br><a href="tel:89676618584" class="footer__link">8 (967) 661-85-84</a><br><a href="mailto:a.rachkov94@gmail.com" class="footer__link">a.rachkov94@gmail.com</a></span>';
        footerSocTitle.innerText = 'My socials';
        promoSocialText.innerText = 'Socials';
        promoSocialDivider.style.width = '130px';
      }
  }

  switchLang(lng);
  langButtons.forEach((btn) => {
    btn.classList.remove('works__btn-lang_active');
  })
  document.querySelector(`#${lng}`).classList.add('works__btn-lang_active');
  html.lang = lng;

  langButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      switchLang(e.target.id);
      langButtons.forEach((btn) => {
        btn.classList.remove('works__btn-lang_active');
      })
      e.target.classList.toggle('works__btn-lang_active');
      localStorage.setItem('lng', e.target.id)
      html.lang = e.target.id;
    })
  })
})
