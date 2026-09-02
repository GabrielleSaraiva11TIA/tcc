document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerClose = document.getElementById('drawerClose');

  if (menuBtn && drawerOverlay) {
    menuBtn.addEventListener('click', () => {
      drawerOverlay.classList.add('open');
    });
  }
  if (drawerClose && drawerOverlay) {
    drawerClose.addEventListener('click', () => {
      drawerOverlay.classList.remove('open');
    });
  }
  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', (event) => {
      if (event.target === drawerOverlay) {
        drawerOverlay.classList.remove('open');
      }
    });
  }
});