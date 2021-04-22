
Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y. 

function imprime(z,y){
    var counter=0;

    for(i=0; i<z.length; i++){
        if(z[i]>y){
            console.log(z[i]);
            counter=counter+1;
        }
    }
    console.log(counter)
}
imprime([2,4,6,8,10,],5);


//2.-Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array. //

function  {
    
}


//3.-Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].

function reemplazarNegativo(y) {
    for (i=0; i<y.length; i++){
        if(y[i]<0){
            y[i]="Dojo";
        }
    }
    return y;
    
}
z=reemplazarNegativo([-3,-4,-7,3,2,1]);
console.log(z);



//4.-Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].
function remover(arr,inicio,final){

    var rango=final-inicio+1;
    for (vari=inicio;i<= rango; i++){
        arr[i]arr[i+rango];
    }
    arr.length=arr.length-rango;
    return arr;
}
var resultado= remover([18,15,50,54,4,7,8,6],2,4);