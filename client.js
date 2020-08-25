let testObject = {
    key: "value",
    property: "otherValue",
    canBeNumbers: 34567,
    canBeArrays: [],
    canBeObjects: { 
        thingy: 'yes'
    } 
} // end testObject

// a useful object
const myHats = [];
const testHat = new Hat( 'knit', 'purple', 2345 )
myHats.push( new Hat( 'winter', 'yellow', 456, 'Starter' ) );
myHats.push( new Hat( 'baseball', 'purple', 17 ) );
myHats.push( new Hat( 'cowboy', 'yellow', 5367 ) );
myHats.push( new Hat( 'beanie', 'black', 5434 ) );
myHats.push( new Hat( 'fedora', 'yellow', 5676 ) );
myHats.push( new Shirt( 'yellow', 'medium' ) );

// write a function that returns all hats of a given color
function hatsOfColor( colorToCheck ){
    console.log( 'in hatsOfColor:', colorToCheck );
    let matches = []; // to hold our matches
    // loop through array (myHats)
    for( let i=0; i< myHats.length ; i++){
        // check for matches on colorToCheck
        if( myHats[ i ].color === colorToCheck){
            // any matches will be pushed into a new array
            console.log( 'match found:', myHats[ i ] );
            matches.push( myHats[ i ] );
        } // end match
    } //end for
    // return array of matches
    return matches;
} // end hatsOfColor

/// object constructor ///
function Hat( type, color, size, manufacturer ){
    this.color = color;
    this.type = type;
    this.size = size;
    this.manufacturer = manufacturer;
} // end Hat constructor

function Shirt( color, size ){
    this.color = color;
    this.size = size;
} // end Hat constructor