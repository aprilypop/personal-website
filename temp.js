  $('document').ready(function() {

    myVar = setInterval(myTimer, 250);

    function myTimer() {

      var letters = ["🍒", "🍋", "🍎", "🍌", "🍉"];
      var letter1 = letters[Math.floor(Math.random() * letters.length)];
      var letter2 = letters[Math.floor(Math.random() * letters.length)];
      var letter3 = letters[Math.floor(Math.random() * letters.length)];
      var all = letter1 + ' ' + letter2 + ' ' + letter3;

      var bilder = ["img/kirsche.png", "img/zitrone.png", "img/apfel.png", "img/banane.png", "img/melone.png"];
      var src = bilder[Math.floor(Math.random() * letters.length)];
      $("#favicon").attr("href", src);

      if (letter1 == letter2 && letter2 == letter3 && letter3) {
        ture = true;
        clearInterval(myVar);
        var myVar2 = setInterval(myTimer2, 250);

        function myTimer2() {
          setTimeout(function() {
            if (ture == true) {
              $(document).attr("title", "🔥 🔥 🔥");
              $("#favicon").attr("href", "img/flamme.png");
              ture = false;
            } else {
              $(document).attr("title", all);
              if (all == '🍒 🍒 🍒') {
                $("#favicon").attr("href", "img/kirsche.png");
              } else if (all == '🍋 🍋 🍋') {
                $("#favicon").attr("href", "img/zitrone.png");
              } else if (all == '🍎 🍎 🍎') {
                $("#favicon").attr("href", "img/apfel.png");
              } else if (all == '🍌 🍌 🍌') {
                $("#favicon").attr("href", "img/banane.png");
              } else if (all == '🍉 🍉 🍉') {
                $("#favicon").attr("href", "img/melone.png");
              }
              ture = true;
            }
          }, 250)
        }
        setTimeout(function() {
          clearInterval(myVar2);
          myVar = setInterval(myTimer, 250);
        }, 5000)
      } else {
        $(document).attr("title", all);
      }

    };

    $(window).load(function() {
      $('div').each(function() {
        var top = $(this).offset().top;
        $(this).css({
          'top': top
        })
      });
    });

    var inner = $('main').innerHeight();
    $('body').css({
      'height': inner
    });
    if ($(window).width() >= 1000) {
      $(window).one('mousemove', function() {
        $('div').addClass('active')
        $("div").box2d({
          'y-velocity': 9.8,
          'x-velocity': -0.05,
          'debug': false
        });
      });
    }

  });