const date = new Date();
const displayYear = date.getFullYear();

const titles = [
    'Acid Pain',
    'Acid Brain',
    'Flacid Thang',
    'Manic Brain',
    'Bangarang',
    'Kinda Strange',
    'Tangerine'
];

$(document).ready(function () {
    $('.year').html(displayYear); // Set year in DOM to full year

    // Random Title | Chance
    var randomTitleAssignmentChance = Math.floor(Math.random() * 3000);
    var randomTitleAssignment = Math.floor(Math.random() * 8);
    if (randomTitleAssignmentChance == 25) {
        $('.title').html(titles[randomTitleAssignment]);
    } else
        if (randomTitleAssignmentChance == 8) {
            $('.year').html('3000')
        }

    // Quick move to content
    $('.move-to-content').click(function (e) {
        e.preventDefault();
        $('html, body, .content').animate({ scrollTop: $(window).height() - 30}, 1000);
    });

    // Fading Logo
    var AR_logo = $('#logo');
    $(window).on('scroll', function () {
        var st = $(this).scrollTop();
        AR_logo.css({
            'opacity': 1 - st / ($(window).height() / 2)
        });
    });

    // Sticky Heading
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(window).height() - 30) {
            $('.heading-margin').css({
                'position' : 'fixed',
                'top' : '30px'
            });

            $('.clearfix').show();
        }
        else {
            $('.heading-margin').css('position', 'unset');
            $('.clearfix').hide();
        }
    });


    // Sticky Header
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var headerHeight = $('header').offset().top;
        var headingOffset = $('.heading-margin').offset().top;

        if (scroll > 30) {
            $('footer').hide();
        }
        
        if (scroll >= 400) {
            $('#move-down').slideUp(100);
        }

        if (scroll > headerHeight && scroll >= 90) {
            //clearHeader, not clearheader - caps H
            $('header').hide();
            $('.fixed-header').slideDown(100);
            
        } else {
            $('header').show();
            $('.fixed-header').hide();
            
            if (scroll <= 0) {
                $('footer').show();
                $('#move-down').slideDown(100);
            }
        }

    });
});