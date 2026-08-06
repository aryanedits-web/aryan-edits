/* ===========================
ARYAN EDITS PREMIUM SCRIPT
=========================== */

// Loader

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

loader.style.visibility = "hidden";

loader.style.transition = "0.6s";

});

// Sticky Navbar

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.background = "rgba(0,0,0,.92)";

header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

}else{

header.style.background = "rgba(0,0,0,.55)";

header.style.boxShadow = "none";

}

});

// Scroll Reveal Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

document.querySelectorAll(".service-box,.gallery img,.about-container,.contact-box").forEach((el)=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition=".8s";

observer.observe(el);

});

// Portfolio Image Popup

document.querySelectorAll(".gallery img").forEach((img)=>{

img.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.style.position="fixed";

popup.style.top="0";

popup.style.left="0";

popup.style.width="100%";

popup.style.height="100%";

popup.style.background="rgba(0,0,0,.9)";

popup.style.display="flex";

popup.style.justifyContent="center";

popup.style.alignItems="center";

popup.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="15px";

popup.appendChild(image);

popup.onclick=()=>popup.remove();

document.body.appendChild(popup);

});

});

// Smooth Active Menu

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// Console Message

console.log("Aryan Edits Website Loaded Successfully 🚀");
