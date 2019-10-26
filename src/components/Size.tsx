import React from "react";

function Size({pathPoints, visible}) {
    const [a, b] = pathPoints;
    const [ax, ay] = a;
    const [bx, by] = b;

    var dx = ax - bx;
    var dy = ay - by;

    var c = Math.floor(Math.sqrt(dx * dx + dy * dy));

    if (!visible) {
        return null;
    }

    return (
        <text>
            <textPath startOffset="45%" xlinkHref={"#" + pathPoints}>
                {c}
            </textPath>
        </text>
    );
}

export default Size;
