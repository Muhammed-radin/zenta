function saveFile(){
    sc = localStorage.getItem('focus')
    console.log(sc,eval(sc+'.text'))
    file.setText(sc,editor.getValue())
    vl = JSON.parse(localStorage.getItem('files')).indexOf(sc)
    fileTxt[vl] = editor.getValue();
    console.log(fileTxt)
    saveText()
}