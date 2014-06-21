$(document).ready(function(){
    var cos = false;
    var coss = false;

    $('#menu-button').click(function(){
        if(cos == false){
            /*$('body').animate({
                scrollTop: $('body').offset().top
            },  {
                duration: 0,
                easing: 'out'
            });*/
            $('body').transition({overflow: 'hidden'});
            $('#first-nav').transition({marginLeft: '200px'}, 100, 'out');
            $('#main').transition({marginLeft: '200px'}, 100, 'out');

            $('#mask').transition({visibility: 'visible', backgroundColor: 'rgba(0, 0, 0, 0.5'}, 200, 'out');

            cos = true;
        }else if(cos == true || coss == true){
            $('body').transition({overflow: 'auto'});
            $('#first-nav').transition({marginLeft: '0px'}, 100, 'out');
            //$('#second-nav').transition({marginLeft: '0px'}, 100, 'out');
            $('#main').transition({marginLeft: '0px'}, 100, 'out');

            $('#mask').transition({backgroundColor: 'rgba(0, 0, 0, 0)', visibility: 'hidden'}, 100, 'out');
            $('#mask').transition({zIndex: '0'});

            cos = false;
            coss = false;
        }
    });
    $('.navv').click(function(){

        if(coss == false){
            $('body').transition({overflow: 'hidden'});
            //$('#first-nav').transition({marginLeft: '220px'}, 100, 'out');
            //$('#second-nav').transition({marginLeft: '220px'}, 100, 'out');
            //$('#main').transition({marginLeft: '220px'}, 100, 'out');
            //$('#mask').transition({zIndex: '400'});

            coss = true;
        }else if(coss == true){
            //$('#first-nav').transition({marginLeft: '200px'}, 100, 'out');
            //$('#second-nav').transition({marginLeft: '0px'}, 100, 'out');
            //$('#main').transition({marginLeft: '0px'}, 100, 'out');

            coss = false;
        }
    });
    $('#mask').click(function(){
        if(cos == true || coss == true){
            $('body').transition({overflow: 'auto'});
            $('#first-nav').transition({marginLeft: '0px'}, 100, 'out');
            //$('#second-nav').transition({marginLeft: '0px'}, 100, 'out');
            $('#main').transition({marginLeft: '0px'}, 100, 'out');

            $('#mask').transition({backgroundColor: 'rgba(0, 0, 0, 0)', visibility: 'hidden'}, 100, 'out');
            //$('#mask').transition({zIndex: '0'});

            cos = false;
            coss = false;
        }
    });
    
    $('#about-button').click(function(){
       $('#about').transition({visibility: 'visible', opacity: '1'}, 100, 'out'); 
    });
    $('#monuments-button').click(function(){
       $('#monuments').transition({visibility: 'visible', opacity: '1'}, 100, 'out'); 
    });
    $('#places-button').click(function(){
       $('#places').transition({visibility: 'visible', opacity: '1'}, 100, 'out'); 
    });
    $('#history-button').click(function(){
       $('#history').transition({visibility: 'visible', opacity: '1'}, 100, 'out'); 
    });
    
    $('.close-button').click(function(){
        $('#about').transition({visibility: 'hidden', opacity: '0'}, 100, 'out');
        $('#monuments').transition({visibility: 'hidden', opacity: '0'}, 100, 'out');
        $('#places').transition({visibility: 'hidden', opacity: '0'}, 100, 'out');
        $('#history').transition({visibility: 'hidden', opacity: '0'}, 100, 'out');
    });
    
    $('#about-button').click(function(){
        $('body, html').animate({
            scrollTop: $('#monuments').offset().top
         },  {
             duration: 300,
             easing: 'swing'
         });
    });
});