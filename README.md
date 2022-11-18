<div align='center'>
  <img src='./public/images/holopin-icon.png'/>
  <h1>Holopin <code>README</code> Badge
  </h1>
  <p><strong>Get yourself a dynamic Holopin markdown badge to show your collection of badges ツ</strong></p>
  <img src='https://holopin.onrender.com/vinitshahdeo'/>
  <img src='https://holopin.onrender.com/vinitshahdeo?static=true'/>
  <br/><br/>
</div>

Holopin is a platform that allows you to create and collect digital badges that people love ━ **this is for you if you love collecting badges**. Here's my collection ━ [holopin.io/@vinitshahdeo](https://www.holopin.io/@vinitshahdeo). Read "[Introducing Holopin: the digital badge platform for developers!](https://dev.to/elenalape/introducing-holopin-the-digital-badge-platform-for-developers-2hlk)" by [@elena_lape](https://twitter.com/elena_lape) to learn more.

While Holopin already provides badge boards that can be easily embedded on GitHub and GitLab. **You can now also add dynamic markdown badges to your READMEs.** This shows count of the badges collected by you.

## Here's how?
Replace `vinitshahdeo` in the markdown with your Holopin username. [Get your Holopin username](https://www.holopin.io/) if you haven't yet!

#### Dynamic Badge

```markdown
[![Holopin](https://holopin.onrender.com/vinitshahdeo)](https://holopin.io/@vinitshahdeo)
```
[![Holopin](https://holopin.onrender.com/vinitshahdeo)](https://holopin.io/@vinitshahdeo)

#### Static Badge

Pass `static=true` if you want a static badge.

```markdown
[![Holopin](https://holopin.onrender.com/vinitshahdeo?static=true)](https://holopin.io/@vinitshahdeo)
```
[![Holopin](https://holopin.onrender.com/vinitshahdeo?static=true)](https://holopin.io/@vinitshahdeo)

For using HTML, please replace `vinitshahdeo` with your username and copy the below syntax.

```html
<a href='https://www.holopin.io/@vinitshahdeo'>
    <img src='https://holopin.onrender.com/vinitshahdeo'/>
</a>
```
<a href='https://www.holopin.io/@vinitshahdeo'><img src='https://holopin.onrender.com/vinitshahdeo'/></a>

## Style your badge 🦖

Additionally it supports the styles. **To use a different style**: Replace `flat-square` in the markdown with any of the styles below ⤵

```markdown
![Holopin](https://holopin.onrender.com/vinitshahdeo?style=flat-square)
```

### Available styles

| Type  | Dynamic Badge  | Static Badge
|:---|:---|:---|
| `flat` <br> <sub>This is the default style.<sub>  | ![Holopin](https://holopin.onrender.com/vinitshahdeo) | ![Holopin](https://holopin.onrender.com/vinitshahdeo?static=true) |
| `flat-square`  | ![Holopin](https://holopin.onrender.com/vinitshahdeo?style=flat-square)  | ![Holopin](https://holopin.onrender.com/vinitshahdeo?static=true&style=flat-square)  |
| `plastic`  | ![Holopin](https://holopin.onrender.com/vinitshahdeo?style=plastic)  | ![Holopin](https://holopin.onrender.com/vinitshahdeo?static=true&style=plastic)  |
| `social`  | ![Holopin](https://holopin.onrender.com/vinitshahdeo?style=social)  | ![Holopin](https://holopin.onrender.com/vinitshahdeo?static=true&style=social)  |
| `for-the-badge`  | ![Holopin](https://holopin.onrender.com/vinitshahdeo?style=for-the-badge)  | ![Holopin](https://holopin.onrender.com/vinitshahdeo??static=true&style=for-the-badge)  |

## Build locally

```console
npm install
npm start
```

Run the above command and visit `http://localhost:3000/`

## API Documentation

## Under the hood

This is built using an **unofficial** [Holopin SDK](https://github.com/vinitshahdeo/holopin) created by me. This can be used to get the list of badges for any user. Find it here ⎯ [npmjs.com/holopin](https://www.npmjs.com/package/holopin) or install it using ☞ `npm i holopin`.
  
```javascript
const holopin = require('holopin');

holopin('vinitshahdeo')
  .then((badges) => {
    // badges.data.count ⎯ number of badges collected
    // badges.data.stickers ⎯ list of your badges
  })
  .catch(console.log);

```
  
Huge shoutout to [Shields.io](https://shields.io/) service for providing badges in the SVG format.

## Author

Vinit Shahdeo ❯ **[@vinitshahdeo](https://github.com/vinitshahdeo)**

[![Twitter Follow](https://img.shields.io/twitter/follow/Vinit_Shahdeo.svg?style=social)](https://twitter.com/Vinit_Shahdeo)
