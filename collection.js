var word = ['あ', 'い', 'う', 'え', 'お'];

for (var i = 0; i < word.length; i++) {
    for (var j = 0; j < word.length; j++) {
        document.write('<p>' + word[i] + word[j] + '</p>');
    }
}