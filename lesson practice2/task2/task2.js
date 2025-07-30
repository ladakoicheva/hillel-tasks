let result = "";
let i = 10;
while (i <= 20) {
    result = i * i;
    if (i < 20) {
        document.write(result +",");
    } else {
        document.write(result);
    }
    
    i++
}