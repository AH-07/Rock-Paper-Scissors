# ✂️ Rock Paper Scissors

A browser-based Rock Paper Scissors game built with HTML, CSS, and vanilla JavaScript. Developed as a mini project during the [SuperSimpleDev](https://www.youtube.com/@SuperSimpleDev) JavaScript course.

## 🔗 Live Demo

👉 [Play it live on GitHub Pages](https://ah-07.github.io/Rock-Paper-Scissors/)

## Features

- Play by clicking the Rock, Paper, or Scissors buttons
- ⌨️ Keyboard shortcuts — press `R`, `P`, or `S` to play
- 🤖 Auto Play mode — watch the computer play against itself
- Score tracking (wins, losses, ties) saved with `localStorage`
- Reset score button
- Dark themed UI

## How to Play

Open the live demo link above and click a move, or use the keyboard shortcuts:

| Key | Move |
|-----|------|
| `R` | Rock |
| `P` | Paper |
| `S` | Scissors |

## Project Structure
```
├── index.html                   # Game layout and buttons
├── 12-Rock-Paper-Scissors.css   # Dark theme styling
├── 12-Rock-Paper-Scissors.js    # Game logic and score tracking
└── Images/
    ├── Rock-emoji.png
    ├── Paper-emoji.png
    └── Scissors-emoji.png
```

## What I Learned

- DOM event listeners (`addEventListener`)
- Keyboard event handling (`keydown`)
- `setInterval` / `clearInterval` for the auto play feature
- Persisting and parsing data with `localStorage` and `JSON`
- Generating random computer moves with `Math.random()`

## Built With

- HTML
- CSS
- JavaScript (Vanilla)
