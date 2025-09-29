# Personal Website in ReactJs Workshop

Welcome to the **Personal Website Workshop**! This README will guide you through the essential steps for using ReactJs and creating your personal website Follow along to set up your environment, manage your code, and build your first draft for your personal website! Be creative, play around. This is YOUR personal website, inject your personality into it!

---

## Table of Contents
- [React.js Introduction](#reactjs-introduction)
- [Node.js Check](#nodejs-check)
- [Setting Up a React Project](#setting-up-a-react-project)
- [React Concepts](#react-concepts)
- [Feedback](#feedback)

---

## React.js Introduction
React.js is a **JavaScript library** for building dynamic user interfaces using **reusable components**, **state**, and **props**.

### Why React?
- Fast & efficient  
- Reusable code  
- Easier interactivity

---

## Node.js Check
Before starting with React, make sure you have **Node.js installed**:
```bash
node -v
```

If not installed, download from [nodejs.org](https://nodejs.org).

---

## Setting Up a React Project
1. **Create a new React project using Vite**
```bash
npm create vite@latest myweb --template react
cd myweb
```

---


## React Concepts

### JSX Example
```jsx
const element = <h1>Hello, world!</h1>;
```

### Component Example
```jsx
function Welcome(props) {
  return (
    <h1>Hello, {props.name}</h1>
  );
}
```

### Mapping a List
```jsx
const items = ['Apple', 'Banana'];
<ul>
  {items.map(item => <li key={item}>{item}</li>)}
</ul>
```

### Using State
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      count is {count}
    </button>
  );
}
```

### Handling Events
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      count is {count}
    </button>
  );
}
```


npm install react-simple-typewriter