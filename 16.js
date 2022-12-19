function fixLetter(letter) {
    return letter
        .trim()
        .replace(/([.,?!\s])(?=\1)/g, '')
        .replace(/\s+([.,?!])/g, '$1')
        .replace(/santa claus/gi, 'Santa Claus')
        .replace(/\b([.?!] \w)|(^\w)/g, (m) => m.toUpperCase())
        .replace(/^.*\w$/, (m) => m + '.');
}
