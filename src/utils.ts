import {Path, Points} from "./interfaces";

export function getPolygon(points: Points) {
    return points.map((point) => [point[0], point[1]].join(" "));
}

export function getPath(points: Points) {
    return points.reduce<Path>((acc, current, i) => {
        acc[i] = [current];
        //acc[i].room = this.id ////
        //acc[i].id = this.id + '.path' + i
        if (i > 0) acc[i - 1].push(current);
        if (i === points.length - 1) acc[i].push(acc[0][0]);
        return acc;
    }, []);
}
/*
export function getFullPath(rooms) {
    const array = rooms.reduce((prev, curr, i) => {
        getPath(curr.points).map((pathPoints) =>
            prev.push([
                parseInt(pathPoints[0]) + parseInt(curr.coords[0]),
                parseInt(pathPoints[1]) + parseInt(curr.coords[1]),
            ]),
        );

        return prev;
    }, []);
    console.log(array);
    return array;
}
*/
