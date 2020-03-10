var gradients = {
    start: '#FF1461',
    end: '#5A87FF'
  }
  
var el = document.querySelector('h1');
  
var animation = anime({
    targets: gradients,
    start: '#8453E3',
    end: '#FBF38C',
    duration: 3000,
    easing: 'easeOutQuad',
    round: 1,
    loop: true,
    direction: 'alternate',
    update: function(a) {
      var value1 = a.animations[0].currentValue;
      var value2 = a.animations[1].currentValue;
      el.style.backgroundImage = 'linear-gradient(90deg, '+value1+' 10%, '+value2+' 100%)'
    }
  })

  console.log(animation)