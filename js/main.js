var inventory = [];

function Shoe(a, b, c, d) {
  this.name = a;
  this.color = b;
  this.size = c;
  this.price = d;
}

// inventory.push(
//   new Shoe('sandal', 'white', 'small' , '45')
// );

function newShoe() {
  var name = document.querySelector('#name').value;
  var color = document.querySelector('#color').value;
  var size = document.querySelector('#size').value;
  var price = document.querySelector('#price').value;

  inventory.push(new Shoe(name, color, size, price));

  populateHTML();
}

function populateHTML() {

  document.getElementById('products').innerHTML = "";

  for(var i=0; i < inventory.length; i++) {

    var newDiv = document.createElement('div');
    newDiv.className = 'col-4 text-center mt-5';
    newDiv.innerHTML = '<div>' +
      '<h1>' + inventory[i].name + '</h1>' + '<h5>' + inventory[i].color + '</h5>' +
      '<h5>' + inventory[i].size + '</h5>' + '<p>' + inventory[i].price + '</p>' +
      '<button type="button">Buy Now</button>' + '</div>';

    document.querySelector('#products').appendChild(newDiv);
  }

}
