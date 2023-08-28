//email-contact form================================//
//variable for contact form========================//
// const email_user = document.getElementById('email').value;
// const user_name = document.getElementById('name').value;
// const text_area = document.getElementById('textarea').value;
const submit_btn = document.getElementById('submit')

// submit_btn.addEventListener('click',()=>{
//   // submit()
// })


submit_btn.addEventListener('click',()=>{
  var params = {
    username: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("textarea").value,
  };

  const serviceID = "service_wjkztfh";
  const templateID = "template_2eyavcc";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("textarea").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

})

// const submit = ()=>{
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "praveencattie@gmail.com",
//     Password : "9880C1D98194315E53C823C84DD5CCE0E377 ",
//     To : 'praveencattie223@gmail.com',
//     From :"praveencattie@gmail.com",
//     Subject : "NAME : "+user_name+"E-mail id : "+email_user,
//     Body : text_area
//   }).then(
//   message => console.log(message)
//   );
// ///9880C1D98194315E53C823C84DD5CCE0E377     ////785522C16BB1FE845EBEAA3D458D23BFFDE9FACD20417A3E82CC15BA03010B841E1CDAAA435AB76693C4F0464F5FAF5A
// }




//================== objects for img link =================//

const link_pro = {
  "college":{
    "first":"./res/screenshot/college/collge-main.png",
    "second":"./res/screenshot/college/1.png",
    "third":"./res/screenshot/college/3.png",
    "four":"./res/screenshot/college/4.png"
  },
  "shoping-cart":{
    "first":"./res/screenshot/shop/pro3-1.png",
    "second":"./res/screenshot/shop/pro-3-2.png",
    "third":"./res/screenshot/shop/pro-3-3.png",
    "four":"./res/screenshot/shop/pro-3-4.png"
  },
  "watch":{
    "first":"./res/screenshot/watch/pro1-1.png",
    "second":"./res/screenshot/watch/pro1-2.png",
    "third":"./res/screenshot/watch/pro1-3.png",
    "four":"./res/screenshot/watch/pro1-4.png"

  },
  "bill":{
    "first":"./res/screenshot/bill/bill-1.png",
    "second":"./res/screenshot/bill/bill-2.png",
    "third":"./res/screenshot/bill/bill-3.png"

  }
}

console.log(link_pro.college.first)





//==========MOBILE NAVBAR AND MENU ==================//

//variable for DOM ===============================//
const navbar = document.getElementById('navbar');
console.log(navbar);
const menu_btn = document.getElementById('menu_logo');
console.log(menu_btn);
const menu_item = document.getElementById('menu_items');

const cancel_btn = document.getElementById('cancel_btn');
console.log(cancel_btn)

//btn function for menu_btn...=======//

menu_btn.addEventListener('click',()=>{
    navbar.style.width="100%";
    navbar.style.transition="2s"
    menu_btn.style.display="none"
    menu_item.style.left="0rem"
    // menu_item.style.display="grid";
    menu_item.style.transition="1s"
    cancel_btn.style.display="block";
    // cancel btn function ==============//
    cancel_btn.addEventListener('click',()=>{
        if(navbar.style.width === "100%"){
            navbar.style.width="0";
            menu_item.style.left="-10rem";
            cancel_btn.style.display="none";
            menu_btn.style.display="block"
        }
    })
})

//for menu items link and function to that element ========///
const skill_btn = document.getElementById('skill-btn');
const pro_btn = document.querySelector('#pro');
const my_shot = document.querySelector('#my-shot');
const about_praveen = document.querySelector('#about-praveen');
const con_act = document.querySelector('#con-act');


//function for skill_btn--==========//

skill_btn.addEventListener('click',()=>{
     close_nav()
})
pro_btn.addEventListener('click',()=>{
  close_nav()
})
my_shot.addEventListener('click',()=>{
  close_nav()
})
about_praveen.addEventListener('click',()=>{
  close_nav()
})
con_act.addEventListener('click',()=>{
  close_nav()
})

