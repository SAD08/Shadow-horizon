const archiveToggle = document.querySelector('.archive-toggle');
const archivePanel = document.querySelector('.archive-panel');

archiveToggle.addEventListener('click', () => {
  archivePanel.classList.toggle('active');
});

const libraryToggle = document.querySelector('.library-toggle');
const libraryPanel = document.querySelector('.library-panel');

libraryToggle.addEventListener('click', () => {
  libraryPanel.classList.toggle('active');
});