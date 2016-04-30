var pluralName;
var mascotName;

function shuffleNames(){
    var names = [
        'Nessie',
        'Orpheus',
        'Carl',
        'Rasputin',
        'Ivan',
        'Zach',
        'Dongus',
        'Coco',
        'Alfie',
        'Sonic',
        'Collin',
        'Don Quixote',
        'Tom',
        'Greg',
        'Felicia',
        'Kanye',
        'Dio',
        'Kate',
        'Kurt',
        'Brandon',
        'Janet',
        'Chloe',
        'Aiko',
        'Najah',
        'Rachel',
        'Manny',
        'Freddy',
        'Quentin',
        'Brutus',
        'Ignacio',
        'Balthazar',
        'Alistair',
        'Ozymandias',
        'Kubla Khan',
        'Jebediah',
        'Ezekiel',
        'Ralph',
        'Velma',
        'Horatio',
        'd\'Artagnan',
        'Jessica'
        ];
        
    var nameIndex = Math.floor(Math.random() * names.length);
    mascotName = names[nameIndex];
    var lastChar = mascotName.slice(-1);
    if(lastChar == "s"){
        pluralName = mascotName + '\''
    }
    else{
        pluralName = mascotName + '\'s'
    }
    $("#nameBox").append(mascotName);
}


function shuffleAnimals(){
    var animals = [
        'kangaroo',
        'capybara',
        'mammoth',
        'armadillo',
        'dinosaur',
        'tiger',
        'kiwi',
        'unicorn',
        'chameleon',
        'dolphin',
        'bat',
        'falcon',
        'quetzal',
        'cockatoo',
        'duck',
        'Donald Trump',
        'Ted Cruz',
        'Hillary Clinton',
        'mole',
        'leopard',
        'grizzly bear',
        'sloth',
        'toad',
        'skeleton',
        'banana slug',
        'Komodo dragon',
        'water buffalo'
        ];
        
    var animalIndex = Math.floor(Math.random() * animals.length);
    var mascotAnimal = animals[animalIndex];
    $("#animalBox").prepend(mascotName);
    $("#animalBox").append(mascotAnimal);
}

function shuffleHobbies(){
    var hobbies = [
        'code',
        'hack',
        'play tennis',
        'go running',
        'go planespotting',
        'draw graphs',
        'play RTS games',
        'program TI-84 graphing calculators (TM)',
        'practice inter-universal geometry',
        'jetski',
        'waterski',
        'roller blade',
        'fight in gladiator battles',
        'just scream',
        'make offerings to the alien overlord Xenu',
        'collect Soviet era coins',
        'cry while eating a full tub of Ben & Jerry\'s',
        'play pickup tether ball games',
        'windsurf',
        'hunt bugs',
        'get buried alive',
        'perform magic tricks'
        ];
        
    var hobbyIndex = Math.floor(Math.random() * hobbies.length);
    var mascotHobby = hobbies[hobbyIndex];
    $("#hobbyBox").prepend(mascotName);
    $("#hobbyBox").append(mascotHobby);
}

function shuffleFoods(){
    var foods = [
        'pizza',
        'tacos',
        'Pad Thai',
        'salad',
        'Soylent',
        'bagels with lox',
        'roast chicken',
        'ramen',
        'straight-up yeast',
        'literal cold turkey',
        'activated almonds',
        'borscht',
        'old cellar doors',
        'haggis',
        'hickory-smoked horse butthole'
        ];
        
    var foodIndex = Math.floor(Math.random() * foods.length);
    var mascotFood = foods[foodIndex];
    $("#foodBox").prepend(pluralName);
    $("#foodBox").append(mascotFood);
}

function shuffleColors(){
    var colors = [
        'purple',
        'blue',
        'pink',
        'yellow',
        'orange',
        '#000000',
        'chartreuse',
        'periwinkle',
        'taupe',
        'green',
        'red',
        'gunmetal',
        'mauve',
        'rose quartz',
        'fuchsia',
        'serenity',
        'oxblood',
        'hack club red',
        'malachite',
        'razzmatazz',
        'Cal Poly green',
        'dandelion',
        'fuzzy wuzzy (yes, that\'s a real color)'
        ];
        
    var colorIndex = Math.floor(Math.random() * colors.length);
    var mascotColor = colors[colorIndex];
    $("#colorBox").prepend(pluralName);
    $("#colorBox").append(mascotColor);
}

window.onload = function(){
    shuffleNames();
    shuffleAnimals();
    shuffleHobbies();
    shuffleFoods();
    shuffleColors();
}