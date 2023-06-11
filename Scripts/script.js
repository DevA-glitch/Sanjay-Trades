function myHeader(){
    let header = document.getElementById("header");
    let lol = document.getElementById("lol");
    window.addEventListener("scroll" , function(){
        if(window.scrollY > 0){
            header.classList.add("active");
            lol.src = "pic/bulb2.png";
        }else{
            header.classList.remove("active");
            lol.src = "pic/bulb.png";
        }
        
    })
}
myHeader();

function myBars(){
    let bars = document.querySelector("#bar");
    let nav = document.querySelector(".navigation");
    bars.onclick = function(){
        if(nav.style.right == "0%"){
            nav.style.right = "-50%";
            bars.src = "./Images/HomeImage/menu.png"
        }else{
            nav.style.right = "0%";
            bars.src = "./Images/HomeImage/close (1).png"
        }
        nav.classList.toggle("new")
    }
    
    
}

myBars()

function myFun(){
    let plus = document.querySelector(".plus");
    let textBox = document.querySelector(".text-box ");
    plus.onclick = ()=>{
        textBox.classList.toggle("active");
        plus.classList.toggle("img_active")
    }
}

