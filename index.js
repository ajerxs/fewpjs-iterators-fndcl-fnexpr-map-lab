let tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let titles = tutorials.map( function(title) {
    let words = title.split(' ');
    let thing = words.map( word => { 
      let newWord = word[0].toUpperCase()  + word.substr(1)
      return newWord
    });
    return thing.join(" ");
  })
  return titles
}
