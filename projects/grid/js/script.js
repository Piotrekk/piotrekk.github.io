$(document).ready(function(){

    var GridApp = {};

    var windowWidth = $(window).width();
    $(window).resize(function() {
        if(windowWidth != $(window).width()){
            location.reload();
        }
    });

    GridApp.boxes = [$('#one'), $('#two'), $('#three'), $('#four'), $('#five'), $('#six')];
    
    GridApp.sizes = {
        all_599px: {
            one_line: $('.grid').slice(2, 4),
            two_line: $('.grid').slice(4, 6),
            three_line: $('.grid').slice(6, 8)
        },
        all_600px: {
            one_line: $('.grid').slice(3, 6),
            two_line: $('.grid').slice(6, 9)
        },
        all_880px: {
            one_line: $('.grid').slice(4, 8),
            two_line: $('.grid').slice(8, 12)
        },
        all_1150px: {
            one_line: $('.grid').slice(5, 10)
        },
        all_1330px: {
            one_line: $('.grid').slice(6, 12)
        },
        all_1600px: {
            one_line: $('.grid').slice(7, 14)
        }
    };
// 1 BOX    
    $(GridApp.boxes[0]).click(function(){
        if(windowWidth < 599){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('two-panel-opened three-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_599px.one_line).toggleClass('one-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('one-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 600 && windowWidth < 880){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('two-panel-opened three-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_600px.one_line).toggleClass('one-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('one-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 880 && windowWidth < 1150){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('two-panel-opened three-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_880px.one_line).toggleClass('one-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('one-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 1150 && windowWidth < 1330){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('two-panel-opened three-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_1150px.one_line).toggleClass('one-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('one-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 1330 && windowWidth < 1600){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('two-panel-opened three-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_1330px.one_line).toggleClass('one-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('one-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 1600){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('two-panel-opened three-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_1600px.one_line).toggleClass('one-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('one-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }
    });
// 2 BOX
    $(GridApp.boxes[1]).click(function(){
        if(windowWidth < 599){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened three-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_599px.one_line).toggleClass('two-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('two-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 600 && windowWidth < 880){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened three-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_600px.one_line).toggleClass('two-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('two-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 880 && windowWidth < 1150){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened three-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_880px.one_line).toggleClass('two-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('two-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 1150 && windowWidth < 1330){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened three-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_1150px.one_line).toggleClass('two-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('two-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 1330 && windowWidth < 1600){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened three-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_1330px.one_line).toggleClass('two-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('two-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 1600){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened three-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_1600px.one_line).toggleClass('two-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('two-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }
    });
// 3 BOX
    $(GridApp.boxes[2]).click(function(){
        if(windowWidth < 599){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_599px.two_line).toggleClass('three-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('three-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 600 && windowWidth < 880){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_600px.one_line).toggleClass('three-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('three-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 880 && windowWidth < 1150){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_880px.one_line).toggleClass('three-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('three-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 1150 && windowWidth < 1330){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_1150px.one_line).toggleClass('three-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('three-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 1330 && windowWidth < 1600){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_1330px.one_line).toggleClass('three-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('three-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 1600){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened four-panel-opened five-panel-opened');
            $(GridApp.sizes.all_1600px.one_line).toggleClass('three-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('three-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }
    });
// 4 BOX
    $(GridApp.boxes[3]).click(function(){
        if(windowWidth < 599){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened three-panel-opened five-panel-opened');
            $(GridApp.sizes.all_599px.two_line).toggleClass('four-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('four-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 600 && windowWidth < 880){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened three-panel-opened five-panel-opened');
            $(GridApp.sizes.all_600px.two_line).toggleClass('four-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('four-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 880 && windowWidth < 1150){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened three-panel-opened five-panel-opened');
            $(GridApp.sizes.all_880px.one_line).toggleClass('four-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('four-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 1150 && windowWidth < 1330){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened three-panel-opened five-panel-opened');
            $(GridApp.sizes.all_1150px.one_line).toggleClass('four-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('four-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 1330 && windowWidth < 1600){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened three-panel-opened five-panel-opened');
            $(GridApp.sizes.all_1330px.one_line).toggleClass('four-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('four-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 1600){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened three-panel-opened five-panel-opened');
            $(GridApp.sizes.all_1600px.one_line).toggleClass('four-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('four-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }
    });
// 5 BOX
    $(GridApp.boxes[4]).click(function(){
        if(windowWidth < 599){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened three-panel-opened four-panel-opened');
            $(GridApp.sizes.all_599px.three_line).toggleClass('five-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('five-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 600 && windowWidth < 880){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened three-panel-opened four-panel-opened');
            $(GridApp.sizes.all_600px.two_line).toggleClass('five-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('five-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 880 && windowWidth < 1150){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened three-panel-opened four-panel-opened');
            $(GridApp.sizes.all_880px.two_line).toggleClass('five-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('five-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 1150 && windowWidth < 1330){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened three-panel-opened four-panel-opened');
            $(GridApp.sizes.all_1150px.one_line).toggleClass('five-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('five-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 1330 && windowWidth < 1600){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened three-panel-opened four-panel-opened');
            $(GridApp.sizes.all_1330px.one_line).toggleClass('five-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('five-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }else if(windowWidth > 1600){
            $('.grid-content').children('.arrow').removeClass('arrow-visible');
            $('.grid').children('.panel').removeClass('panel-index');
            $('.grid').removeClass('one-panel-opened two-panel-opened three-panel-opened four-panel-opened');
            $(GridApp.sizes.all_1600px.one_line).toggleClass('five-panel-opened');
            $(this).children('.panel').toggleClass('panel-index');
            $('.grid').children('.grid-content').removeClass('box-visible');
            if($('*').hasClass('five-panel-opened')){
                $(this).children('.grid-content').addClass('box-visible');
                $(this).children('.grid-content').children('.arrow').addClass('arrow-visible');
            }else {
                $(this).children('.grid-content').removeClass('box-visible');
                $(this).children('.panel').removeClass('panel-index');
                $(this).children('.grid-content').children('.arrow').removeClass('arrow-visible');
            }
        }
    });
});