//Complete the function that accepts a string parameter, 
//and reverses each word in the string. All spaces in the string should be retained.

// Example:
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"

function reverseWord (str) {
    let i = str.length - 1;
    let result = "";
for (i >= 0; str.length - 1; i -= 1) {
    result += str[i];
}
return result.split(" ").reverse().join("");
}

//Идея состоит в том, чтобы сначала преобразовать строку в массив символов, а затем вызвать Array.prototype.reverse() метод для реверсирования массива на месте. Наконец, соедините массив обратно в строку с помощью Array.prototype.join() метод.

//Чтобы преобразовать строку в массив символов, вы можете использовать любой из следующих методов.