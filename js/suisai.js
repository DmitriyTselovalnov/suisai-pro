function simplify(text = "") {
    // console.log(`На входе строка ${text}`)
    let formatedText = formatText(text)
    let result = reduceNumberSimTople(formatedText)
    // console.log(`На выходе строка ${result}`)
    return result
}

function formatText(text = "") {
    if (text == "") return 0
    // console.log(typeof text)
    if ( typeof text === 'number') return text
    return text.replace(/\D/g, "")
}

function reduceNumberSimTople(number) {
    if (number < 9) return number
    while (number > 9) {
        number = getSumNumber(number)
    }
    return number
}

function getSumNumber(num) {
    let sum = 0, tmp;
    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        sum += tmp;
    }
    return sum;
}


// simplify()
// simplify("123f")
// simplify(124231)
// simplify("12221234")


// console.log(reduceNumberSimTople(46));

// module.exports = {
//     simplify,
//     formatText,
//     reduceNumberSimTople,
//     getSumNumber
// }