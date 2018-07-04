$(document).ready(function(){
    
    /*  SLICK SLIDER  */
    $('#partners').slick({
            accessibility: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                }
              },

              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                } 
              }
            ]

    });
    
    
    /*      
    VIEWPORTCHECKER + ANIMATE.CSS 
            Animacje
    */
    
    $('header').addClass("hiden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });
    
    /*  1st SECTION  */
    $('.bg-2 .img-cont').addClass("hiden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
    });
    $('.bg-2 .text').addClass("hiden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 100
    });
    $('.bg-2 .misja').addClass("hiden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });
    
    /*  2nd SECTION  */
    $('.container-podstawowe .text').addClass("hiden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
    });
    $('.container-podstawowe .img-cont').addClass("hiden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 100
    });
    
    /*  Konkurencyjnosc ikonki  */
    var i = 0;
    var posts = $('#konk-items').children();

    function animateCircle() {
    if (i % 2 === 0) {
        $(posts[i]).viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            offset: 100
        });
    } else {
        $(posts[i]).viewportChecker({
            classToAdd: 'visible animated fadeInDown',
            offset: 100
        });
    }
    i++;
    if (i <= posts.length) {
        startAnimation();
    }
    }

    function startAnimation() {
        setTimeout(function () {
            animateCircle();}, 400);
    }

    posts.addClass('hiden');
    animateCircle(posts);
    
    
    /*  3rd SECTION - Portfel Tabs */
    
    var j = 0;
    var tabs = $('ul.nav-tabs').children();

    function animateTab() {
        if (j % 2 === 0) {
            $(tabs[j]).viewportChecker({
                classToAdd: 'visible animated fadeInUp',
                offset: 100
            });
        } else {
            $(tabs[j]).viewportChecker({
                classToAdd: 'visible animated fadeInDown',
                offset: 100
            });
        }
        j++;
        if (j <= tabs.length) {
            startAnimationTabs();
        }
    }

    function startAnimationTabs() {
        setTimeout(function () {
            animateTab();}, 400);
    };

    tabs.addClass('hiden');
    animateTab(tabs);
    
   $('.pane-content').addClass("hiden").viewportChecker({
        classToAdd: 'visible animated pulse',
        offset: 100
    });
    
    /*  three-divs animation  */
    
    var k = 0;
    var divs = $('.three-divs').children();

    function animateDiv() {
    if (k % 2 === 0) {
        $(divs[k]).viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            offset: 100
        });
    } else {
        $(divs[k]).viewportChecker({
            classToAdd: 'visible animated fadeInDown',
            offset: 100
        });
    }
    k++;
    if (k <= divs.length) {
        startAnimationDivs();
    }
    }

    function startAnimationDivs() {
        setTimeout(function () {
            animateDiv();}, 400);
    };

    divs.addClass('hiden');
    animateDiv(divs);
    
    
    /*  4th SECTION - współpraca */
    
    
    $('.form-section .container .formularz >div:first-child').addClass("hiden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
    });
    $('.form-section .container .formularz >div:nth-child(2)').addClass("hiden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 100
    });
    $('.adres').addClass("hiden").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 100
    });
    
    /*  slider  */
    
    $('.container-partners').addClass("hiden").viewportChecker({
        classToAdd: 'visible animated slideInDown',
        offset: 100
    });
    

    
    
});































