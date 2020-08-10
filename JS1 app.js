//ex.1
for(i=1;i<=20; i++)
{
    console.log(i);
}

//ex2
for (var n = 1; n < 20; n += 2) {
    console.log(n);
}

//ex3
var array=[5,23,6,45,78,3,98,15,27];
var S=0;
var i;
for(var i=0; i<array.length; i++){
 S+=array[i];
}console.log(S)

//ex4
var array=[6,23,6,45,79,3,98,18,22];
var max=array[0];
for (var i = 0; i < array.length; i++) {
    if (array[i] > max){ 
        max = array[i];
    }
}console.log(max);

//ex4 varianta
var array=[6,23,6,45,79,3,98,18,22];
console.log(Math.max(...array));

//ex5
var array1=[2,5,8,22,5,2,5,18,5,2];
var char="5";
for(var i=0;i<array1.lenght;i++){
    if(array1[i]==char){
        console.log(char)
    }
}
