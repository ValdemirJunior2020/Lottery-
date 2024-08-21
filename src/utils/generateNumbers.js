export function generateMegaMillionsNumbers() {
  const numbers = [];
  while (numbers.length < 5) {
    const num = Math.floor(Math.random() * 70) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  const megaBall = Math.floor(Math.random() * 25) + 1;
  return { numbers, megaBall };
}

export function generatePowerballNumbers() {
  const numbers = [];
  while (numbers.length < 5) {
    const num = Math.floor(Math.random() * 69) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  const powerBall = Math.floor(Math.random() * 26) + 1;
  return { numbers, powerBall };
}

export function generateFantasy5Numbers() {
  const numbers = [];
  while (numbers.length < 5) {
    const num = Math.floor(Math.random() * 36) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return { numbers };
}

// Add more functions for other Florida lottery games as needed
