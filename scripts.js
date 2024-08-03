document.addEventListener('click', function(e) {
    const droplet = document.createElement('div');
    droplet.classList.add('droplet');

    droplet.style.top = `${e.clientY + window.scrollY}px`;
droplet.style.left = `${e.clientX + window.scrollX}px`;

    droplet.style.backgroundColor = '#008080';

    document.body.appendChild(droplet);

    droplet.addEventListener('animationend', () => {
        droplet.remove();
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const table = document.getElementById('expandable-table');
const toggleText = document.getElementById('toggle-table');

toggleText.addEventListener('click', () => {
  if (table.classList.contains('open')) {
    table.classList.add('closing');
    table.classList.remove('open');
    toggleText.textContent = 'View segment map';
    
    setTimeout(() => {
      table.classList.remove('closing');
    }, 300); 
  } else {
    table.classList.add('open');
    toggleText.textContent = 'Hide segment map';
  }
});