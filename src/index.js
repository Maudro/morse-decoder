const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let massiv = translateInMorse(expr);
    let i = 0;
    let result = "";
    for (i; i < massiv.length;i++) {
        if (massiv[i] != ""){
            result += MORSE_TABLE[massiv[i]];
        } else {
            result += " ";
        }
        
    }
    return result;
}

function split (spr) {
    let letters = [];
    let counter = 0;
    for (let i = 0; i < spr.length;i += 10) {
        letters[counter] = spr.slice(i, i + 10);
        counter++;
    }
    return letters;
}

function translateInMorse (spr) {
    let massiv = split(spr);
    let i = 0;
    let result = [];
    for (i; i < massiv.length; i++) {
        let string = "";
        for (let y = 0; y <= 4; y++) {            
            if (massiv[i].slice(y * 2, y * 2 + 2) == '10') {
                string += ".";
            } else if (massiv[i].slice(y * 2, y * 2 + 2) == '11'){
                string += "-";
            }           
        }
        result[i] = string;
    }
    return result;
}

module.exports = {
    decode
}