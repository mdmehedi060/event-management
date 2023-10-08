<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer:</b></summary>
<p>

#### Answer: (B). It is declared as let greeting; 
But later assigned as greetign = {}; with a misspelled variable name greetign. This will result in a ReferenceError because greetign is not defined, and the correct variable name should be greeting

<i>But later assigned as greetign = {}; with a misspelled variable name greetign. This will result in a ReferenceError because greetign is not defined, and the correct variable name should be greeting</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D: `3`

<i>So, it concatenates "1" and "2" to form "12", and then JavaScript converts it back to a number when you use it as a return value from the sum function. As a result, you get the numeric value 3.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  A: `['🍕', '🍫', '🥑', '🍔']`

<i>However, later in the code, info.favoriteFood is reassigned to "🍝". This reassignment only affects the info object and doesn't change the food array. So, when you console.log(food);, it will still output the original array, which is ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  B: `Hi there, undefined`

<i>JavaScript sets the name parameter to undefined by default. As a result, the function returns a string with "Hi there, " followed by the value of name, which is undefined in this case. Therefore, the output will be "Hi there, undefined."</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>So, for each non-zero element, it increments the count variable by 1. As there are three non-zero elements (1, 2, and 3) in the array, the count variable will be 3 at the end, and that's what will be logged to the console.</i>

</p>
</details>
