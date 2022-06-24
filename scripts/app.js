
function id(id) {
    return document.getElementById(id);
}
window.onload = function (e) {
    id('loading').style.display = 'none'
    id('l2').style.display = 'block'
}


hoverFor('pA', 'p1')

function hoverFor(id_a, id_b) {
    id(id_a).onmouseenter = function (e) {
        id(id_b).style.display = 'block'
    }
    id(id_a).onmouseleave = function (e) {
        id(id_b).style.display = 'none'
    }
    id(id_b).onmouseenter = function (e) {
        id(id_b).style.display = 'block'
    }
    id(id_b).onmouseleave = function (e) {
        id(id_b).style.display = 'none'
    }
}
setInterval(function () {
    window.onerror = function (e) {
        log(e, 'err');
    }
})

function createFile() {
    name = 'file'+Math.floor(Math.random() * 999)
    format = 'js'
    hh = 'file'+Math.floor(Math.random() * 999)
    file.createFile({ name: name, format: format, text: hh })
}


if (window.navigator.onLine == true) {
    log('running on online', 'success')
} else {
    log('running on offline', 'warn')
}
window.onmessage = function (e) {
    log(e, 'msg')
}

var mbox = id('mBox')
id('editor').oncontextmenu = function (event) {
    event = event || window.event;

    if (event.stopPropagation)
        event.stopPropagation();
    mbox.style.display = 'block'
    mbox.style.left = event.clientX + 'px'
    mbox.style.top = event.clientY + 'px'
    event.cancelBubble = true;
    return false;
}
function dsFor(id,property){
    document.getElementById(id).style.display = property
}
document.body.onclick = function (e) {
    var isRightMB;
    e = e || window.event;

    if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        isRightMB = e.which == 3;
    else if ("button" in e)  // IE, Opera 
        isRightMB = e.button == 2;
    mbox.style.display = 'none'
}
// window.addEventListener('keypress', function (evt) {
//     if (evt.keyCode == 99){
//         clearLog()
//         this.localStorage.clear()
//         window.location.reload()
//     }
// })

// window.on
var editor = ace.edit("editor");
editor.setTheme("ace/theme/chrome");
editor.session.setMode("ace/mode/javascript");

// enable autocompletion and snippets
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});
var loger = {
    fullscreen: function () {
        // 
    }
}
function log(message, type) {
    if (type == 'message' || type == '' || type == undefined || type == null || type == 'msg') {
        oneTimeId = Math.floor(Math.random() * 99999)
        console.log(message)
        id('console').innerHTML += '<p id=' + oneTimeId + '>> ' + message + '<p>';
        id(oneTimeId).style.color = 'var(--bg-color2)'
    } else if (type == 'red' || type == 'err') {
        oneTimeId = Math.floor(Math.random() * 99999)
        id('console').innerHTML += '<p id=' + oneTimeId + '>> err :' + message + '<p>';
        id(oneTimeId).style.color = 'red'
    } else if (type == 'warn') {
        oneTimeId = Math.floor(Math.random() * 99999)
        console.warn(message)
        id('console').innerHTML += '<p id=' + oneTimeId + '>> warn:' + message + '<p>';
        id(oneTimeId).style.color = 'yellow'
    } else if (type == 'success') {
        oneTimeId = Math.floor(Math.random() * 99999)
        console.info(message)
        id('console').innerHTML += '<p id=' + oneTimeId + '>> ' + message + '<p>';
        id(oneTimeId).style.color = 'green'
    } else if (type == 'text' || type == "txt") {
        oneTimeId = Math.floor(Math.random() * 99999)
        console.log(message)
        id('console').innerHTML += '<p id=' + oneTimeId + '>> ' + message + '<p>';
        id(oneTimeId).style.color = '#6b6b6b';
        id(oneTimeId).style.fontStyle = 'italic'
    } else {
        oneTimeId = Math.floor(Math.random() * 99999)
        console.log(message)
        id('console').innerHTML += '<p id=' + oneTimeId + '>> ' + message + '<p>';
        id(oneTimeId).style.color = '#6b6b6b';
        id(oneTimeId).style.fontStyle = 'italic'
    }
}
function clearLog() {
    oneTimeId = Math.floor(Math.random() * 99999)
    id('console').innerHTML = '<p id=' + oneTimeId + '>> ' + 'console was cleared..!' + '<p>';
    id(oneTimeId).style.color = '#6b6b6b';
    id(oneTimeId).style.fontStyle = 'italic'
    console.clear()
}

var cmd = id('cmd')

cmd.addEventListener('keyup', function (e) {
    if (e.keyCode == 13) {
        cmdSumbit()
    }
})
var jjdj1190786 = 1
setInterval(function () {
    id('console').scrollTo(0, jjdj1190786 += 100)
}, 100)

function run() {
    val = editor.getValue()
    return eval(val)
}
var snippetManager = ace.require("ace/snippets").snippetManager;

function cmdSumbit() {
    try {
        cmd.value
    } catch (error) {
        log(error, 'err')
    }
    if (cmd.value == 'start') {
        log('starting...', 'txt')
        name = 'demo'
        log('project creating [' + name + ']', 'success')
    } else if (cmd.value == 'clear') {
        clearLog()
    } else if (cmd.value == 'scp' + cmd.value.slice(3)) {
        log(cmd.value.slice(3), 'txt')
        eval(cmd.value.slice(3))
    } else {
        log('command not found "' + cmd.value + '"', 'err')
    }
}
var cmdA = ['start', 'clear', 'scp']
autocomplete(cmd, cmdA)

setInterval(
    function (){
        localStorage.setItem('editor',JSON.stringify(editor.getValue()))
    },5000
)