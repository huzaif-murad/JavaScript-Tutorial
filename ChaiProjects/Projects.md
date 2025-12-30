# Project link

1.Color Changer

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-wcgqczv5?file=index.html)

```JavaScript
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach(function (button) {
  button.addEventListener('click', (e) => {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

1.BMI calculator

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-kvh7cc6w?file=2-BMICalculator%2Fchaiaurcode.js)

```JavaScript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `please enter valid hieght. ${height}`;
  } else if (weight == '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `please enter valid weight. ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is ${bmi} and you are under weight.`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `Your BMI is ${bmi} and your weight is normal.`;
    } else {
      results.innerHTML = `Your BMI is ${bmi} and you are over weight.`;
    }
  }
});

```
