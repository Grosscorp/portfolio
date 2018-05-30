$(function () {

    $('.mouse-scroll').on('click', function (e) {
        e.preventDefault();      
        
        $('html, body').animate({
            scrollTop:  $('#skill').offset().top
        }, 800);
            
    });

});

window.onload = function() {

  var Type = new Type({
    str: 'My name is Mykola and I am a beginner front-end developer.',
    speed: 100,
    target: document.querySelector('.header__welcome-text')
  }); 

  function Type(opt) {
    var i = 0;
    var t = this;

    this.str = opt.str;
    this.speed = opt.speed||80;
    this.target = opt.target;

    type();

    function type() {
      if (i < t.str.length) {
        t.target.innerText += t.str.charAt(i);
        i++;
        setTimeout(type, t.speed);
      }
    };
  };

};
