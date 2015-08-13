$(function(){
    function Countup(place){
        var m, s, h, start = 0;
        var id;

        this.printTimer = function(end){

            id = setInterval(function(){
                m = parseInt(start / 60, 10)%60;
                h = parseInt(start / 3600, 10)%24;
                s = start % 60;

                place.text(format(h) + ":" +format(m) + ":" + format(s));

                if(start == end){
                    clearInterval(id);
                    place.text("Time was ended!");
                }else{
                    start++;
                }


            }, 1000)

        };

        var format = function(timedata){
            return (timedata < 10) ? "0" + timedata : timedata;
        };

        this.pause = function(){
            clearInterval(id);
        };
        this.play = function(){
            this.printTimer();
        };
        this.refresh = function(){
            start=0;
        }

    }

    function Countdown(place){
        var d = new Date;
        var m, s, h, start = d.getHours()*3600 + d.getMinutes()*60 + d.getSeconds();;
        var id;

        this.printTimer = function(){
            id = setInterval(function(){
                m = parseInt(start / 60, 10)%60;
                h = parseInt(start / 3600, 10)%24;
                s = start % 60;

                place.text(format(h) + ":" +format(m) + ":" + format(s));

                if(start == 0){
                    clearInterval(id);
                    place.text("Time was ended!");
                }else{
                    start--;
                }


            }, 1000)

        };

        var format = function(timedata){
            return (timedata < 10) ? "0" + timedata : timedata;
        };

        this.pause = function(){
            clearInterval(id);
        };
        this.play = function(){
            this.printTimer();
        };
        this.refresh = function(){
            var d = new Date;
            start = d.getHours()*3600 + d.getMinutes()*60 + d.getSeconds();
        }

    }


    // ДЛЯ ТЕСТУВАННЯ ОБЄКТУ Countdown, РОЗКОМЕНТУЙТЕ ЙОГО І ЗАКОМЕНТУЙТЕ Countup

    /*var count = new Countup($('#timerview'));
    count.printTimer(30);*/

    var count = new Countdown($('#timerview'));
    count.printTimer();

    $('#stop').on('click',function(){
        count.pause();
    });
    $('#continue').on('click',function(){
        count.play();
    });
    $('#refresh').on('click',function(){
        count.refresh();
    });



});