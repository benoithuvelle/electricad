import React from "react";

export default function Floor(props) {
    //console.log('floor rendering')

    let { polygon } = props;

    //console.log(polygon)

    let d = polygon.map(point => [point[0], point[1]].join(" "));

    return <polygon points={polygon} fill="#ffffaa" stroke="steelblue" />;
}
///add memo
