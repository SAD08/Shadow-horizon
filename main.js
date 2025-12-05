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

const LojesToggle = document.querySelector('.Lojes-toggle');
const LojesPanel = document.querySelector('.Lojes-panel');

LojesToggle.addEventListener('click', () => {
  LojesPanel.classList.toggle('active');
});

const nastrToggle = document.querySelector('.nastr-toggle');
const nastrPanel = document.querySelector('.nastr-panel');

nastrToggle.addEventListener('click', () => {
  nastrPanel.classList.toggle('active');
});


document.querySelector('.pochta-toggle').onclick = () => {
  document.getElementById('pochta-panel').classList.toggle('active');
};

