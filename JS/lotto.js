function lotto() {
    let uniqueNumbers = [];
    while (uniqueNumbers.length < 6) {
        let randomNumber = Math.floor(Math.random() * 36) + 1;
        if (!uniqueNumbers.includes(randomNumber)) {
            uniqueNumbers.push(randomNumber);
        }
    }
    document.getElementById('word').innerHTML=uniqueNumbers;
}