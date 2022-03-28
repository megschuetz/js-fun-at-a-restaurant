 function createRestaurant(pizza) {
//
  return {
   name: pizza,
   menus: {
     breakfast:[],
     lunch: [],
     dinner: []
   },
   };

 };

function addMenuItem(rest, item){
  if (rest.menus[item.type].includes(item)) {
  return rest.menus[item.type]
} else {
  rest.menus[item.type].push(item)
}
};





module.exports = {
  createRestaurant,
  addMenuItem,
  //removeMenuItem
}
