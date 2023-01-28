function aralash() {
    var words = ["HELLO!","HOLA!","SALUT!","안녕! (annyeong)","こんにちは！ (konnichiwa)","你好！ (nihao)","ALOHA!","SALOM!"];
    var word1 = Math.floor(Math.random() * 8);
    document.getElementById('word').innerHTML=words[word1];
}