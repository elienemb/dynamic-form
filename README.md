<h2 align="center">
    Dynamic JSON Schema Form (React + Vite)
</h2>


This is a lightweight React app that dynamically renders forms based on a provided JSON schema.

## Getting Started

### 1. Clone the repository

```bash

git clone https://github.com/elienemb/dynamic-form.git
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the app
```bash
npm run dev
```
The app will be available at http://localhost:5173

###  4.  Features
Dynamic form rendering based on schema

Basic form validation

Modular React component structure

Easily extendable for more field types

### 5. Built With
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 💅 Styling with Tailwind CSS

This project uses [Tailwind CSS](https://tailwindcss.com/) for fast, utility-first styling.

Tailwind was installed and configured using the [official Vite guide](https://tailwindcss.com/docs/installation/using-vite):

```bash
npm install tailwindcss @tailwindcss/vite
```

Tailwind configuration in `vite.config.js`:

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

Tailwind directives in `src/index.css`:

```css
@import "tailwindcss";
```


## License
This project is for technical evaluation purposes only.

