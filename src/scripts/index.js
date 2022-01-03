import isWindows from 'cross-env/src/is-windows';
import '../index.html';
import '../styles/index.scss';
import '../vendor/materialize.min.js';


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

        const perc = (vH/clientRectToCenter - 1)*1.3;
        const ratio = perc > 1 ? 1 : perc.toFixed(2);

        item.style.opacity = ratio;
        item.style.transform = `scale(${ratio})`


      } else if (clientRectToCenter < breakPoint ||
        clientRectToCenter === breakPoint) {

        item.style.opacity = 1;
        item.style.transform = `scale(${1})`
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
  const timer = document.querySelector('#timer span');
  const battle = document.querySelector('#battle span');
  const food = document.querySelector('#food span');
  const lb = document.querySelector('#lb span');
  const rt = document.querySelector('#rt span');
  const sitev1 = document.querySelector('#sitev1 span');
  const htl = document.querySelector('#htl span');
  const slider = document.querySelector('#slider span');
  const towatchapp = document.querySelector('#towatchapp span');



  function switchLang(lang) {
    switch (lang) {
      case 'ru':
        h1.innerHTML = 'Фронтенд разработчик.<br><span class="header__title-span">Усердно работаю и учусь каждый день, чтобы делать что-то крутое</span>';
        worksTitle.innerText = 'Примеры моих работ';
        aboutTitle.innerText = 'О, привет!';
        aboutText.innerText = 'Я Артем, начинающий веб-разработчик из города Краснодар. Помимо фронтенда люблю свою тачку (даже фотография тут с ней) и играть в доту 2 (да, есть грешок). А ещё я 20 лет прожил в городе Вологда-гда-гда, но теперь живу в Краснодаре.'
        footerDescr.innerHTML = '<span><a href="https://drive.google.com/file/d/1Sc2gP7cFUz7v-tQz75RGBUwYsNz-eblP/view?usp=sharing" class="footer__link" target="blank">Здесь</a> вы можете ознакомиться с моим резюме, если ищите Frontend разработчика.<br>Или свяжитесь со мной<br><br><a href="tel:89992610031" class="footer__link">8 (999) 261-00-31</a><br><a href="mailto:ateee@yandex.ru" class="footer__link">ateee@yandex.ru</a></span>';
        footerSocTitle.innerText = 'Мои социальные сети';
        promoSocialText.innerText = 'Социальные сети';
        promoSocialDivider.style.width = '';
        timer.innerText = 'Таймер. Несложный таймер с возможностью старта, паузы, сохранения кругов и сброса. Присутсвует индикация как цифровая, так и на циферблате. Над дизайном долго не думал, поэтому он не очень изысканный.';
        battle.innerText = 'Игра Морской бой. На нативном JS, с рандомной генерацией флота, возможностью играть против бота (тоже очень рандомного). Вспомните как развлекались школьники до появления телефонов.';
        food.innerText = 'Сайт о здоровом питании. Присутсвует калькулятор каллорий, модальные окна, слайдер и прочие мелочи. Native JS, CCS3, HTML5, Webpack';
        lb.innerText = 'Таблица лидеров, навеяная желанием улучшить оригинал по адресу https://www.dota2.com/ leaderboards. Ну и это была первая практика доступа к API. Загружается быстрее оригинала, есть фильтр, пагинация. Получает API с dota2.com. Задеплоен на heroku.';
        rt.innerText = 'Самостоятельный проект по вёрстке о путешествии по России. HTML5, CSS3 со всеми своими современными технологиями, в том числе Grid Layout, которые позволяют делать максимально адаптивный проект.';
        sitev1.innerText = 'Первая версия моего личного сайта. Первое, что сделал да HTML и CSS.';
        htl.innerText = 'Одностраничный сайт о техниках и принципах обучения, свёрстанный с применением HTML5 и CSS3, используя методологию БЭМ.';
        slider.innerText = 'Слайдер с фильтром. Одно из выполненных тестовых заданий (одно из первых). При выборе категории фильтруется наполнение слайдера, меняется индикатор количества страниц и так далее.'
        towatchapp.innerText = 'React-приложение для сохранения фильмов к просмотру. Работает с API кинопоиска. Ещё в работе, планы в readme.'
        break
      case 'en':
        h1.innerHTML = 'Front end developer.<br><span class="header__title-span">WORKING HARD TO MAKE THE INTERNET AWESOME</span>';
        worksTitle.innerText = 'Examples of my few works';
        aboutTitle.innerText = 'Oh, hi!';
        aboutText.innerText = 'I am Artem, a junior web developer from Krasnodar city. In addition to the frontend, I love my car (even a photo with it) and play Dota 2 (yes, there is a sin). And I also lived for 20 years in the city of Vologda, once upon a time, but now I live in Krasnodar.'
        footerDescr.innerHTML = '<span><a href="https://drive.google.com/file/d/1Sc2gP7cFUz7v-tQz75RGBUwYsNz-eblP/view?usp=sharing" class="footer__link" target="blank">Here</a> you can see my resume if you are looking for a frontend developer.<br>Or contact me<br><br><a href="tel:89992610031" class="footer__link">8 (999) 261-00-31</a><br><a href="mailto:ateee@yandex.ru" class="footer__link">ateee@yandex.ru</a></span>';
        footerSocTitle.innerText = 'My socials';
        promoSocialText.innerText = 'Socials';
        promoSocialDivider.style.width = '130px';
        timer.innerText = 'Timer. Uncomplicated timer with start, pause, lap save and reset. There is an indication both digital and on the dial. I didn`t think about the design for a long time, so it`s not very sophisticated. ';
        battle.innerText = 'Sea Battle game. On native JS, with a random fleet generation, use to play against a bot (also very random). Remember how schoolchildren had fun before the advent of telephones. ';
        food.innerText = 'Website about healthy eating. There is a calorie calculator, modal windows, a slider and other little things. Own JS, CCS3, HTML5, Webpack';
        lb.innerText = 'Leaderboards inspired by the desire to improve the original at https://www.dota2.com/ leaderboards. Well, this was the first practice of accessing the API. Loads faster than the original, there is a filter, pagination. Receives API from dota2.com. Deployed to hero.';
        rt.innerText = 'An independent layout project about a trip to Russia. HTML5, CSS3 with all its modern technologies, including Grid Layout, which allow you to make the most responsive project.';
        sitev1.innerText = 'This is the first version of my personal site. The first thing I did was HTML and CSS.';
        htl.innerText = 'One page site about teaching methods and principles, laid out using HTML5 and CSS3, using the BEM methodology.';
        slider.innerText = 'Slider with filter. One of the completed test tasks (one of the first). When you select a category, the content of the slider is filtered, the indicator of the number of pages changes, and so on.'
        towatchapp.innerText = 'React-app to save films list for viewing. Works with the Kinopoisk API. Still in progress, plans are in the readme.'
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
