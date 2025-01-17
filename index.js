// Code your solution in this file!

function distanceFromHqInBlocks (blocks) {
    const headquarterLocation = 42
    if (blocks < headquarterLocation) {
        return  headquarterLocation - blocks
    } else if (blocks > headquarterLocation) {
        return blocks - headquarterLocation 
    }
    
}

// console.log(`This is the blocks from the 42nd street to the 43rd street: ${distanceFromHqInBlocks(43)}`)
// console.log(`This is the blocks from the 42nd street to the 50th street: ${distanceFromHqInBlocks(50)}`)
// console.log(`This is the blocks from the 42nd street to the 34th street: ${distanceFromHqInBlocks(34)}`)

function distanceFromHqInFeet (feet) {
    const headquarterLocation = 42
    if (feet > headquarterLocation) {
        return (feet - headquarterLocation) * 264
    } else if (feet < headquarterLocation) {
        return (headquarterLocation - feet) * 264 
    }
}

// console.log(`This is feet distance from the Headquarters: ${distanceFromHqInFeet(43)}`)
// console.log(`This is feet distance from the Headquarters: ${distanceFromHqInFeet(50)}`)
// console.log(`This is feet distance from the Headquarters: ${distanceFromHqInFeet(34)}`)

function distanceTravelledInFeet (currentLoc, destination) {
    if (currentLoc > destination) {
        return (currentLoc - destination) * 264
    } else if (currentLoc < destination) {
        return (destination - currentLoc) * 264
    }
}

// console.log(`This is distance to destination: ${distanceTravelledInFeet(43,48)}`)
// console.log(`This is distance to destination: ${distanceTravelledInFeet(50,60)}`)
// console.log(`This is distance to destination: ${distanceTravelledInFeet(34,28)}`)

function calculatesFarePrice (currentLoc, destination) {
    let distance = distanceTravelledInFeet(currentLoc, destination)
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return 2.56;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }
}

// console.log(`This is your fare price: ${calculatesFarePrice(43,44)}`)
// console.log(`This is your fare price: ${calculatesFarePrice(34,32)}`)
// console.log(`This is your fare price: ${calculatesFarePrice(50,58)}`)
// console.log(`This is your fare price: ${calculatesFarePrice(34,24)}`)
