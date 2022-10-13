// Code your solution in this file!
const scuberHeadquarters = 42;
function distanceFromHqInBlocks(ending) {
    if (ending < scuberHeadquarters) {
        return scuberHeadquarters - ending
    } else 
        return ending - scuberHeadquarters;
}
distanceFromHqInBlocks()


function distanceFromHqInFeet(feet) {
    const result = distanceFromHqInBlocks(feet);
    return result * 264;
}
distanceFromHqInFeet()

//42-32
function ddistanceTravelledInFeet(start, destination) {
    if (start > destination) {
    const diffrence = (start - destination) * 264
    return diffrence;
    } else {
        const diffrence2 = (destination - start) * 264
        return diffrence2
    }
}
distanceFromHqInBlocks()
