var list = {
  name: 'bob',
  next: {
    name: 'dick',
    next: {
      name: 'harry'
    }
  }
};

console.log('FORWARD');

var node = list;

while (node) {
  console.log(node.name);
  node = node.next;
}


console.log('BACKWARD');

node = list;

// recursive descent

reverse(node);

function reverse(node) {
  if (node.next) {
    reverse(node.next);
    console.log(node.name);
  } else {
    console.log(node.name);
  }
}
