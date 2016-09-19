//Ciara Lunger
//ITP 404
//due 9-20-16


//Task 1

function stringClass (){};

stringClass.prototype.pluralize = function(str) {
  if (str.slice(-1) === 'y') {
    return str.slice(0, -1) + 'ies';
  }
  else {
    return str + 's';
  }
};

var string = new stringClass();

console.log(string.pluralize('baby'));



//Task 2

function Book(obj) {
  this.title = obj.title;
  this.quantity = obj.quantity;
  this.price = obj.price;
}

Book.prototype.getSubtotal = function() {
  var subtotal = this.quantity * this.price;
  return subtotal;
}

	//Make this code run:
	var oojsBook = new Book({ title: 'Object Oriented JavaScript', quantity: 2, price: 10 });
	console.log(oojsBook.title); // Object Oriented JavaScript
	console.log(oojsBook.quantity); // 2
	console.log(oojsBook.price); // 10
	console.log(oojsBook.getSubtotal()); // 20
	//

function ShoppingCart(array) {
  this.books = array;
}

ShoppingCart.prototype.add = function(book) {
  this.books.push(book);
};

ShoppingCart.prototype.getTotal = function() {
	var result = 0;
	for(var i = 0; i < this.books.length; i++){
		result += this.books[i].getSubtotal();
	};

	return result;
};

	//Make this code run:
	var book1 = new Book({ title: 'Object Oriented JavaScript', quantity: 1, price: 10 });
	var book2 = new Book({ title: 'JavaScript Web Applications', quantity: 2, price: 15 });
	var book3 = new Book({ title: 'PHP Object Oriented Solutions', quantity: 1, price: 20 });
	var book4 = new Book({ title: 'Head First Java', quantity: 5, price: 20 });

	var cart = new ShoppingCart([book1, book2]);
	cart.add(book3);
	cart.add(book4);
	var subtotal = cart.getTotal();
	console.log(subtotal); // 160
	//



//Task 3

Array.prototype.map2 = function(callback) {
	var myArray = [];
	for (var i = 0; i < this.length; i++) {
		myArray.push(callback(this[i]))
	}
	return myArray;
}

	//Make this code run:
	var numbers = [1, 2, 3, 4, 5];
	var numbersDoubled = numbers.map2(function(number) {
	  return number * 2;
	});
	console.log(numbersDoubled); // should equal [2, 4, 6, 8, 10]
	//



