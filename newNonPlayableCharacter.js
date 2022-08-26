function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    function walkEast(time) {
        direction = 'east'
        element.src = `./assets/red-character/east.gif`
        return new Promise(function(resolve) {
            setTimeout(function() {
               resolve()
               stop()
            }, time)
        })
    }

    function walkNorth(time) {
        direction = 'north'
        element.src = `./assets/red-character/north.gif`
        return new Promise(function(resolve) {
            setTimeout(function() {
               resolve()
               stop()
            }, time)
        })
    }

    function walkWest(time) {
        direction = 'west'
        element.src = `./assets/red-character/west.gif`
        return new Promise(function(resolve) {
            setTimeout(function() {
               resolve()
               stop()
            }, time)
        })
    }

    function walkSouth(time) {
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        return new Promise(function(resolve) {
            setTimeout(function() {
               resolve()
               stop()
            }, time)
        })
    }

    function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
        return new Promise(function(resolve) {
            setTimeout(function() {
               resolve()
               stop()
            }, time)
        })
    }

    

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}