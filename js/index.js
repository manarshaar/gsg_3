const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here
const navContent = document.querySelectorAll("a");
let k = 0; let st;
navContent.forEach(function(item){
  st = "nav-item-"+k;
  item.textContent = siteContent.nav[st];
  item.style.color = 'green'; //changing color of text to green
  k++;
});

document.getElementById("logo-img").src = siteContent.nav["img-src"];

document.querySelector('.cta-text > h1').textContent = siteContent.cta.h1;
document.querySelector('.cta-text > button').textContent = siteContent.cta.button;
document.getElementById("cta-img").src = siteContent.cta["img-src"];

let top_h = document.querySelectorAll('.top-content .text-content > h4');
let top_p = document.querySelectorAll('.top-content .text-content > p');
top_h[0].textContent = siteContent["main-content"]["features-h4"];
top_p[0].textContent = siteContent["main-content"]["features-content"];
top_h[1].textContent = siteContent["main-content"]["about-h4"];
top_p[1].textContent = siteContent["main-content"]["about-content"];

document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];

let bottom_h = document.querySelectorAll('.bottom-content .text-content > h4');
let bottom_p = document.querySelectorAll('.bottom-content .text-content > p');
bottom_h[0].textContent = siteContent["main-content"]["services-h4"];
bottom_p[0].textContent = siteContent["main-content"]["services-content"];
bottom_h[1].textContent = siteContent["main-content"]["product-h4"];
bottom_p[1].textContent = siteContent["main-content"]["product-content"];
bottom_h[2].textContent = siteContent["main-content"]["vision-h4"];
bottom_p[2].textContent = siteContent["main-content"]["vision-content"];

document.querySelector('.contact > h4').textContent = siteContent.contact["contact-h4"];
let contact_p = document.querySelectorAll('.contact > p');
contact_p[0].textContent = siteContent.contact.address;
contact_p[1].textContent = siteContent.contact.phone;
contact_p[2].textContent = siteContent.contact.email;

document.querySelector('footer > p').textContent = siteContent.footer.copyright;

//adding two items to the nav bar
let para = document.createElement("a");
let node = document.createTextNode("New1");
para.appendChild(node);
para.style.color = 'green';
let nav_items = document.querySelector("nav");
nav_items.appendChild(para);

let paraa = document.createElement("a");
let nodee = document.createTextNode("New2");
paraa.appendChild(nodee);
paraa.style.color = 'green';
nav_items.appendChild(paraa);

//Stretch goals
let button = document.querySelector('.cta-text > button');
button.addEventListener("click",function(){
  button.style.color = 'pink';
});
