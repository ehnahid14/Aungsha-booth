/* ============================================
   MOBILE MENU TOGGLE
   ============================================ */
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose = document.getElementById('menuClose');

function openMenu() {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

if (menuToggle) menuToggle.addEventListener('click', openMenu);
if (menuClose) menuClose.addEventListener('click', closeMenu);

mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) closeMenu();
});

document.querySelectorAll('[data-close]').forEach(a => {
  a.addEventListener('click', closeMenu);
});

/* ============================================
   GOOGLE DRIVE FOLDER LINKS
   ============================================ */
const driveFolders = {
  1: "https://drive.google.com/drive/folders/1mQjBHivLS1-EJ6JOSAsIypqrMUDl_09C?usp=sharing",
  2: "https://drive.google.com/drive/folders/1WpHQFUJZAjxawiHE0D920-GVYIUA_w7H?usp=sharing",
  3: "https://drive.google.com/drive/folders/10agRYG3sAAAmM5G8N_kkz1nSXegUDkAX?usp=drive_link"
};

document.querySelectorAll('.drive-link').forEach(a => {
  const day = a.dataset.day;
  const url = driveFolders[day];
  if (url) a.href = url;
  a.addEventListener('click', e => {
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