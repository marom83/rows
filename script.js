$(function () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    var a = 50;
    var b = 5;
    
    
    for (var i = 0; i < 5; i++) {
      for (j = 5 - i; j < 6; j++) {
        
        context.fillStyle = 'orange'
        context.fillRect((5-j)*a + (5-j)*b+10, i*a+i*b+10, a, a);
      }  
    }
    });