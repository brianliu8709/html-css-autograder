import { generateTask } from "/modules/generateTask.js"

//htmlText is the HTML starter code value
//cssText is the CSS starter code value
//instructions is the given instructions for the student
const setup = {
  htmlText: "<h1>Hello World</h1>",
  cssText: "* { background-color: red; }",
  instructions: "Instructions: Delete the space in 'Hello World'"
}

//htmlRegexArray is an array of all of the regexes that need to be fulfilled in htmlCode
//cssRegexArray is an array of all of the regexes that need to be fulfilled in cssCode
const criteria = {
  htmlRegexArray: [/HelloWorld/],
  cssRegexArray: [/red/],
  criteriaArray: ["hi", "hello", "hey"]
}

generateTask(setup, criteria)