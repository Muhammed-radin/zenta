var editor = ace.edit("editor");

var fileNames = []
var fileForm = []
var fileTxt = []

if (JSON.parse(localStorage.getItem('filesform')) == null || JSON.parse(localStorage.getItem('filesform')) == undefined) {
    setTimeout(function () {
        file.createFile({ name: 'untitled', format: 'js', text: '' })
        document.getElementById('untitled').click()
    }, 3000
    )
} else {
    start4321()
    fileNames = JSON.parse(localStorage.getItem('files'))
    fileForm = JSON.parse(localStorage.getItem('filesform'));
    fileTxt = JSON.parse(localStorage.getItem('filestxt'))
}

var file = {
    name: 'undefined',
    format: '.js',
    text: ' ',
    createFile: function (obj) {
        this.name = obj.name;
        this.format = obj.format;
        this.text = obj.text;
        fileNames.push(obj.name)
        fileForm.push(obj.format)
        fileTxt.push(obj.text)
        console.log(fileNames, fileForm, fileTxt)
        document.getElementById('fileDiv').innerHTML += '<button class="w-full" id="' + obj.name + '"> 📝 ' + obj.name + '.' + obj.format + '</button>';
        eval(this.name + " =  { name: '" + obj.name + "' , format : '" + obj.format + "', text: `" + obj.text + "`}")
        fileNames.forEach(
            function (value, index) {
                document.getElementById(value).onclick = function () {
                    vl = value + '.text'
                    a = eval(vl)
                    editor.setValue(a)
                    localStorage.setItem('focus', value)
                    clearFocus()
                    focus()
                }
            }
        )
        console.log('poin')
        localStorage.setItem('files', JSON.stringify(fileNames))
        localStorage.setItem('filesform', JSON.stringify(fileForm))
        localStorage.setItem('filestxt', JSON.stringify(fileTxt))
    },
    setText: function (name, txt) {
        if (JSON.parse(localStorage.getItem('files')).indexOf(name) == -1) {
            alert('saving failed..!')
        } else {
            nm = JSON.parse(localStorage.getItem('files')).indexOf(name)
            eval(JSON.parse(localStorage.getItem('files'))[nm] + '.text = ' + '`' + txt + '`')
        }
    },
    getText: function (name) {
        if (JSON.parse(localStorage.getItem('files')).indexOf(name) == -1) {
            alert('open failed..!')
        } else {
            nm = JSON.parse(localStorage.getItem('files')).indexOf(name)
            eval('editor.setValue(' + JSON.parse(localStorage.getItem('files'))[nm] + '.text)')
        }
    },
    // clearText: function () {

    // },
    // saveText: function () {
    //         }
}
function clearText() {
    localStorage.setItem('files', '')
    localStorage.setItem('filesform', '')
    localStorage.setItem('filestxt', '')
    console.log('poin#1')
}
function saveText() {
    console.log('point#2')
    localStorage.setItem('files', JSON.stringify(fileNames))
    localStorage.setItem('filesform', JSON.stringify(fileForm))
    localStorage.setItem('filestxt', JSON.stringify(fileTxt))
}
function start4321() {
    JSON.parse(localStorage.getItem('files')).forEach(
        function (value, index) {
            // fileNames.push(value)
            // fileForm.push(JSON.parse(localStorage.getItem('filesform'))[index])
            // fileTxt.push(JSON.parse(localStorage.getItem('filestxt'))[index])
            // eval(value + " =  { name: '" + value + "' , format : '" + JSON.parse(localStorage.getItem('filesform'))[index] + "', text: '" + JSON.parse(localStorage.getItem('filestxt'))[index] + "'}")
            document.getElementById('fileDiv').innerHTML += '<button class="w-full" id="' + value + '"> 📝 ' + value + '.' + JSON.parse(localStorage.getItem('filesform'))[index] + '</button>';
            eval(value + " =  { name: '" + value + "' , format : '" + JSON.parse(localStorage.getItem('filesform'))[index] + "', text: `" + JSON.parse(localStorage.getItem('filestxt'))[index] + "`}")
            // fileForm.splice(0,fileForm.length)
            // fileTxt.splice(0,fileTxt.length)
            console.log(fileNames, fileForm, fileTxt)
            // fileForm.push(JSON.parse(localStorage.getItem('filesform'))[index])
            // fileTxt.push(JSON.parse(localStorage.getItem('filestxt'))[index])
        }
    )
}
// var test = new file.createFile({ name: 'test', format: 'js', text: 'cool' })
// var dh = new file.createFile({ name: 'dfgb', format: 'js', text: 'dsgds' })

fileNames.forEach(
    function (value, index) {
        document.getElementById(value).onclick = function () {
            vl = value + '.text'
            a = eval(vl)
            editor.setValue(a)
            localStorage.setItem('focus', value)
            clearFocus()
            focus()
        };
    }
)


focus()
function focus() {
    document.getElementById(localStorage.getItem('focus')).style.background = 'var(--color)';
    document.getElementById(localStorage.getItem('focus')).style.color = 'var(--bg-color1)';
    file.getText(localStorage.getItem('focus'))
}
function setFocus(text) {
    localStorage.setItem('focus', text)
}
function clearFocus() {
    for (i = 0; i < JSON.parse(localStorage.getItem('files')).length; i++) {
        document.getElementById(JSON.parse(localStorage.getItem('files'))[i]).style.background = 'var(--bg-color)';
        document.getElementById(JSON.parse(localStorage.getItem('files'))[i]).style.color = 'var(--color)';
        console.log(i)
    }
}