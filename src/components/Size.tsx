import React from "react";

function Size({pathPoints, visible}) {
    const [a, b] = pathPoints;
    const [ax, ay] = a.XY;
    const [bx, by] = b.XY;

    var dx = ax - bx;
    var dy = ay - by;

    var c = Math.round(Math.floor(Math.sqrt(dx * dx + dy * dy)/5)*5)

    if (!visible) {
        return null;
    }

    return (
        <text style={{pointerEvents:'none', fill:'#404040'}}>
            <textPath startOffset="45%" xlinkHref={"#" + a.i + '.' + b.i}>
                {c}
            </textPath>
        </text>
    );
}

export default Size;
