//I think the last 4 testers are incorrect on the test site
function prime_position(position){
    //Initializer
    var val = 0;
    var pNum = 0;
    var array = [];
    //Ensures in range
    while(position > array.length){
        val++;
        if(2 > val){
            pNum = 2;
        }
        for(var i = 2; i <= Math.sqrt(val); i++){
            if(val % i == 0){
                pNum++;
            }
            if(pNum >= 1){
                break;
            }
        }
        if(pNum <= 0){
            array.push(val);
        }else{
            pNum = 0;
        }
    }
    //Final count
    var primeNumber = array[num-1];
    return primeNumber;
}

function sort_subtract(num){
    str = String(num);
    digitsHiToLow = "";
    digitsLowToHi = "";
    array = [""];
    var s = str.length;

    for(var i = 1; i < s + 1; i++){
        array.push(str.substring(i - 1,i));
    }
    //Sorts digits
    array.sort((a,b) => a - b);

    for(var z = array.length - 1; z >= 0; z--){
        digitsLowToHi += array[z];
    }

    for(var x = 0; x < array.length; x++){
        digitsHiToLow += array[x];
    }
    //Final value calculation
    var htl = parseInt(digitsHiToLow, 10);
    var lth = parseInt(digitsLowToHi, 10);
    return lth - htl;
}