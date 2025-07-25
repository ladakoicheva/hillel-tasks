let num = prompt("введи шестизначне число");
if (num.length !== 6 || isNaN(num)) {
    console.log("Це не шестизначне число");
}
else if (num[0] === num[5] && num[1] === num[4] && num[2] === num[3]) {
    console.log("число дзеркальне");
} else {
    console.log("Число не дзеркальне");
}