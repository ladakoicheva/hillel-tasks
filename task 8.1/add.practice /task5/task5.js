const words = ["apple", "banana", "avocado", "blueberry", "apricot"];



//1. С помощью filter оставить только слова, начинающиеся на букву "a".
const filter = words.filter((word) => word[0] === 'a');
console.log(filter);
//2. С помощью reduce сгруппировать все слова по первой букве в объект, где ключ — буква, значение — массив слов.
const group = words.reduce((acc, word) => {
    const firstLetter = word[0];
    if (!acc[firstLetter]) {
        acc[firstLetter] = [];
    }
    acc[firstLetter].push(word);
    return acc;
}, {});
console.log(group);