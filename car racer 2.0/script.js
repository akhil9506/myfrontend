$('#go').click(function (){
function checkIfcomplete() {
    
        if(isComplete == false){
            isComplete = true;
        }
        else{
            place = 'second';
        }
    }
    var carWidth = $('#car1').width();
    var raceTrackWidth = $(window).width()-carWidth;
    var raceTime1 = Math.floor((Math.random() *5000) +1);
    var raceTime2 = Math.floor((Math.random() *5000) +1);
    var isComplete = false;
    var place = 'first';
    console.log('akhil');
    $('#car1').animate({
        left:raceTrackWidth
    },raceTime1,function(){
        checkIfcomplete();
        $('#raceInfo1 span').text('Finished in'+place+'place and clocked in at'+raceTime1+'milli seconds');
    });
    $('#car2').animate({
        left:raceTrackWidth
    },raceTime2,function(){
        checkIfcomplete();
        $('#raceInfo2 span').text('Finished in'+place+'place and clocked in at'+raceTime2+'milli seconds');
    });
        
});
$('#reset').click(function(){
    $('.car').css('left','0px'),
    $('#raceInfo1').text('Car1'),
        $('#raceInfo2').text('Car2');  
    

    
});