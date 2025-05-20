var a=[10,20,30,40,50]
for(var b in a)
{
    console.log(b)
}
for(var key of a)
    {
    console.log(key[0])
}
var obj={name:"saran",deg:"bsc"}
for(var key in obj)
{
    console.log(key)
     console.log(obj[key])
}
function saybye(){
    console.log("bye")
}
function demo(name,callback){
    console.log("hello "+name)
}
demo("saran",saybye)

const btn=document.getElementById("btn1")
btn.onclick = function(){
    window.open("https://www.youtube.com")
    alert("youtube opened")
}
var btn1=document.querySelector(".btn2")
btn1.onclick = function(){
    btn1.textContent="opened"
    window.open("https://www.instagram.com")
}