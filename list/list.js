function min(list) {
   return list.reduce(function (previous, current) {
      return previous < current ? previous : current;
   });
}
 
 function max(list) {
   return list.reduce(function (previous, current) {
      return previous > current ? previous : current;
   });
}