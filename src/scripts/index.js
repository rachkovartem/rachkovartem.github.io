import isWindows from 'cross-env/src/is-windows';
import '../index.html';
import '../styles/index.scss';

const gridItems = document.querySelectorAll('.works__item')


function worksGridScrollAnimation(selector) {
  selector.forEach((item) => {
    item.style.opacity = '1';
    item.style.transform = 'scale(1)';

    const percentsToTop = item.getBoundingClientRect().y/document.documentElement.clientHeight;
    const opacity = (1 - percentsToTop)*2;
    const scale = (1 - percentsToTop)*2;

    if (opacity < 0 || opacity > 1) {
      return
    } else {
      item.style.opacity = opacity;
    }
    if (scale < 0) {
      item.style.transform = 'scale(0)'
    } else if (scale > 1) {
      item.style.transform = 'scale(1)'
    } else {
      item.style.transform = `scale(${scale})`;
    }
  })

}

window.addEventListener('scroll', () => {worksGridScrollAnimation(gridItems)});

const lng = localStorage.getItem('lng') ? localStorage.getItem('lng') : 'en';
const h1 = document.querySelector('.header__title');
const worksTitle = document.querySelector('.works__title');
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
      h1.innerHTML = 'Фронтенд разработчик.<br><span class="header__title-span">Усердно работаю и учусь каждый день, чтобы делать что-то крутое</span>';
      worksTitle.innerText = 'Примеры моих работ';
      aboutTitle.innerText = 'О, привет!';
      aboutText.innerText = 'Я Артем, начинающий веб-разработчик из города Краснодар. Помимо фронтенда люблю свою тачку (даже фотография тут с ней) и играть в доту 2 (да, есть грешок). А ещё я 20 лет прожил в городе Вологда-гда-гда, но теперь живу в Краснодаре.'
      footerDescr.innerHTML = '<span><a href="#" class="footer__link">Здесь</a> вы можете ознакомиться с моим резюме, если ищите Frontend разработчика.<br>Или свяжитесь со мной<br><br><a href="tel:89992610031" class="footer__link">8 (999) 261-00-31</a><br><a href="mailto:ateee@yandex.ru" class="footer__link">ateee@yandex.ru</a></span>';
      footerSocTitle.innerText = 'Мои социальные сети';
      promoSocialText.innerText = 'Социальные сети';
      promoSocialDivider.style.width = '';
      break
    case 'en':
      h1.innerHTML = 'Front end developer.<br><span class="header__title-span">WORKING HARD TO MAKE THE INTERNET AWESOME</span>';
      worksTitle.innerText = 'Examples of my few works';
      aboutTitle.innerText = 'Oh, hi!';
      aboutText.innerText = 'I am Artem, a junior web developer from Krasnodar city. In addition to the frontend, I love my car (even a photo with it) and play Dota 2 (yes, there is a sin). And I also lived for 20 years in the city of Vologda, once upon a time, but now I live in Krasnodar.'
      footerDescr.innerHTML = '<span><a href="#" class="footer__link">Here</a> you can see my resume if you are looking for a frontend developer.<br>Or contact me<br><br><a href="tel:89992610031" class="footer__link">8 (999) 261-00-31</a><br><a href="mailto:ateee@yandex.ru" class="footer__link">ateee@yandex.ru</a></span>';
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
