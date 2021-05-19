---
layout: post
title: "React vs Vue - A tight comparsion"
date: 2021-05-19 10:18:00
categories: javascript
---

There will go the content of the whole post. Write it down in grammarly application or copy it there and check for issues.

Javascript, one of used programming languages in the world, has taken a place in many developers tech stack. There is various of reasons for that but one of the biggest ones is good front-end frameworks. For example there are ReacJS, VueJS, Angular and Next.js.

On this blog post I will cover everything you need to know about two of the most popular Javascript frameworks: VueJS and ReactJS. I'll answer for the following questions: Which one you should choose as a beginner, when to use which one and what are differences on them. Also, I will cover pros and cons of these both frameworks.

## What Javascript frameworks actually are?

A JavaScript framework is an application framework written in JavaScript. It differs from a JavaScript library in its control flow: A library offers functions to be called by its parent code, whereas a framework defines the entire application design.

When it comes to question that do we need to use javascript frameworks, there is no spesific answer for that. But, I think that those frameworks are useless if you do only simple page personal websites or something like that. If you webpages are more likely web applications or a little bit more complicated ones, it will be a right choice to use some of the javascript frameworks.

In the following I will go through two of the most popular frameworks of javascript: Vue and React.

## Vue

Vue is the choice of mine when it comes to developing websites and webapps using javascript and its frameworks. The reason is simple. I don't know javascript as well as possible so using Vue will be better choice.

Learning Vue does not require you to go so depth into javascript and that is why I recommend it to use for the beginners. Also, Vue does have less features to learn than React so it is more easier to learn as a beginner programmer.

### VueJS Hello World application

```jsx
<div id="app">{{ message }}</div>;

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
  },
});
```

### Pros:

- Easier to learn than React
- Simple syntax
- Good for small simple page websites

### Cons

- Less features than React has
- Not cood for really large or complicated web apps

## React

React is the most popular javascript framework out there. It is used by many developers. It is developed by Facebook.

React is a little bit more complicated than Vue but it is not "too complicated" to learn. I have personally looked out for React but as a beginner I've found Vuejs as a better choice.

There is also javascript framework related to React which is React Native. React Native is basicly React js but for creating mobile apps.

### React Hello World application

```jsx
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
```

### Pros:

- Plenty of useful features
- Use of JSX
- Good for large webapps

### Cons:

- Quite difficult to learn as a beginner
- Sometimes can be too complicated

## Conclusion

This was today's post. Hope you enjoyed it! See you next time.

Follow me on socials to get updated:

- [Twitter](https://twitter.com/sopanenm)
- [Instagram](https://instagram.com/sopanem)
