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

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// Get the details div elements
const detailsDivs = document.querySelectorAll('.details');

// Get the frame elements
const frameImage = document.getElementById('frameImage');

// Get the expand icon and close icon elements
const expandIcons = document.querySelectorAll('.expandIcon');
const closeIcon = document.getElementById('closeIcon');

// Set the position property to "relative" for the details divs
detailsDivs.forEach((detailsDiv) => {
  detailsDiv.style.position = 'relative';
});

// Add event listener to each expand icon
expandIcons.forEach((expandIcon, index) => {
  expandIcon.addEventListener('click', () => {
    const imageSrc = detailsDivs[index].querySelector('.myImage').src;
    frameImage.src = imageSrc;
    document.getElementById('photoFrame').style.display = 'block';
  });
});

// Add event listener to close icon
closeIcon.addEventListener('click', () => {
  document.getElementById('photoFrame').style.display = 'none';
});


  // Get all filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  // Get all images
  const images = document.querySelectorAll('.image');
  
  // Add click event listener to each filter button
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Get the category value from the data-category attribute
      const category = button.getAttribute('data-category');
  
      // Show all images if the category is "all"
      if (category === 'all') {
        images.forEach((image) => {
          image.style.display = 'block';
        });
      } else {
        // Hide images that don't belong to the selected category
        images.forEach((image) => {
          if (!image.classList.contains(category)) {
            image.style.display = 'none';
          } else {
            image.style.display = 'block';
          }
        });
      }
    });
  });
  