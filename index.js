const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(recordArray) {
  if (!!recordArray.find( function(r) { return  r.result === 'W'} )) {
    return recordArray.find( function(r) { return  r.result === 'W'} ).year
  } else {
    return undefined 
  }
 
} 