function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Philadelphia', function(err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(79);
      reject('City not found');
    }, 1000)
  });
}

getTempPromise('Philadelphia').then(function(temp) {
  console.log('promise success', temp);
}, function(err) {
  console.log('promise error', err);
});

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof(a) === 'number' && typeof(b) === 'number') {
      resolve(a + b);
    } else {
      reject('a or b is not a number')
    }
  });
}

addPromise(6, 7).then(function(sum) {
  console.log('Sum: ' + sum);
}, function(err) {
  console.log('Err: ', err);
});

addPromise('6', 7).then(function(sum) {
  console.log('Sum: ' + sum);
}, function(err) {
  console.log('Err: ', err);
});
