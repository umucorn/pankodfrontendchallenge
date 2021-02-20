import * as React from "react";

function SvgMenuIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
            x="0px" 
            y="0px" 
            viewBox="0 0 100 100" 
            enableBackground="new 0 0 100 100"
            {...props}
        >
            <rect x="5" y="5" width="90" height="20" />
            <rect x="5" y="40" width="90" height="20" />
            <rect x="5" y="75" width="90" height="20" />
        </svg>
    );
}

export default SvgMenuIcon;
