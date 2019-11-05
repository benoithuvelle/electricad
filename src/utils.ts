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

