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

export function getAllPoints(rooms) {
    let array = rooms.reduce((acc, curr, i) => {
        const roomPoints = curr.getPoints()
        acc.push(...roomPoints)
        return acc
    }, [])
    return array
}

export const getPointCoords = (clickCoords, pathPoints) => {   // y = m*x + p 
    const [a, b] = pathPoints
    let [x, y] = clickCoords

    console.log('x', x)
    console.log('y', y)

    const m = (b.y - a.y) / (b.x - a.x)
    console.log('m',m)
    const p = a.y - m*a.x

    if (m === 0) {
        y = a.y
    } 
    else if (!isFinite(m)) {
        x = a.x
    } else 
        y = m*x + p

    return { x, y }

}

export function getY(point, pathPoints) {

    const [a,b] = pathPoints
    // y = m * x + p
    const dx = b.x - a.x
    const dy = b.y - a.y
    const m = dy / dx
    const p = a.y - m * a.x

    let x
    let y

    if (m === 0) {
        x = point.x
        y = a.y
    } else if (!isFinite(m)) {
        x = a.x
        y = point.y
    } else {
        x = point.x
        y = m * point.x + p
    }
    return {x,y}
}

export function closestPointToSegment(point, a, b ) {
    console.log(point)
}

export function project( p, a, b ) {
    
    var atob = { x: b.x - a.x, y: b.y - a.y };
    var atop = { x: p.x - a.x, y: p.y - a.y };
    var len = atob.x * atob.x + atob.y * atob.y;
    var dot = atop.x * atob.x + atop.y * atob.y;
    var t = Math.min( 1, Math.max( 0, dot / len ) );

    dot = ( b.x - a.x ) * ( p.y - a.y ) - ( b.y - a.y ) * ( p.x - a.x );
    
    return {
        point: {
            x: a.x + atob.x * t,
            y: a.y + atob.y * t
        },
        left: dot < 1,
        dot: dot,
        t: t
    };
}