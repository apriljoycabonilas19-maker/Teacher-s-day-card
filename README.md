# 💌 Teacher's Day 3D Flip Greeting Card

A responsive and interactive digital greeting card built using HTML, CSS, and JavaScript. The card features a 3D flip effect on click, custom typography, an aesthetic color palette, and a functional audio play/pause button.

## ✨ Features

* **3D Flip Effect:** The card front flips 180 degrees to reveal the inner message using pure CSS 3D transformations.
* **Audio Integration:** Includes a JavaScript-controlled button to play and pause background music/audio (requires local file path adjustment).
* **Elegant Design:** Uses a refined, warm color palette (`Warm Gold`, `Cream`, `Deep Teal`) and Google Fonts (`Playfair Display` for greetings, `Montserrat` for body text).
* **Interactive Message:** The inner message content and signature fields are marked as `contenteditable="true"`, allowing the user to easily personalize the text directly in the browser.
* **CSS Animations:** Subtle keyframe animations (`@keyframes sparkle`) add a dynamic glow effect to the decorative icons on the back of the card.
* **Font Awesome Icons:** Uses the Font Awesome library for the music, star, graduation cap, and heart icons.

## 🛠️ Project Structure

The entire project is contained within a single `index.html` file, which holds the HTML structure, the CSS styling within `<style>` tags, and the JavaScript logic within `<script>` tags.

## 🚀 Usage Instructions

To run this project, simply save the provided code as an HTML file (e.g., `index.html`) and open it in any modern web browser.

### 1. Customizing Local Assets (Important)

The current code uses **local file paths** for the image and audio files. These must be updated for the card to display and play correctly on your machine or for sharing.

| Element | Current Path (Local) | Action Required |
| :--- | :--- | :--- |
| **Teacher Image** | `c:\Users\STUDENT USER\Pictures\Saved Pictures\1761006516518.jpg` | **Replace** with a web-accessible URL (e.g., a link to a profile picture hosted online) or an image file path relative to your `index.html` file. |
| **Background Audio** | `c:\Users\STUDENT USER\Music\David_Archuleta_-_Crush__Lyrics_(128k).m4a` | **Replace** with a web-accessible URL (e.g., a link to an audio file hosted online) or an audio file path relative to your `index.html` file. |

**Example Update:**
If you place your teacher image as `teacher.jpg` in the same folder as `index.html`, you would change the path like this:
```html
<img src="teacher.jpg" alt="Teacher Portrait" class="teacher-image">