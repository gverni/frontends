var pControlsClass = 'perc_input'
var pBlocksArray = []
var prevValue = 0

function updateControls (blockIndex, controlIndex) {
  var newTotal = 0
  var currControl = pBlocksArray[blockIndex][controlIndex]

  if (isNaN(parseInt(currControl.value)) || currControl < 0 || currControl > 100) {
    currControl.value = prevValue
    return 0
  }

  var controlToUpdate = pBlocksArray[blockIndex].length - 1
  if (controlIndex === controlToUpdate) { controlToUpdate = 0 }

  pBlocksArray[blockIndex].forEach(function (a) { newTotal += (parseInt(a.value) || 0) })
  newTotal -= (parseInt(pBlocksArray[blockIndex][controlToUpdate].value) || 0)

  if (newTotal > 100) {
    currControl.value = prevValue
  } else {
    currControl.value = parseInt(currControl.value)
    pBlocksArray[blockIndex][controlToUpdate].value = 100 - newTotal
  }
}

function setPrevValue (blockIndex, controlIndex) {
  prevValue = pBlocksArray[blockIndex][controlIndex].value
}

function initControls () {
  var allDivBlocks = Array.from(document.getElementsByTagName('div'))
  var pBlocks = allDivBlocks.filter(function (element) { return element.getElementsByClassName(pControlsClass).length > 0 })
  pBlocks.forEach(function (pBlock, blockIndex) {
    var length = pBlocksArray.push(Array.from(pBlock.getElementsByClassName(pControlsClass)))
    pBlocksArray[length - 1].forEach(function (pControl, controlIndex) {
      pControl.onblur = function () { updateControls(blockIndex, controlIndex) }
      pControl.onfocus = function () { setPrevValue(blockIndex, controlIndex) }
      pControl.value = 0
      if (controlIndex === (pBlocksArray[length - 1].length - 1)) { pControl.value = 100 }
    })
  })
}

