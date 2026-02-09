const COLORS = ["#ff4d4d", "#1e90ff", "#ffd93d", "#2ecc71", "#9b59b6"];

const BALLS_PER_COLOR = 4;
const TOTAL_TUBES = 6;

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const generateColumns = () => {
  let balls = [];

  COLORS.forEach((color, colorIndex) => {
    for (let i = 0; i < BALLS_PER_COLOR; i++) {
      balls.push({
        id: `${colorIndex}-${i}-${Math.random()}`,
        color,
      });
    }
  });

  balls = shuffleArray(balls);

  const columns = {};
  let index = 0;

  for (let t = 1; t <= TOTAL_TUBES; t++) {
    const items = [];

    if (t !== TOTAL_TUBES) {
      for (let j = 0; j < BALLS_PER_COLOR; j++) {
        items.push(balls[index++]);
      }
    }

    columns[`tube${t}`] = {
      name: `Tube ${t}`,
      items,
    };
  }

  return columns;
};
