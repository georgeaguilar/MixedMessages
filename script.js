const Phrases = {
    Anime: ['No matter how much you lie, you cannot fool your own heart.', 'Even in the darkest oceans, some light always gets through.', 'Victory and defeat, running away and crying, are what make you a man.'],
    Soccer: ['Soccer is a game of mistakes. Whoever makes the slightest mistake wins.', 'The more difficult the victory, the greater the happiness of winning.', 'Becoming a footballer is only the first half of the silent prayer that a child offers to heaven. The second part is the name of the team he wants to play for.'],
    Movies: ['After a while, you learn to ignore what others are telling you and to trust yourself.', 'Life is like a box of chocolates, you never know what is going to touch you.', 'Oh yeah, the past hurts. But you can run from it or learn from it.']
};

const randomNumber = num => {
    return Math.floor(Math.random() * num);
};

let personalPhrases = [];

for (let i in Phrases){
    let index = randomNumber(Phrases[i].length);

    if (i === 'Anime'){
        personalPhrases.push(`Your anime phrases is: ${Phrases[i][index]}`);
    } else if (i === 'Soccer'){
        personalPhrases.push(`Your soccer phrases is: ${Phrases[i][index]}`);
    } else if (i === 'Movies'){
        personalPhrases.push(`Your movie phrases is: ${Phrases[i][index]}`);
    } 
}

console.log (personalPhrases.join('\n'));
