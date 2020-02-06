const wrapperEl = document.querySelector('.container');
const numberOfEls = 15;
const duration = 5000;
//const delay = duration / numberOfEls;
const delay = 0;

    let tl = anime.timeline({
      duration: duration,
      complete: function() { tl.restart(); }
    });

function createEl(i) {
    let el = document.createElement('div');
    const rotate = (360 / numberOfEls) * i;
    const translateY = -50;
    //const hue = Math.round(360 / numberOfEls * i);
    el.classList.add('el');
    el.style.backgroundColor = 'hsl(10, 70%, 60%)';
    //el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
    // tl.add({
    //   begin: function() {
    //     anime({
    //       targets: el,
    //       rotate: [rotate + 'deg', rotate + 10 +'deg'],
    //       //translateY: [translateY + '%', translateY + 10 + '%'],
    //       translateX: [0,100],
    //       easing: 'easeInOutSine',
    //       direction: 'alternate',
    //       duration: duration * .1
    //     });
    //   }
    // });

    anime({
        targets: el,
        rotate: [rotate + 'deg', rotate + 10 +'deg'],
        translateX: [0,200],
        easing: 'easeInOutSine',
        duration: duration * .1
    })
    wrapperEl.appendChild(el);
  };

  for (let i = 0; i < numberOfEls; i++) createEl(i);