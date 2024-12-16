# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Screenshot

#### Desktop

![Desktop Screenshot](./screenshots/desktop.PNG)

#### Mobile

![Mobile Screenshot](./screenshots/mobile.PNG)

### Links

- Live Site URL: [CLick here to see the solution](https://frontend-mentor-num-1-qr-code.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

The main goal of this challenge was without doubt, learn and put in practice TAILWIND CSS!. It's amazing how you can rapidly style you project through the utility classes. Fantastic.

For example: Due to Tailwind has a mobile-first approach, I created my own customs breakpoints: "tablet" and "desktop". In that way, the styles will only be applied when the screen take the size I configured in the tailwind.config.js file, as below

```html
<img
  src="./image-qr-code.png"
  alt="image-qr-code"
  class="rounded-[30px] w-80 h-80 p-4 mx-auto mt-1
        tablet:w-96 tablet:h-96
        desktop:w-[460px] desktop:h-[460px]
        "
/>
```

```js
theme: {
    extend: {
      screens: {
        tablet: "640px",
        desktop: "1440px",
      },
      fontFamily: { Outfit: ["Outfit", "sans-sefir"] },
    },
  },
```


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