const close_nav = ()=>{
  if(navbar.style.width === "100%"){
    navbar.style.width="0";
    menu_item.style.left="-10rem";
    cancel_btn.style.display="none";
    menu_btn.style.display="block";
  
  
  
  }

}







// typewritering function =======================//

const typedTextSpan = document.querySelector(".type");
//const cursorSpan = document.querySelector(".cursor");

const textArray = ["WEB DEVELOPER", "WEB DESIGNER", "FRONT END-DEVELOPER", "PHOTOGRAPHER"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
   // if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
    typedTextSpan.style.color="red";
  }
  else {
   // cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
   // if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    //cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});




// project con active ==================================//

const read = document.getElementById('fuck');
const pro_con = document.querySelector('#project-con-main');
const project_con = document.querySelector('.pro-main-con');
const body = document.querySelector('body');
const bg = document.querySelector('.bg');
const project = document.querySelector('.projects');
// close btn for projects con =========================//
const close_btn_pro = document.querySelector('#close_btn');

console.log(close_btn_pro)

const heights = window.innerHeight;



var flag = false;
read.addEventListener('click',()=>{
  remove_event(link_pro.watch.first,link_pro.watch.second,link_pro.watch.third,link_pro.watch.four,flag)
})


const close_con = ()=>{
 
    project_con.style.display="none";
    project_con.style.transition="5s"
    pro_con.style.opacity="1"
    bg.style.display="none";


  }




//mail intro of owner ==================================//


const mail_img = document.querySelector('.mail-intro');

//console.log(mail_img);

// var mail_flag = true;

// mail_img.addEventListener('click',()=>{
//   const mail = document.querySelector('.about-person');

//   //console.log(mail)//
//   if(mail_flag === true){
//     mail.style.position="relative";
//     mail.style.bottom="0rem";
//     mail_flag = false;

//   }else{
//     mail.style.bottom="10rem";
//     mail_flag = true;
//   }



// })

// function reload the page //

const reloader=()=>{
  return window.location.reload();
}


skill_btn.addEventListener('click',()=>{

  setTimeout(reloader,600)

})


// creating the con and inserting that to html ============//
// const read = document.getElementById('fuck');
// const pro_con = document.querySelector('#project-con-main');
// const project_con = document.querySelector('.pro-main-con');
// const body = document.querySelector('body');
// const bg = document.querySelector('.bg');
// const project = document.querySelector('.projects');
// // close btn for projects con =========================//
// const close_btn_pro = document.querySelector('#close_btn');
// variable for btn of projects inside th html page ===============//
const second_pro_btn = document.querySelector('#pro_btn2')
const pro_img1 = document.createElement('img');
const pro_img2 = document.createElement('img');
const pro_img3 = document.createElement('img');
const pro_img4 = document.createElement('img');
const img_div = document.querySelector('.img-pro')



var btn2 = false
second_pro_btn.addEventListener('click',()=>{
  // console.log("hi buddy")
    pro_img1.src=link_pro.college.first;
    pro_img2.src=link_pro.college.second;
    pro_img3.src=link_pro.college.third;
    pro_img4.src=link_pro.college.four;
    img_div.appendChild(pro_img1);
    img_div.appendChild(pro_img2);
    img_div.appendChild(pro_img3);
    img_div.appendChild(pro_img4);
    if(btn2 === false){
      project_con.style.display="block";
      project_con.style.transition="5s"
      pro_con.style.opacity="0.1"
      btn2 = true;
      bg.style.display="block";

    }

    bg.addEventListener('click',()=>{
      if(btn2 === true){
        project_con.style.display="none";
        project_con.style.transition="5s"
        pro_con.style.opacity="1"
        btn2 = false;
        bg.style.display="none";
    
    
      }

    })
    close_btn_pro.addEventListener('click',()=>{
      // console.log("fuck you")
      if(btn2 === true){
        close_con()
        btn2 = false;
      }
     
     })  
  
})




const remove_event = (a,b,c,d,check)=>{
  // console.log("hi buddy")
    pro_img1.src=a;
    pro_img2.src=b;
    pro_img3.src=c;
    pro_img4.src=d;
    img_div.appendChild(pro_img1);
    img_div.appendChild(pro_img2);
    img_div.appendChild(pro_img3);
    img_div.appendChild(pro_img4);
    if(check === false){
      project_con.style.display="block";
      project_con.style.transition="5s"
      pro_con.style.opacity="0.1"
      check = true;
      bg.style.display="block";

    }

    bg.addEventListener('click',()=>{
      if(check === true){
        project_con.style.display="none";
        project_con.style.transition="5s"
        pro_con.style.opacity="1"
        btn2 = false;
        bg.style.display="none";
    
    
      }

    })
    close_btn_pro.addEventListener('click',()=>{
      // console.log("fuck you")
      if(check === true){
        close_con()
        check = false;
      }
     
     })  
  
}



const third_btn_con = document.querySelector('#pro_btn3');
var btn3 = false

third_btn_con.addEventListener('click',()=>{
  remove_event(link_pro["shoping-cart"].first,link_pro["shoping-cart"].second,link_pro["shoping-cart"].third,link_pro["shoping-cart"].four,btn3)
})
//fourth btn for con of pro============================//



const four_btn_con = document.querySelector('#pro_btn4');
console.log(four_btn_con)

var btn4 = false;

four_btn_con.addEventListener('click',()=>{
  remove_event(link_pro.bill.first,link_pro.bill.second,link_pro.bill.third,link_pro.bill.four,btn4)
})


//for about circle effects for mobile version ///

const about_con = document.querySelector('#about-con');
//console.log(about_con)
const about_img = document.querySelector('.about-img');
const blackscreen = document.querySelector('.blackscreen-2');
const about_close = document.querySelector('.about-close');
const about_main = document.querySelector('.about-main');
const about_main_check = document.querySelector('.about');
console.log(about_main_check)
console.log(about_close)

var x = window.matchMedia("(max-width:480px)");
var big_mobile = window.matchMedia("(max-width:500px)");

console.log(x.matches)
console.log(big_mobile.matches)



var flag_about = false;
about_con.addEventListener('click',()=>{


  if(flag_about === false){
    if(big_mobile.matches){
      about_con.style.width="25rem"
      about_con.style.height= "35rem"
      about_con.style.borderRadius = "20px"
      about_con.style.animation="none"
      about_con.style.backgroundColor = "white"
      about_img.style.display="block"
      blackscreen.style.display="block"
      about_main.style.display="block"
      about_con.style.position="absolute"
      about_con.style.left="2.5rem"
      flag_about = true

    }
    
  if(x.matches){
    about_con.style.width="20rem"
    about_con.style.height= "30rem"
    about_con.style.borderRadius = "20px"
    about_con.style.animation="none"
    about_con.style.backgroundColor = "white"
    about_img.style.display="block"
    blackscreen.style.display="block"
    about_main.style.display="block"
    about_con.style.position="absolute"
    about_con.style.left="1.5rem"
    flag_about = true

  }
  
  
     

    
   

    //coditions change in falg to true=====

   
  }
  


  blackscreen.addEventListener('click',()=>{
    if(flag_about === true){
      if(x.matches){
        about_con.style.width="10rem"
        about_con.style.height= "10rem"
        about_con.style.borderRadius = "50%"
        about_con.style.animation="spinner 1s linear infinite"
        about_con.style.backgroundColor = "black"
        about_img.style.display="none"
        blackscreen.style.display="none"
        about_main.style.display="none"
        about_con.style.left="7rem"
        window.location.reload()

      }
      
      if(big_mobile.matches){
        about_con.style.width="10rem"
        about_con.style.height= "10rem"
        about_con.style.borderRadius = "50%"
        about_con.style.animation="spinner 1s linear infinite"
        about_con.style.backgroundColor = "black"
        about_img.style.display="none"
        blackscreen.style.display="none"
        about_main.style.display="none"
        about_con.style.left="10rem"

      }
        
       
         //coditions change in falg to true=====
    
         flag_about = false
        
      
    }

 
    
  })

})

