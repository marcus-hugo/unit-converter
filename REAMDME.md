# Scrimba Solo Project - Unit Converter

## About
Scrimba Learn JavaScript for Free Solo Project built from a Figma design.  The requirements are to save a number as a variable, on load make conversion calculations.  Numbers must be rounded to 3 decimal places. 

💪Stretch goal: to add an input for the user.💪

Live site: https://marcus-hugo.github.io/unit-converter/
### Notes

This was a fun project! First time using a simple front-end template I made for HTML,CSS, and JavaScript, nothing fancy though.😆 I think the trickiest part was setting up the input element the best way. Which type, `'text'` or `'number'`?🤔  I guess obviously `'number'` makes the most sense. Has built in constraint validation so you can only enter numbers.  

I liked that there were reusable CSS styles for the headings. For some reason now I find myself writing CSS selectors a bit more specific like
```css 
div.title-input-wrapper {
    background: var(--linear-gd);
    border-radius: 5px 5px 0 0;
}
```
and using combinators like
```css
footer p>a {
    color: var(--clr-light-grey);
}
```
Though, I guess following a Methodology like BEM would be better?🤔

For the JS of note, I impleminted `parseFloat()` to change the `input.value` string to a number and `toFixed()` to set the maximum decimal places before performing any calculations.  `.textContent` was the winner over `.innerText`, which seemed to shift the text around when rendered.

```js
displayMassEl.textContent = `
    ${numInputValue} kilos = ${kilosToPounds} pounds | 
    ${numInputValue} Pounds = ${PoundsToKilos} kilos
    `;
```


### Resources

Thanks to Josh Comeau for the gradient genrator! Here's a link to it:
https://www.joshwcomeau.com/gradient-generator/
