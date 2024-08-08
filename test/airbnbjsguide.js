const list = [1,2,3,4,5,6,7,];
list.forEach(function(number){
    console.log(number);
    return number;
});
for (const number of list) {
    console.log(`For of loop: ${number}`)
    return number;
}