const morseCodeMap: { [key: string]: string } = {
    A: ".-",    B: "-...",  C: "-.-.",  D: "-..",
    E: ".",     F: "..-.",  G: "--.",   H: "....",
    I: "..",    J: ".---",  K: "-.-",   L: ".-..",
    M: "--",    N: "-.",    O: "---",   P: ".--.",
    Q: "--.-",  R: ".-.",   S: "...",   T: "-",
    U: "..-",   V: "...-",  W: ".--",   X: "-..-",
    Y: "-.--",  Z: "--..",
  
    0: "-----", 1: ".----", 2: "..---", 3: "...--",
    4: "....-", 5: ".....", 6: "-....", 7: "--...",
    8: "---..", 9: "----.",
  
    " ": "/"
};

const invertedMorseCodeMap: { [key: string]: string } = Object.fromEntries(
    Object.entries(morseCodeMap).map(([k, v]) => [v, k])
  );
  

export function textToMorse(texto: string): string {
    return texto
    .toUpperCase()
    .split("")
    .map(char => morseCodeMap[char] || "")
    .join(" ")
}

export function morseToText(morse: string): string{
    return morse
    .split(" ")
    .map(code => invertedMorseCodeMap[code] || "")
    .join("")
}

const morse = textToMorse("Ola mundo 123")
console.log("Morse:", morse)

const texto = morseToText(morse)
console.log("Texto:", texto)