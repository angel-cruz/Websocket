/**
 * Set are new object type with ES6
 * that allow to create collections of unique value. The values in 
 * a set can be either simple primitives like string or integers, but more complex object types like
 * object literals or arrays can also be part of a set. avai
 */

 let animals = new Set();

 animals.add('pig');
 animals.add('panda');
 animals.add('turtle');
 animals.add('rat');
 console.log(animals.size); // answer should 4, seems like its being stored in a collection of items which where never declared
 animals.add('panda');
 console.log(animals.size); //size of object remains at 4

    console.log(animals.has('pig')); //true returns a boolean
    animals.delete('pig');
    console.log(animals.has('pig')); // false ?

    animals.forEach(animals => {
        console.log('hey ${animal}!');
    });

    animals.clear(); //clears the object we collected
    console.log(animals.size); //0

    /*************************************************************************************************************************** */

    let myAnimals = new Set(['pig','turtle','pig','pig']);

    myAnimals.add(['koala','sheep']);
    myAnimals.add({name: 'Rud', type: 'turtle'});
    console.log(myAnimals.size); //4

    myAnimals.forEach(animal => {
        console.log(animals);
    });
    
    /*************************************************************************************************************************** */

    console.log('only unique characters will be in this set.'.length); //43
    let sentencce = new Set ('only unique characters will be in this set.');

    /*************************************************************************************************************************** */

    let moreAnimals = new Set(['wolf','horse','dog','rabbit']);

    for (let animal of moreAnimals) {
        console.log('howdy ${ animal }');
    }

    /**sample output
     * Howdy wolf
     * Howdy horse
     * Howdy dog
     * Howdy rabbit
     */

    /*************************************************************************************************************************** */

    let partyItems = new Set (['pizza', 'champagne','confetti']);
    let items = partyItems.values();

    console.log(items.next());
    console.log(items.next());
    console.log(items.next());
    console.log(items.next().done);
    
