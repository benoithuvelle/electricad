export function getPolygon(points) {
    return points.map(point => [point[0], point[1]].join(" "));
}

export function getPath(points) {
    return points.reduce((acc, current, i) => {
        acc[i] = [current];
        //acc[i].room = this.id ////
        //acc[i].id = this.id + '.path' + i
        if (i > 0) acc[i - 1].push(current);
        if (i === points.length - 1) acc[i].push(acc[0][0]);
        return acc;
    }, []);
}

export function getFullPath(rooms) {
    const array = rooms.reduce((prev, curr, i) => {
        getPath(curr.points).map(pathPoints =>
            prev.push([
                parseInt(pathPoints[0]) + parseInt(curr.coords[0]),
                parseInt(pathPoints[1]) + parseInt(curr.coords[1])
            ])
        );

        return prev;
    }, []);
    console.log(array);
    return array;
}

export function RoomObj(id, x, y) {
    this.id = id;
    this.coords = [x, y];
    this.points = [[0, 0], [0, 150], [150, 150], [150, 0]];
}
