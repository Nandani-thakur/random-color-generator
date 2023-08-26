const getcolor =function color(){
    const random=Math.floor(Math.random()*16777215);
    const randomcode="#"+random.toString(16);
    document.getElementById("colorcode").textContent=randomcode;
    document.body.style.backgroundColor=randomcode;
    //copy that text/color
    navigator.clipboard.writeText(randomcode);
}
// event call
document.getElementById("btn").addEventListener("click",getcolor);
//initial call
getcolor();