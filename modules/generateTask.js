import {showPreview} from "/modules/showPreview.js"

//sets up the task, takes in two objects
//the first object should have htmlText, cssText, and instructions properties
//the second object should have htmlRegexArray and cssRegexArray properties
const generateTask = ({htmlText, cssText, instructions}, 
{htmlRegexArray, cssRegexArray, criteriaArray}) => {
  setHTML(htmlText)
  setCSS(cssText)
  setInstructions(instructions)
  setCriteria(criteriaArray)
  showPreview()
  addCodeCheckers(htmlRegexArray, cssRegexArray)
}

//sets the value of the HTML box, used to give starter code
const setHTML = text => document.getElementById("htmlCode").value = text
const setHTML = text => document.getElementById("htmlEditor").value = text

//sets the value of the CSS box, used to give starter code
const setCSS = text => document.getElementById("cssCode").value = text

//sets the instructions in the instructions box
const setInstructions = text => document.getElementById("instructions").innerHTML = text

//sets the value of the criteria list
const setCriteria = criteria => {
  for (let i = 0; i < criteria.length; i++) {
    let criterion = document.createElement("li")
    criterion.appendChild(document.createTextNode(criteria[i]))
    document.getElementById("criteria").appendChild(criterion)
  }
}

//adds an event listener that checks of the conditions for completing the task are met
const addCodeCheckers = (htmlArray, cssArray) => {
  document.getElementById("taskChecker").addEventListener("click", () => {
    if (htmlArray.every(e => checkCode(e, "htmlCode")) && cssArray.every(e => checkCode(e, "cssCode"))) {
      alert("you did it!")
    }
    else {
      alert("you didn't do it")
    }
    
  })
}

//checks if the specified code box contains the given regex
const checkCode = (regex, elementId) => {
  let code = document.getElementById(elementId).value
  let check = code.match(regex)
  return Boolean(check)
}

export {generateTask}