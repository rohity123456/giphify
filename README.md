# 🌟 Giphy GIF Explorer

A fast, responsive, and beautifully styled web application that lets users search and explore trending GIFs using the Giphy API. Built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **modern hooks-based architecture** — this app offers a blazing-fast user experience with infinite scroll and a masonry-style layout.



## Demo
[![Giphy GIF Explorer](https://giphify-nine.vercel.app/)](https://giphify-nine.vercel.app/)


---

## 🚀 Features

- 🔍 **Search GIFs** with real-time results
- 📈 **Trending GIFs** on initial load
- 🔁 **Infinite Scroll** to load more content without clicking
- 📱 **Responsive Design** for mobile, tablet, and desktop
- ⚡ **Router based Search** for letting users bookmark and share cool search results

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) 15
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Giphy API](https://developers.giphy.com/)

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/rohity123456/giphify.git
cd giphy-explorer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the root directory and add your Giphy API key:

```bash
NEXT_PUBLIC_GIPHY_API_KEY=your_giphy_api_key_here
```
### 4. Run the Development Server

```bash
npm run dev
```
### 5. Open in Browser
Open your browser and navigate to `http://localhost:3000` to see the app in action!


## 🌟 TODO / Enhancements (Optional)

* Add dark mode switch
* Add favorites/bookmark feature
* Improve accessibility (a11y)
* Add unit/integration tests with Vitest/Testing Library
* Lazy load next/image via blur placeholders
