const tile = require('./tiles')

makeWall = function(obj){
    for(const tile in obj){
        if(obj[tile] >= 34){
                tileWall.push(tile)	
        } else {
            for(let i = 0; i < 4; i++){
                tileWall.push(tile)
        }
    }
}
console.log(tileWall.flat())
};

test