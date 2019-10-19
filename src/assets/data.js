export let data = [
    {
        id: 'cuisine',
        x: 240,
        y: 240,
        points: [
            { x: 0, y: 0, id: 'cuisine.corner.' + 0 },
            { x: 100, y: 0, id: 'cuisine.corner.' + 1 },
            { x: 100, y: 234, id: 'cuisine.corner.' + 2 },
            { x: 0, y: 100, id: 'cuisine.corner.' + 3 },
        ],
        polygon() { return this.points.map(point => [point.x, point.y].join(' ')) }


    },

    {
        id: 'sdb',
        x: 600,
        y: 398,
        points: [
            { x: 0, y: 0, id: 'sdb.corner.' + 0 },
            { x: 100, y: 34, id: 'sdb.corner.' + 1 },
            { x: 100, y: 234, id: 'sdb.corner.' + 2 },
            { x: 0, y: 100, id: 'sdb.corner.' + 3 },
        ],
        polygon() { return this.points.map(point => [point.x, point.y].join(' ')) }


    },

    {
        id: 'salon',
        x: 340,
        y: 80,
        points: [
            { x: 0, y: 0, id: 'salon.corner.' + 0 },
            { x: 100, y: 0, id: 'salon.corner.' + 1 },
            { x: 100, y: 234, id: 'salon.corner.' + 2 },
            { x: 0, y: 100, id: 'salon.corner.' + 3 },
        ],
        polygon() { return this.points.map(point => [point.x, point.y].join(' ')) }


    },

]