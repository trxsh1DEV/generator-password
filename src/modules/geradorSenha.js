const rand = (max,min) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65,91));
const geraMinuscula = () => String.fromCharCode(rand(97,123));
const geraNumbers = () => String.fromCharCode(rand(48,58));
const symbols = '!@#$%&*-_()?/.^~'
const geraSymbols = () => symbols[rand(0, symbols.length)];

export default function generatePassword(qtde, maiusculas, minusculas, numb, symb){
    const passwordArray = [];
    qtde = Number(qtde);

    for (let i = 0; i < qtde; i++) {
        // Avaliação de curto circuito
        maiusculas && passwordArray.push(geraMaiuscula());
        minusculas && passwordArray.push(geraMinuscula());
        numb && passwordArray.push(geraNumbers());
        symb && passwordArray.push(geraSymbols());
    }
    return passwordArray.join('').slice(0,qtde);
}
// console.log(generatePassword(10,true,true))