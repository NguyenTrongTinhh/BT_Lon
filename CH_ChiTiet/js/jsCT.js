
//product//
const anhlon = document.querySelector(".left-imgleft img")
const anhnho = document.querySelectorAll(".left-imgright img")
anhnho.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        anhlon.src = imgItem.src
    })
})


const nut = document.querySelector(".bottom-top")
const mota = document.querySelector(".MT")
const doitra = document.querySelector(".DT")
const giaohang = document.querySelector(".GH")
if(nut){
    nut.addEventListener("click",function(){
        document.querySelector(".bottom-center").classList.toggle("nut")
       
    })
}
if(mota){
    mota.addEventListener("click",function(){
        document.querySelector(".content-MT").style.display = "block"
        document.querySelector(".content-DT").style.display = "none"
        document.querySelector(".content-GH").style.display = "none"
    })
}
if(doitra){
    doitra.addEventListener("click",function(){
        document.querySelector(".content-MT").style.display = "none"
        document.querySelector(".content-DT").style.display = "block"
        document.querySelector(".content-GH").style.display = "none"
    })
}
if(giaohang){
    giaohang.addEventListener("click",function(){
        document.querySelector(".content-MT").style.display = "none"
        document.querySelector(".content-DT").style.display = "none"
        document.querySelector(".content-GH").style.display = "block"
    })
}

