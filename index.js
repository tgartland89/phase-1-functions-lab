function distanceFromHqInBlocks(fromValue) {
    return Math.abs(fromValue - 42)
  }
  function distanceFromHqInFeet(fromValue){
    return distanceFromHqInBlocks(fromValue)*264
  }
  function distanceTravelledInFeet(startingBlock,endingBlock){
    return Math.abs(endingBlock - startingBlock)*264;
  }
  function calculatesFarePrice(start, destination){
    let diff = distanceTravelledInFeet(start,destination)
    let farePrice = 0
    console.log(diff)
    if (diff <= 400){
        farePrice = 0
    } else if (diff && diff < 2000) {
        farePrice = (diff - 400) * 0.02
    }else if (diff > 2000 && diff < 2500) {
        farePrice = 25;
      } else if (diff > 2500) {
        farePrice = "cannot travel that far"
      }
      return farePrice
    }
