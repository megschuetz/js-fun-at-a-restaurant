function nameMenuItem(food) {
 return `Delicious ${food}`;
};

function createMenuItem(name,price,type) {
 return {
   name: name,
   price: price,
   type: type,
 };
};


function addIngredients(ingred, arr) {
  if (arr.includes(ingred) == false){
    arr.push(ingred);
  }
};


function formatPrice(price) {
  return `$${price}`;
};

function decreasePrice(price) {
  return price - price * .1
};

function createRecipe(item1,item2,item3) {
  return {
    title: item1,
    ingredients: item2,
    type: item3,
  };
};



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
