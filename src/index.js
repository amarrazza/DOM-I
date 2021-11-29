const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};

console.log('project wired!')

const links = document.querySelectorAll('nav a');
const linksRealArray = Array.from(links);
const linkTexts = Object.values(siteContent.nav);
links.forEach((link, idx) => {
  link.textContent = linkTexts[idx];
  link.className = 'italic';
});

const headerimg = document.querySelector('#logo-img');
headerimg.src = siteContent['images']['logo-img'];

const topName = document.querySelector('.cta-text h1');
topName.textContent = siteContent['cta']['h1'];

const topButton = document.querySelector('.cta-text button');
topButton.textContent = siteContent.cta.button;

const ctaimg = document.querySelector('#cta-img');
ctaimg.src = siteContent['images']['cta-img'];

const contentText = document.querySelectorAll('.text-content h4');

contentText[0].textContent = siteContent['main-content']['features-h4'];
contentText[1].textContent = siteContent['main-content']['about-h4'];
contentText[2].textContent = siteContent['main-content']['services-h4'];
contentText[3].textContent = siteContent['main-content']['product-h4'];
contentText[4].textContent = siteContent['main-content']['vision-h4'];

const contentTexts = document.querySelectorAll('.text-content p')
contentTexts[0].textContent = siteContent['main-content']['features-content'];
contentTexts[1].textContent = siteContent['main-content']['about-content'];
contentTexts[2].textContent = siteContent['main-content']['services-content'];
contentTexts[3].textContent = siteContent['main-content']['product-content'];
contentTexts[4].textContent = siteContent['main-content']['vision-content'];



