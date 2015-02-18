$(document).ready(function() {
    
    $('#videos a').each(function() {
        var data = $(this).attr('data');
        $(this).append('<img src="http://img.youtube.com/vi/'+data+'/maxresdefault.jpg" />');
    });
    
    $('#videos a').click(function() {
        var data = $(this).attr('data');
        $('#loader').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+data+'" frameborder="0" allowfullscreen></iframe>');     
        $('#facebook').attr('href','http://www.facebook.com/sharer.php?u=https://www.youtube.com/watch?v='+data);
        $('#twitter').attr('href','http://twitter.com/home?status=https://www.youtube.com/watch?v='+data);
        $('#googleplus').attr('href','https://plus.google.com/share?url='+data);
        $('#pinterest').attr('href','http://pinterest.com/pin/create/button/?url='+data);
        $('#overlay').fadeIn(250);  
    });
    
    $('#close').click(function() {
       $('#overlay').fadeOut(250,function() {
          $('#loader').html(''); 
       });
    });
    
});
