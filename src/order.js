function takeOrder(order, arr) {
  arr.push(order)
  if (arr.length > 3){
    arr.length = 3
  };
};

function refundOrder(num, arr) {

for (var i = 0; i < arr.length; i++){
  if (arr[i].orderNumber === num){
  arr.splice(i,1);
};
};
};




function listItems(list) {

var output = ''
for (var i = 0; i < list.length; i++){
  if (i === 0) {
    output = list[i].item;
  } else {
   output = output + ', ' + list[i].item;
  }
};
return output;
};


function searchOrder(order, flavor) {


  for(var i = 0; i < order.length; i++ ) {
    if (order[i].item === flavor) {
      return true;
    };
  };
  return false;
};


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
