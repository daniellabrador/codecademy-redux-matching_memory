// Mobile Menu -----------------------------------------------------------------
const mobileNav = document.getElementById('mobile-nav');

const mobileMenuOpen = document.getElementById('mobile-menu-open');
mobileMenuOpen.addEventListener('click', function(){
    mobileNav.style.right = 0;
});

const mobileMenuClose = document.getElementById('mobile-menu-close');
mobileMenuClose.addEventListener('click', function(){
    mobileNav.style.right = '-100%';
});

// Close mobile menu when click link
const mobileLinks = document.getElementsByClassName('mobile-link');
for (let i=0; i<mobileLinks.length; ++i){
    mobileLinks[i].addEventListener('click', function(){
        mobileNav.style.right = '-100%';
    });
}


// Interactive Navigation Bar On Scroll ----------------------------------------
const navBar = document.getElementById('nav-bar');
const clearNavBar = document.getElementsByClassName('clear-nav-bar')[0];
const mainLogo = document.getElementById('main-logo');

const queryMin450 = window.matchMedia("(min-width: 450px)");

function scrollFunctionDesktop() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navBar.style.height = "3.5em";
    clearNavBar.style.backgroundColor = 'rgba(51,51,51,1)';
    mainLogo.style.height = "0.75em";

  } else {
    navBar.style.height = "4em";
    clearNavBar.style.backgroundColor = 'rgba(51,51,51,0)';
    mainLogo.style.height = "1em";
  }
}

function scrollFunctionMobile(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navBar.style.height = "2.75em";
    clearNavBar.style.backgroundColor = 'rgba(51,51,51,1)';
    mainLogo.style.height = "0.55em";

  } else {
    navBar.style.height = "3.125em";
    clearNavBar.style.backgroundColor = 'rgba(51,51,51,0)';
    mainLogo.style.height = ".625em";
  }
}

function scrollFunction(query){
  if (query.matches){
    scrollFunctionDesktop();
  } else {
    scrollFunctionMobile();
  }
}

window.addEventListener('scroll', ()=>{scrollFunction(queryMin450)});