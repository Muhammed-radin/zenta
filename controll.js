id('rightPanel').style.width = localStorage.getItem('rightw');
id('centerPanel').style.width = localStorage.getItem('cenw');
//canvas.setDimensions({ width: id('centerPanel').offsetWidth, height: id('centerPanel').offsetHeight });

if (localStorage.getItem('rt') == 0){
    id('rightPanel').style.display = 'none'
} else {
    id('rightPanel').style.display = 'block'
} 

id('rightSlider').addEventListener('drag', function (e) {
    x = e.clientX;
    y = e.clientY;
    id('rightPanel').style.width = window.innerWidth - x + 'px';
    id('centerPanel').style.width = x - 50 + 'px';
    id('fileDiv').style.width = ( id('rightPanel').offsetWidth / 100 ) * 91 + 'px'
    // canvas.setDimensions({ width: id('centerPanel').offsetWidth, height: id('centerPanel').offsetHeight });
})
id('rightSlider').addEventListener('dragend', function (e) {
    x = e.clientX;
    y = e.clientY;
    id('rightPanel').style.display = 'block'
    localStorage.setItem('rt', 1)
    if (window.innerWidth - x > 400) {
        x = window.innerWidth - 400;
    } else if (window.innerWidth - x < 70) {
        x = window.innerWidth - 12;
        id('rightPanel').style.display = 'none'
        localStorage.setItem('rt', 0)
    }
    rightw = id('rightPanel').style.width = window.innerWidth - x + 'px';
    cenw = id('centerPanel').style.width = x - 50 + 'px';
    id('fileDiv').style.width = ( id('rightPanel').offsetWidth / 100 ) * 91 + 'px'
    // canvas.setDimensions({ width: id('centerPanel').offsetWidth, height: id('centerPanel').offsetHeight });
    localStorage.setItem('rightw', rightw);
    localStorage.setItem('cenw', cenw);
})
id('rightSlider').addEventListener('touchmove', function (e) {
    var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
    var touch = evt.touches[0] || evt.changedTouches[0];
    x = touch.pageX;
    y = touch.pageY;
    id('rightPanel').style.width = window.innerWidth - x + 'px'
    id('centerPanel').style.width = x - 30 + 'px';
    // canvas.setDimensions({ width: id('centerPanel').offsetWidth, height: id('centerPanel').offsetHeight });
})
id('rightSlider').addEventListener('touchend', function (e) {
    var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
    var touch = evt.touches[0] || evt.changedTouches[0];
    x = touch.pageX;
    y = touch.pageY;
    id('rightPanel').style.display = 'block'
    localStorage.setItem('rt', 1)
    if (window.innerWidth - x > 350) {
        x = window.innerWidth - 350;
    } else if (window.innerWidth - x < 50) {
        x = window.innerWidth - 20;
        id('rightPanel').style.display = 'none'
        localStorage.setItem('rt', 0)
    }
    rightw = id('rightPanel').style.width = window.innerWidth - x + 'px';
    cenw = id('centerPanel').style.width = x - 30 + 'px';
    // canvas.setDimensions({ width: id('centerPanel').offsetWidth, height: id('centerPanel').offsetHeight });
    localStorage.setItem('rightw', rightw);
    //localStorage.setItem('cenw', cenw);
})


id('console').onclick = function (){
    id('cmd').focus()
}