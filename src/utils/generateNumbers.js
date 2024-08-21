// Florida Lottery Games
export function generateFloridaMegaMillionsNumbers() {
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

export function generateFloridaPowerballNumbers() {
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

// Missouri Lottery Games
export function generateMissouriMegaMillionsNumbers() {
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

export function generateMissouriPowerballNumbers() {
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

export function generateLottoNumbers() {
  const numbers = [];
  while (numbers.length < 6) {
    const num = Math.floor(Math.random() * 44) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return { numbers };
}

export function generateShowMeCashNumbers() {
  const numbers = [];
  while (numbers.length < 5) {
    const num = Math.floor(Math.random() * 39) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return { numbers };
}

export function generatePick4Numbers() {
  const numbers = [];
  while (numbers.length < 4) {
    const num = Math.floor(Math.random() * 10);
    numbers.push(num);
  }
  return { numbers };
}

export function generatePick3Numbers() {
  const numbers = [];
  while (numbers.length < 3) {
    const num = Math.floor(Math.random() * 10);
    numbers.push(num);
  }
  return { numbers };
}
