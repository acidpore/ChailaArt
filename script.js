function createParticles() {
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}vw`;
      const duration = 10 + Math.random() * 10;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${-Math.random() * 20}s`;
      document.body.appendChild(particle);
    }
  }
  
  function getRandomLetter() {
    const letters = 'CHAILAART';
    return letters[Math.floor(Math.random() * letters.length)];
  }
  
  function createLetter(x, y) {
    const letter = document.createElement('div');
    letter.className = 'letter';
    letter.textContent = getRandomLetter();
    letter.style.left = `${x}px`;
    letter.style.top = `${y}px`;
    
    const moveX = (Math.random() - 0.5) * 200;
    const moveY = (Math.random() - 0.5) * 200;
    const rotation = (Math.random() - 0.5) * 360;
    
    letter.style.setProperty('--moveX', `${moveX}px`);
    letter.style.setProperty('--moveY', `${moveY}px`);
    letter.style.setProperty('--rotation', `${rotation}deg`);
    
    document.body.appendChild(letter);
    
    setTimeout(() => {
      letter.remove();
    }, 2000);
  }
  
  window.onload = () => {
    createParticles();
    
    const content = document.querySelector('.content');
    
    document.addEventListener('mousemove', (e) => {
      // Check if mouse is outside content area
      const rect = content.getBoundingClientRect();
      const isOutsideContent = !(e.clientX >= rect.left && 
                                e.clientX <= rect.right && 
                                e.clientY >= rect.top && 
                                e.clientY <= rect.bottom);
      
      // Create letters only when mouse is outside content
      if (isOutsideContent && Math.random() < 0.25) {
        createLetter(e.clientX, e.clientY);
      }
    });
  };