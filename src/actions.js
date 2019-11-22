export function Room(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.points = [
        { x: 0, y: 0, id: id +'.corner.' + 0 },
        { x: 300, y: 0, id: id +'.corner.' + 1 },
        { x: 300, y: 300, id: id +'.corner.' + 2 },
        { x: 0, y: 300, id: id +'.corner.' + 3 },
    ];
    this.polygon = function () { return this.points.map(point => [point.x, point.y].join(' ')) };
    this.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    this.path = function () {
        return this.points.reduce((acc, current, i) => {
            acc[i] = [current]
            acc[i].room = this.id ////
            acc[i].id = this.id + '.path' + i
            if (i > 0) acc[i-1].push(current)
            if (i === this.points.length -1) acc[i].push(acc[0][0])
            return acc
        }, [])
    }

}

