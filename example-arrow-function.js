var names = ['Adrew', 'Julie', 'Jen'];

names.forEach(function(name) {
  console.log('forEach', name);
})

names.forEach((name) => {
  console.log('arrow', name);
})

names.forEach((name) => console.log('arrow', name));

var returnMe = (name) => name + '!';
console.log(returnMe('Tom'));

var person = {
  name: 'Tom',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    })
  }
}

person.greet();

function add(a, b) {
  return a + b;
}
console.log(add(1,2));

var addStatement = (a, b) => { return a + b };
console.log(addStatement(1, 3));

var addExpression = (a, b) => a + b;
console.log(addExpression(1, 3));

