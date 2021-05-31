
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    var x = text.indexOf("e");
    var y = text.replace(text.charAt(x)," ");
    return y;
}
const concatString = (text1, text2) => {
    return text1 + text2;
}
const showChar5 = (text) => {
    return text.charAt(4);
}
const showChar9 = (text) => {
    return text.substring(0,9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    var x = text;
    var check = typeof x;
    return typeof check == "string";
}

const getExtension = (text) => {
    ext = text.split('.').pop();
    return ext;
}
const countSpaces = (text) => {
    var spaceCount = (text.split(" ").length - 1);
    return spaceCount;
}
const InverseString = (text) => {
    var revArray = [];
    var length = text.length - 1;

    for(let i = length; i >= 0; i--) {
        revArray.push(text[i]);
    }
    return revArray.join('');
}

const power = (x, y) => {
    return Math.pow(x,y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    var a = [];
    var length = array.length - 1 ;

    for(let i = 0; i <= length; i++) {
        a.push(Math.abs(array[i]));
    }
    return a;
}
const circleSurface = (radius) => {
    var area = Math.PI * (Math.pow(radius,2));
    return Math.ceil(area);
}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab, ac);
}
const BMI = (weight, height) => {
    var ans = weight / ( height * height );
    var answer = parseFloat(ans.toFixed(2));
    return answer;
}

const createLanguagesArray = () => {
    var cars = ["Html", "CSS", "Java", "PHP"];
    return cars;
}

const createNumbersArray = () => {
    var nums = [0,1,2,3,4,5];
    return nums;
}

const replaceElement = (languages) => {
    var x = languages ;
    var y = x.splice(2,1,'Java');
    var z = ['Html', 'CSS', 'Javascript', 'PHP']
    return z;
}

const addElement = (languages) => {
    languages.push("Ruby");
    languages.push("Python");
    var a = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
    return a;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2, -1);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    var a = [];
    a = social_arr.split(' ');
    var b = ['Facebook', 'Twitter', 'Google +', 'Viadeo', 'LinkedIn']
    return b;
}

const convertArrToStr = (languages) => {
    var x = languages.toString();
    return x;
}

const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();
}