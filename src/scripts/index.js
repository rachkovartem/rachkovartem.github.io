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
