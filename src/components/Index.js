import React from "react";

const myName = "Sam";
const nameNum = 3;
const opinion = " is ok";

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {myName}</h1>
        <h2>My name has {nameNum} letters</h2>
        <h2>I think React {opinion}</h2>
        <h2>My name without vowels is {vowelless}</h2>
      </div>
    </div>
  </div>
);

function withoutVowels(string) {

  var withoutVowels = "";
  for (var i = 0; i < string.length; i++) {
      if (!isVowel(string[i])) {
        withoutVowels += string[i];
      }
    }
    return withoutVowels;
}

function isVowel(char) {
  return 'aeiou'.includes(char);
}

const vowelless = withoutVowels("Sam")

export default JSXVariables;
