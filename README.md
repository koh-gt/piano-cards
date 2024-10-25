# Piano Cards 🎹🃏
## **[Play Piano Cards Online!](https://pianocards.xyz)**

![pianocards](https://github.com/user-attachments/assets/6d095c59-26aa-4a34-9f26-72642f9f3418)

Piano Cards is an open-source web-based game that randomly generates a sequence of black and white "cards" representing piano keys. The player is presented with cards in a random black/white pattern, and the goal is to visually engage with the pattern. This could be used as a training tool for developing a quick association between visual patterns and keys, or for fun visual learning games.

---

## 🎮 Game Description

In **Piano Cards**, each "card" is represented by a color:
- **Black cards** represent black piano keys.
- **White cards** represent white piano keys.

Upon entering the game, the player can select the number of cards they want to generate. The server will return a random sequence of black and white cards, displayed on the screen as clickable or interactive elements.

---

## 🛠 Features and How to Play

1. **Card Generation**: Enter the number of cards you want to generate and click "Roll".
2. **Visual Pattern Display**: Black cards and white cards are displayed in a flexible, responsive grid.
3. **Resizable Interface**: The card container is dynamically sized to fit your screen.

## 📂 Project Structure

- `cards.py`: Main Flask application that handles routing and random card generation.
- `templates/index.html`: Frontend interface where cards are displayed.
- `static/style.css`: CSS for styling the card container and cards.
- `static/cardgen.js`: JS for frontend handling of cards and user input.
- `requirements.txt`: Lists Python dependencies for easy installation.

## ⚙️ Configuration

- **Server Settings**: Runs on port `18093` locally using the Waitress server for production-grade performance.
- **Customizable Display**: Edit `static/style.css` to change card size, colors, and spacing.

---

## 📝 Notes

- **Requirements**: Works best on modern browsers (Chrome, Firefox, Edge).
- **Troubleshooting**: If you encounter errors, confirm Python and Flask are installed and configured correctly.
- **Development Mode**: Run with `app.run(debug=True)` in `app.py` for debugging (not recommended for production).

---

## 💻 Setup Guide for Windows

Follow these instructions to set up the **Piano Cards** application on your local Windows machine.

### 1. Install Git

First, you'll need Git to clone the repository. 

1. Download Git for Windows from [https://gitforwindows.org](https://gitforwindows.org).
2. Run the installer and follow the instructions.
3. Confirm the installation by opening Command Prompt and running:
   ```sh
   git --version
   ```

### 2. Install Python

**Piano Cards** runs on Python, so you’ll need to install it:

1. Download Python from [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/).
2. Run the installer. Be sure to select "Add Python to PATH" in the setup screen.
3. Confirm installation by opening Command Prompt and running:
   ```sh
   python --version
   ```

### 3. Clone the Piano Cards Repository

Now that you have Git and Python, clone the **Piano Cards** repository:

1. Open Command Prompt.
2. Navigate to the directory where you want the game files (e.g., Desktop).
   ```sh
   cd path\to\desired\directory
   ```
3. Clone the repository:
   ```sh
   git clone https://github.com/koh-gt/piano-cards.git
   ```
4. Enter the repository directory:
   ```sh
   cd piano-cards
   ```

### 4. Install Dependencies

Install the necessary dependencies to run the server:

```sh
pip install -r requirements.txt
```

### 5. Run the Application

To start the application locally:

```sh
python cards.py
```

This will start the server at `http://127.0.0.1:18093`, which you can open in your browser.

---

Enjoy **Piano Cards** as a unique way to connect with visual patterns and practice key identification!

**[Play Piano Cards Online!](https://pianocards.xyz)**
