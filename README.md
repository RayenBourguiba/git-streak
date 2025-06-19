# GitHub Contribution Graph Art Generator 🎨

> “If your GitHub looks empty, don’t bother applying.”  
> That one sentence made me build this silly little thing.

## ✨ Why I Made This

I stumbled upon a job listing that said *"If your GitHub looks empty, don't bother applying."*  
Honestly, I found that unrealistic and a bit elitist.

Many developers:
- Write code all day at work or in school
- Use GitHub for collaboration but not necessarily public contributions
- Might even contribute to tools not tracked by GitHub at all

So, to prove a point, I made this project.  
It generates **GitHub contribution graph art** by scripting commits across dates, just to fill up the squares.  
Silly? Maybe. But it makes a statement.

## 📦 What It Does

- Converts a small pixel image into a matrix of commit intensities
- Generates backdated Git commits based on pixel brightness
- Pushes to a new GitHub repo to draw that image on your contributions graph

## 🛠️ Tech Stack

- Node.js
- Sharp (image processing)
- Git (for manipulating commit history)

## 🧪 How to Use

1. Add a `53x7` pixel-style image as `pixels.png`
2. Run:

   ```bash
   node generator.js
   ```

3. A new folder is created (`git-streak/`) containing all fake commits
4. Push that repo to GitHub:

   ```bash
   cd git-streak-art
   git remote add origin https://github.com/YOU/your-repo.git
   git push -u origin main --force
   ```

✅ And boom ! your GitHub now has a little art project on it.

## 📁 Project Structure

```
.
├── image-to-art.js       # Converts image to matrix
├── generator.js          # Creates git history
├── pixels.png            # Your pixel art input
└── .env (optional)       # Config variables
```

## 📜 License

MIT — feel free to fork or use to express your own creative rebellion 😉

---

**This project is satire-adjacent, please don’t take it too seriously. Unless you're the hiring manager that wrote that post. In which case... I hope you liked the graph.**