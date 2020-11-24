const tile = require('./tiles')

let tileWall = [];

makeWall = function(obj){
        for(const tile in obj){
            if(obj[tile] >= 34){
                    tileWall.push(tile)
            //if the value of tite is greater than or equal to 34, push tile to tilewall	
            } else {
                for(let i = 0; i < 4; i++){
                    tileWall.push(tile)
            }
            //else push tile in 4 times
        }
    }
    console.log(tileWall.flat())
};

drawFromWall = function(arr){
	const randomInt = arr.length * Math.random() << 0;
	console.log(randomInt)
}
