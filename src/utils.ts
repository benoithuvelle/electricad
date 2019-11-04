import { Path, Points } from "./interfaces";
import { Room } from './interfaces'
import Point from "./components/Point";

export function getPolygon(points) {
    return points.map((point) => [point.x, point.y].join(" "));
}

export function getPath(points) {
    return points.reduce((acc, current, i) => {
        acc[i] = [
            current];
        if (i > 0) {
            acc[i - 1].push(current)
        }
        if (i === points.length - 1) acc[i].push(acc[0][0]);
        return acc;
    }, []);
}


export function getAllPointsButThisRoom(rooms, roomIndex) {
    let array = rooms
        .filter((_, i) => i !== roomIndex)
        .reduce((acc, curr, i) => {
            curr.points.map(point => {
                point.dx = curr.coords[0]
                point.dy = curr.coords[1]
                acc.push(point)
            })
            return acc
        }, [])
    return array
}

export function getPointsAbsolutePosition(room) {
    let array = room.points
        .map(point => {
            //console.log(point)
            point.dx = room.coords[0]
            point.dy = room.coords[1]
            return point
        })
    return array
}

export function getAllPoints(rooms) {
    let array = rooms.reduce((acc, curr, i) => {
        const roomPoints = curr.getPoints()
        acc.push(...roomPoints)
        return acc
    }, [])
    return array
}

export function getThisRoomPoints(room: Room): Points {
    let array = room.points.reduce((acc, curr, i) => {
        acc[i] = {
            x: curr[0],
            y: curr[1],
            dx: curr[0] + room.coords[0],
            dy: curr[1] + room.coords[1],
            i: i
        }
    }, [])
    return array
}

// export function compareRoomPoints(rooms) {
//     rooms.forEach((room, i) => {
//         const allPoints = getAllPointsButThisRoom(rooms, i)
//         let paths = getPath(room.points)
//         paths.forEach(path => {
//             allPoints.forEach(point => {
//                 console.log(point)
//                 isPointInPath(path, point)
//             });
//         });
//     });
// }

export function isPointInPath(path, point) {
    const [a, b] = path

    console.log(a)

    const ax = a.XY[0] + a.XY.dx
    const ay = a.XY[1] + a.XY.dy
    const bx = b.XY[0] + b.XY.dx
    const by = b.XY[1] + b.XY.dy

    const dx = bx - ax
    const dy = by - ay

    const m = dy / dx

    // ay = m * ax + offset  

    const offset = ay - m * ax

    let equation
    if (dx === 0) { //verticale
        console.log('droite verticale')
        equation = ax - (point[0] + point.dx)
    } else if (dy === 0) { //horizontale
        equation = ay - (point[1] + point.dy)
    } else {
        equation = ay - m * ax - offset
    }
    console.log(equation)
    console.log(point[1] + point.dx - m * (point[0] + point.dy) - offset)

    if (point[1] + point.dx - m * (point[0] + point.dy) - offset === equation) {
        console.log("coucou petite peruche")
    }


    return equation

}


export function addCorner(e, pathPoints) { //// props needed === pathPoints / 

    e.persist()
    //////////////console.log(e.target.getBoundingClientRect())
    //////////////console.log(e.clientX)
    ////////////console.log(e.target)

    let box = e.target.getBoundingClientRect()
    ////////////console.log(box.left)
    ////////////console.log(e.clientX)
    let pointer = [e.clientX, e.clientY]

    let newPoint = []

    newPoint[0] = pathPoints[0].XY[0] < pathPoints[1].XY[0] ? pointer[0] - box.left + pathPoints[0].XY[0] : pointer[0] - box.left + pathPoints[1].XY[0]
    // y = mx + b

    let a = pathPoints[0]
    let b = pathPoints[1]

    //////////console.log(a.id.split('.')[2],b.id.split('.')[2])

    let dx = a.XY[0] - b.XY[0]
    let dy = a.XY[1] - b.XY[1]

    let m = dy / dx
    let p = a.XY[1] - m * a.XY[0]

    //////////////console.log(m)

    if (m === 0) {
        //////////////console.log('ligne horizontale')
        newPoint[1] = a.XY[1]
    }

    else if (m === Infinity || m === -Infinity) {
        //////////////console.log('ligne verticale')
        newPoint[0] = a.XY[0]
        newPoint[1] = a.XY[1] < b.XY[1] ? Math.abs(pointer[1] - box.top + a.XY[1]) : Math.abs(pointer[1] - box.top + b.XY[1])
    }

    else {
        newPoint[1] = m * newPoint[0] + p //+ (a.XY[0])
        //point.y = m * point.x + p
    }

    //point.id = room.id + '.corner.' + room.points.length + 1

    let index1 = a.i
    let index2 = b.i
    console.log([newPoint, newPoint])

    return [newPoint, newPoint]

    //points.splice(index1 + 1, 0, newPoint, newPoint)

    //setPoints([...points])
    //////console.log(points)
}

