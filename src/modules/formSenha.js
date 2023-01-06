import generatePassword from "./geradorSenha";

const passwordGenerated = document.querySelector('.password');
const qtdeCharacters = document.querySelector('#qtde-characters');
const chkMaiuscula = document.querySelector('.chk-maiuscula');
const chkMinuscula = document.querySelector('.chk-minuscula');
const chkNumbers = document.querySelector('.chk-numb');
const chkSymbols = document.querySelector('.chk-symbols');
const btnGenetared = document.querySelector('#generate-password');

// Exportando função anonima
export default () => {
    btnGenetared.addEventListener('click', () => {
        passwordGenerated.classList.add('generate-password');
        passwordGenerated.innerHTML = generate();
    });
};

function generate() {
    // checked retorna true ou false (método do nativo do JS)
    if(qtdeCharacters.value > 30) return 'The password should contain until 30 characters';
    const password = generatePassword(
    qtdeCharacters.value,
    chkMaiuscula.checked,
    chkMinuscula.checked,
    chkNumbers.checked,
    chkSymbols.checked
    )
    return password || 'Not selectioned';
}