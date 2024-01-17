var arr1 = [50, 52, 23, 72, 84, 29, 95, 43, 56, 61, 73]
var arr20va50 = []
var juft = []
var toq = []

arr1.forEach((num) => {
    if (num >= 20 && num <= 50) {
        arr20va50.push(num);
    }
});

arr1.forEach((num, index) => {
    if (index % 2 == 0 && num >= 50) {
        juft.push(num);
    }else if(index % 2 !== 0 && num >= 50){
        toq.push(num);
    }
    
});

console.log("10 va 50 oralig`idagi raqamlar:", arr20va50)
console.log("Juft index va 50-dan katta:", juft)
console.log("Toq index va 50-dan katta:", toq)

console.log(" ");


var familiya = ["Muhammadjonov", "Isakova", "Ikromov", "Anvarovna", "Bahodirov", "Hakimova"]
var boys = []
var girls = []
familiya.forEach((item) => {
    if(item[item.length - 1] == 'a' ){
        girls.push(item)
    }else if(item[item.length - 1] == 'v' ){
        boys.push(item)
    }
});

console.log("Qiz bollar:", girls)
console.log("O`g`il bollar:", boys)




