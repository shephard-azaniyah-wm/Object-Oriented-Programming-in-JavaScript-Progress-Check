
// The class food and the properties
var Food = function(name, heritage, temp, servings) {
    this.name = name;
    this.heritage = heritage;
    this.temp = temp;
    this.servings = servings;
};

Food.prototype.displayFoodInfo = function() {
    document.write("<input type='text' size='150' value=\'" + this.name +
        ": What heritage is it? = " + this.heritage + " Is it hot or cold? " + this.temp +
        ",  How many servings are there? " + this.servings  + "\'><br><br>");

};



function Pizza(name, heritage, temp, servings, nbrToppings) {
    Food.call(this, name, heritage, temp, servings);
    this.nbrToppings = nbrToppings;
}

Pizza.prototype = Object.create(Food.prototype);

Pizza.prototype.constructor = Pizza;

Pizza.prototype.displayFoodInfo = function() {
    document.write("<input type='text' size= '150' value=\'" + this.name +
        ": What heritage is it? = " + this.heritage + "Is it hot or cold? " + this.temp +
        ", How many servings are there? " + this.servings + " and has " +
        this.nbrToppings + " toppings" + "\'><br><br>");


};


function Donut(name, heritage, temp, servings, fillings) {
    Food.call(this, name, heritage, temp, servings);
    this.fillings = fillings;
}

Donut.prototype = Object.create(Food.prototype);

Donut.prototype.constructor = Donut;

Donut.prototype.displayFoodInfo = function() {
    document.write("<input type='text' size= '150' value=\'" + this.name +
        ": What heritage is it? = " + this.heritage + "Is it hot or cold? " + this.temp +
        ", How many servings are there? " + this.servings + " and has " +
        this.fillings + " filling" + "\'><br><br>");
};

function Pretzel(name, heritage, temp, servings, type) {
    Food.call(this, name, heritage, temp, servings);
    this.type = type;
}

Pretzel.prototype = Object.create(Food.prototype);

Pretzel.prototype.constructor = Pretzel;

Pretzel.prototype.displayFoodInfo = function() {
    document.write("<input type='text' size= '150' value=\'" + this.name +
        ": What heritage is it? = " + this.heritage + "Is it hot or cold? " + this.temp +
        ", How many servings are there? " + this.servings + " and has " +
        this.type + " Type" + "\'><br><br>");
};

function Popcorn(name, heritage, temp, servings, seasoning) {
    Food.call(this, name, heritage, temp, servings);
    this.seasoning = seasoning;
}

Popcorn.prototype = Object.create(Food.prototype);

Popcorn.prototype.constructor = Popcorn;

Popcorn.prototype.displayFoodInfo = function() {
    document.write("<input type='text' size= '150' value=\'" + this.name +
        ": What heritage is it? = " + this.heritage + "Is it hot or cold? " + this.temp +
        ", How many servings are there? " + this.servings + " and has " +
        this.seasoning + " seasoning" + "\'><br><br>");
};

function main() {
    var food1 = new Food("Sushi", "Japan", "Cold ", 8);
    food1.displayFoodInfo();

    var pizza1 = new Pizza("Pizza", "Italy", "Hot ", 8, 2);
    pizza1.displayFoodInfo();

    var donut1 = new Donut("Donut", "America", "Hot ", 1, "No");
    donut1.displayFoodInfo();

    var pretzel1 = new Pretzel("Pretzel", "Germany", "Hot ", 1, "Cinnamon" );
    pretzel1.displayFoodInfo();

    var popcorn1 = new Popcorn("Popcorn", "Mexico", "Hot ", 5, "Cheese");
    popcorn1.displayFoodInfo();

}


/**
 * Created by session1 on 10/13/16.
 */
