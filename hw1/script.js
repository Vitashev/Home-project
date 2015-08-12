$(function(){
   function Countup(place){
       var d = new Date();
       var counter =0;
       var id;

       this.printTimer = function(){
           id = setInterval(function(){
              d.setHours(0,0,counter++);
              place.text(d.toLocaleTimeString());
          }, 1000)

       };
       this.pause = function(){
           clearInterval(id);
       };
       this.play = function(){
           this.printTimer();
       };
       this.refresh = function(){
           counter=0;
       }

   }

    function Countdown(place){
        var d = new Date();
        var counter = d.getSeconds();
        var h = d.getHours();
        var m = d.getMinutes();
        var id;
        this.printTimer = function(){

            id = setInterval(function(){
                d.setHours(h,m,counter--);
                place.text(d.toLocaleTimeString());
            }, 1000)

        };
        this.pause = function(){
            clearInterval(id);
        };
        this.play = function(){
            this.printTimer();
        };
        this.refresh = function(){
            d = new Date();
            h = d.getHours();
            m = d.getMinutes();
            counter = d.getSeconds();
        };

    }



   // var count = new Countup($('#timerview'));
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