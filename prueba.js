var str = "Make it Real";
var char= "a"
var arr=[1,2,50,70,66,100,20,15,2,7];
var i=0;
//alert(count(str,char));
//alert(filter(arr));    se llama las funciones desde aquí 
//alert(hypotenuse(3,4));
function count(str,char){
  var n=0;;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char) {

      n=n+1;
    }
  }
  return n;
}

function filter(arr){
  var new_Arr=[];
  for(var f=0;f<10;f++){
    if (arr[f]>10) {
      new_Arr[i]=arr[f];
      i=i+1;
    }
  }
  return new_Arr;
}

function hypotenuse(a,b){
  return Math.sqrt((a*a)+(b*b));
}
