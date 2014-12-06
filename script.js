/**
 * Created by kelly on 12/4/14.
 */

$(document).ready(function () {

    var powerBall    = $('.pball');
    var megaMillions = $('.mega');
    var hotLotto     = $('.hot');


    powerBall.on('click', function () {
        whitePowerBall();
        redPowerBall();
    });

    megaMillions.on('click', function() {
        whiteMegaBall();
        yellowMegaBall();
    });

    hotLotto.on('click', function() {
        whiteHotBall();
        orangeHotBall();
    });




    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }


    function whitePowerBall() {
        var whiteBall = $('.whitePowerBall');

        for (var i = 0; i < whiteBall.length; i++) {  //get random number for each ball
            whiteBall.eq(i).text(randomNumber(1, 59));  //eq(i) = Reduce the set of matched elements to the one at the specified index - http://api.jquery.com/eq/
         }
    }


    function redPowerBall() {
        var redBall = $('.redPowerBall');

        for (var i = 0; i < redBall.length; i++) {
            redBall.eq(i).text(randomNumber(1, 35)); // (min, max)
        }
    }


    function whiteMegaBall() {
        var whiteMegaBall = $('.whiteMegaBall');

        for (var i = 0; i < whiteMegaBall.length; i++) {
            whiteMegaBall.eq(i).text(randomNumber(1, 75));
        }
    }


    function yellowMegaBall() {
        var yellowMegaBall = $('.yellowMegaBall');

        for (var i = 0; i < yellowMegaBall.length; i++) {
            yellowMegaBall.eq(i).text(randomNumber(1, 15));
        }
    }


    function whiteHotBall() {
        var whiteHotBall = $('.whiteHotBall');

        for (var i = 0; i < whiteHotBall.length; i++) {
            whiteHotBall.eq(i).text(randomNumber(1, 47));
        }
    }


    function orangeHotBall() {
        var orangeHotBall = $('.orangeHotBall');

        for (var i = 0; i < orangeHotBall.length; i++) {
            orangeHotBall.eq(i).text(randomNumber(1, 19));
        }
    }

});