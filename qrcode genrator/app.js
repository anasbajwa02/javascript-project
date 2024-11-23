
function genrateCode(){
    const input = document.getElementById("input").value
    const qrCode = document.getElementById("qr-code")
    const btn = document.getElementById("btn")
    const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`
    qrCode.src = URL;
}