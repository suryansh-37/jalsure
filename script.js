document.addEventListener('DOMContentLoaded', function () {
    // Count-up animation for sensor statistics
    const sensorsElement = document.getElementById('sensorsCount');
    const dirtyElement = document.getElementById('dirtyCount');
    
    let sensorsValue = 0, dirtyValue = 0;
    const targetSensors = 50; // Total sensors deployed
    const targetDirty = 7;    // Total dirty water detections
    const duration = 2000;    // Animation duration in ms
    
    function countUp(element, start, target, duration) {
      const stepTime = 50; // update every 50ms
      const step = (target - start) / (duration / stepTime);
      const counter = setInterval(() => {
        start += step;
        if (start >= target) {
          element.textContent = target;
          clearInterval(counter);
        } else {
          element.textContent = Math.floor(start);
        }
      }, stepTime);
    }
    
    countUp(sensorsElement, sensorsValue, targetSensors, duration);
    countUp(dirtyElement, dirtyValue, targetDirty, duration);
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu');
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
  });
  