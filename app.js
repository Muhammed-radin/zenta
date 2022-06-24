// create a wrapper around native canvas element (with id="c")


window.addEventListener('keypress', function (e) {
    console.log(e);
    if (e.keyCode == 13) {
        save()
    } else if (e.keyCode == 99) {
        console.clear()
        this.localStorage.clear()
        this.window.location.reload()
    }
})
hideKeyboard(id('editor'))
function hideKeyboard() {
    //this set timeout needed for case when hideKeyborad
    //is called inside of 'onfocus' event handler
    setTimeout(function() {
  
      //creating temp field
      var field = document.createElement('input');
      field.setAttribute('type', 'text');
      //hiding temp field from peoples eyes
      //-webkit-user-modify is nessesary for Android 4.x
      field.setAttribute('style', 'position:absolute; top: 0px; opacity: 0; -webkit-user-modify: read-write-plaintext-only; left:0px;');
      document.body.appendChild(field);
  
      //adding onfocus event handler for out temp field
      field.onfocus = function(){
        //this timeout of 200ms is nessasary for Android 2.3.x
        setTimeout(function() {
  
          field.setAttribute('style', 'display:none;');
          setTimeout(function() {
            document.body.removeChild(field);
            document.body.focus();
          }, 14);
  
        }, 200);
      };
      //focusing it
      field.focus();
  
    }, 50);
  }
var canvas = new fabric.Canvas('c');

function id(id) {
    return document.getElementById(id);
}

var listOfid = []
var objs = []
var num = []

// create a rectangle object
var rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 50,
    height: 50
});
var cir = new fabric.Circle({
    left: 150,
    top: 150,
    radius: 20,
    fill: 'green',
    width: 50,
    height: 50,
});

var text = new fabric.Text('this is sample text', {
    fontFamily: 'Comic Sans'
})




canvas.setDimensions({ width: id('centerPanel').offsetWidth, height: id('centerPanel').offsetHeight });

// "add" rectangle onto canvas

if (!localStorage.getItem('id')) {
    console.log('e');
    localStorage.setItem('id', '[]')
    localStorage.setItem('objs', '[]')
} else {
    JSON.parse(localStorage.getItem('id')).forEach((element, idx) => {
        d = JSON.parse(localStorage.getItem(element))
        type = d.type
        if (type == 'rect') {
            element = new fabric.Rect({
                left: JSON.parse(localStorage.getItem('objs'))[idx].left,
                top: JSON.parse(localStorage.getItem('objs'))[idx].top,
                fill: d.fill,
                width: d.width,
                height: d.height
            })
            //element.set('left', ds.left)
            // element.top = ds.top
            // element.fill = ds.fill
            // element.width = ds.width
            // element.height = ds.height
        }
        canvas.add(element)
        listOfid.push(element)
        console.log(d);
    });
    save()
}
console.log(listOfid);
// JSON.parse(localStorage.getItem('id')).forEach((element, idx) => {
//     objs.push(element)
// })
// canvas.add(rect, cir, text);

function createRect() {
    newid = Math.floor(Math.random() * 999)
    gg = 'rect' + newid
    gg = new fabric.Rect({
        left: 1,
        top: 1,
        fill: 'black',
        width: 50,
        height: 50
    })
    listOfid.push('rect' + newid)
    canvas.add(gg)
    console.log(gg);
    num.push(newid)
    localStorage.setItem('n', num)
    localStorage.setItem('rect' + newid, JSON.stringify(gg))
    localStorage.setItem('id', JSON.stringify(listOfid))
    save()
}
function save() {
    listOfid.forEach((element, idx) => {
        num = localStorage.getItem('n')
        console.log(element.top);
        data = {
            top: element.top,
            left: element.left
        }
        if (data.top == undefined ) {
            top = 0
        } else if (data.left == undefined) {
            left = 0
        }
        console.log(data);
        objs.push(data)
        localStorage.removeItem('objs')
        localStorage.setItem('objs', JSON.stringify(objs))
    });
    console.log(listOfid[0].left);
}

// setInterval(
//     () => {
//         // canvas.on('mouse:down', function (options) {
//         //     if (options.target) {
//         //         console.log(options.target.type.get('width'));
//         //         id('wPX').innerHTML = options.target.type.get('width')
//         //         id('lPX').innerHTML = Math.trunc(options.target.type.left) + 'px'
//         //         id('tPX').innerHTML = Math.trunc(options.target.type.top) + 'px'
//         //     }
//         //
//     }
// )