document.addEventListener('DOMContentLoaded', function() {
  // Toggle Switch Handling
  const toggleSwitch = document.querySelector('#checkbox');
  const currentTheme = localStorage.getItem('theme');

  // Apply the saved theme on load
  if (currentTheme) {
    document.body.classList.add(currentTheme);

    if (currentTheme === 'light-mode') {
      toggleSwitch.checked = true;
    }
  }

  // Add event listener to toggle switch
  toggleSwitch.addEventListener('change', function() {
    if (toggleSwitch.checked) {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light-mode');
    } else {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark-mode');
    }
  });
});

// Clock and Animation Code
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

// Initialize words and set the first word to visible
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}
words[currentWord].style.opacity = 1;

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord === words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];

  // Animate out the current word
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  // Ensure new word is visible and animate in
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  // Move to the next word
  currentWord = (currentWord === words.length - 1) ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i * 80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter in';
  }, 340 + (i * 80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];

  // Create a span for each letter including spaces
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

// Initial call to set up and start animation
changeWord();
setInterval(changeWord, 4000);

// Clock Update Function
function updateClock() {
  const now = new Date();
  
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  
  const hourTens = Math.floor(hours / 10);
  const hourOnes = hours % 10;
  const minuteTens = Math.floor(minutes / 10);
  const minuteOnes = minutes % 10;
  const secondTens = Math.floor(seconds / 10);
  const secondOnes = seconds % 10;

  // Update the clock display
  document.querySelector('.hours').textContent = hourTens;
  document.querySelector('.hours').textContent += hourOnes;
  document.querySelector('.minutes').textContent = minuteTens;
  document.querySelector('.minutes').textContent += minuteOnes;
  document.querySelector('.seconds').textContent = secondTens;
  document.querySelector('.seconds').textContent += secondOnes;
  document.querySelector('.am-pm').textContent = ampm;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to display clock immediately
