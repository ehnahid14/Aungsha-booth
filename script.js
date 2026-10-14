/* ============================================
   MOBILE MENU — FIXED
   ============================================ */
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose = document.getElementById('menuClose');

let savedScrollY = 0;

function openMenu() {
  savedScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
  mobileMenu.classList.add('open');
  document.body.classList.add('menu-open');
  document.body.style.top = '-' + savedScrollY + 'px';
  document.documentElement.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.remove('open');
  document.body.classList.remove('menu-open');
  document.body.style.top = '';
  document.documentElement.style.overflow = '';
  window.scrollTo(0, savedScrollY);
}

if (menuToggle) {
  menuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    openMenu();
  });
}

if (menuClose) {
  menuClose.addEventListener('click', function(e) {
    e.preventDefault();
    closeMenu();
  });
}

if (mobileMenu) {
  mobileMenu.addEventListener('click', function(e) {
    if (e.target === mobileMenu) closeMenu();
  });
}

document.querySelectorAll('[data-close]').forEach(function(a) {
  a.addEventListener('click', function() {
    closeMenu();
  });
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    closeMenu();
  }
});

/* ============================================
   GOOGLE DRIVE FOLDER LINKS
   ============================================ */
const driveFolders = {
  1: "https://drive.google.com/drive/folders/1mQjBHivLS1-EJ6JOSAsIypqrMUDl_09C?usp=sharing",
  2: "https://drive.google.com/drive/folders/1WpHQFUJZAjxawiHE0D920-GVYIUA_w7H?usp=sharing",
  3: "https://drive.google.com/drive/folders/10agRYG3sAAAmM5G8N_kkz1nSXegUDkAX?usp=drive_link"
};

document.querySelectorAll('.drive-link').forEach(function(a) {
  const day = a.dataset.day;
  const url = driveFolders[day];
  if (url) a.href = url;
  a.addEventListener('click', function(e) {
    if (!url) {
      e.preventDefault();
      alert('প্রথমে কোডের driveFolders অংশে Day ' + day + '-এর Google Drive folder link বসান।');
    }
  });
});

/* ============================================
   AUTO YEAR
   ============================================ */
document.getElementById('year').textContent = new Date().getFullYear();
