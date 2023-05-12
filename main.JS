var texto= window.webkitSpeechRecognition
var voz= new texto()
var caja= document.getElementById("areatext")
function clickon(){
    caja.innerHTML=""
    voz.start()
}
voz.onresult= function(vooz){
    console.log(vooz)
    var contenido= vooz.results[0][0].transcript
    caja.innerHTML= contenido
    console.log(contenido)
    if(contenido=="whisky"){
        console.log ("tomando la selfie")
        hablador()
    }
    
}
function hablador(){
    var zov= window.speechSynthesis
    var ia= "5, 4, 3, 2, 1 y selfie tomada"
    var reconocer= new SpeechSynthesisUtterance(ia)
    Webcam.attach("#vid")
    zov.speak(reconocer)
    setTimeout(function(){
        clickon2()
        guardar()
    },5000)

}
var cam= document.getElementById("vid")
Webcam.set({
    width: 300, height: 250, image_format: "png", png_quality: 90
})
function clickon2(){
    Webcam.snap(function(data){
        document.getElementById("vid2").innerHTML='<img id= "img2" src= "'+data+'">'
    })
}
function guardar(){
    var leer= document.getElementById("di")
    var foto= document.getElementById("img2").src 
    leer.href= foto
    leer.click()
}