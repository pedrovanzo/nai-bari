function saveAndRedirect(email, number) {
    console.log('saving and redirecting...')
    console.log(new Date().getTime())

    var myBlob = new Blob(["CONTENT"], { type: 'text/plain' });
    var data = new FormData();
    data.append("upfile", myBlob);
    var xhr = new XMLHttpRequest();
    // xhr.open("POST", "https://www.desafiobarivilhosa.com.br/js/data.js");
    xhr.open("POST", "https://pedrovanzo.github.io/nai-bari");
    xhr.send(data);

    // let content = 'test-01';

    // let blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    // saveAs(blob, "dynamic.txt")

    // save text file with email and number. file name is current data stamp
    // window.location.href = "https://mpago.la/2mk841Y";



    // MAKE PROJECT ON NODE, IMPLEMENT FS, UPLOAD TO FIREBASE HOSTING, CHANGE DOMAIN

}