# 🐍 The Snake Game

A classic Snake game built with **HTML5 Canvas**, **CSS3**, and **vanilla JavaScript**. No libraries or frameworks, just three files you can open in any browser.

The screen is split into two halves: the **game area** on the left (the canvas) and an **information panel** on the right with the title, live score, and speed controls.

---

## ✨ Features

- Classic snake gameplay drawn on an HTML `<canvas>`
- **Score counter** that adds 1 point for every food eaten
- **Three speed levels**: Mild, Moderate, and Fast
- **Wrap-around walls**: the snake comes out on the opposite side instead of dying
- Snake starts at a **random position** and food appears at a random spot each time
- Game area **adapts to your screen size** (half the window width, full height)
- Clean two-panel layout with a highlighted active speed button

---

## 🎮 How to Play

| Key | Action |
|---|---|
| ⬆️ Arrow Up | Move up |
| ⬇️ Arrow Down | Move down |
| ⬅️ Arrow Left | Move left |
| ➡️ Arrow Right | Move right |

1. The snake (red) moves automatically. Steer it with the arrow keys.
2. Eat the yellow food to grow longer and score a point.
3. Avoid running into your own body, because that ends the game.
4. Choose a speed with the buttons on the right panel:

| Button | Speed (update interval) |
|---|---|
| Mild | 160 ms (slowest) |
| Moderate | 100 ms (default) |
| Fast | 50 ms (fastest) |

> The snake cannot reverse directly (for example, it can't go left while moving right).
> When the game is over, **refresh the page** to play again.

---

## 📁 Project Structure

```
snakeGameProject/
├── index.html        # Page structure: canvas + side panel
├── css/
│   └── style.css     # Layout and styling
└── js/
    └── script.js     # Game logic
```

---

## 🚀 Getting Started

No installation needed.

**Option 1: Open directly**
1. Download or clone the project.
2. Double-click `index.html` to open it in your browser.

**Option 2: VS Code Live Server**
1. Open the folder in VS Code.
2. Right-click `index.html` and choose **Open with Live Server**.

**Clone with Git**
```bash
git clone https://github.com/abuseaad/REPO-NAME.git
cd REPO-NAME
```

---

## 🧠 How It Works

- **Canvas sizing:** the canvas width is half of the window and the height is the full window, rounded down to a multiple of the cell size (`scale = 20`) so the snake always fits the grid.
- **Snake:** stored as an array of `{x, y}` segments. Each frame, a new head is added in the current direction, and the tail is removed unless food was eaten.
- **Game loop:** `setInterval(draw, speed)` redraws everything every frame. Changing speed clears and restarts the timer.
- **Food:** placed at a random grid position; eating it increases the score and moves the food.
- **Collision:** `eatSelf()` checks if the new head position matches any body segment. If so, the loop stops and the game ends.
- **Walls:** when the head leaves one edge of the canvas, it re-enters from the opposite edge.

---

## 🛠️ Built With

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🔮 Possible Improvements

- Game over message and a restart button
- High score saved with `localStorage`
- Pause and resume with the spacebar
- Make sure food never spawns on the snake's body
- Touch and swipe controls for mobile

---

**Developed by Sadik J**