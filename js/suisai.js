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

const createLetterNumber = (value, letters) => ( { value, letters })
const letterToNumberList = [
    createLetterNumber(1, '1aijqy'),
    createLetterNumber(2, '2bkr'),
    createLetterNumber(3, '3clsg'),
    createLetterNumber(4, '4dmt'),
    createLetterNumber(5, '5ehnx'),
    createLetterNumber(6, '6uvw'),
    createLetterNumber(7, '7oz'),
    createLetterNumber(8, '8fp'),
    createLetterNumber(9, '9'),
]
function calculateLetterToNumber(text) {
    console.log(text)
    let letters = text.split("")
    console.log(letters)
    let result = 0
    letters.forEach(letter => {
        letterToNumberList.forEach(letterValue => {
            console.log(letter)
            if (letterValue.letters.includes(letter.toLowerCase())) {
                return result += letterValue.value
            }
        })
    })
    console.log('result', result)
    return result
}
