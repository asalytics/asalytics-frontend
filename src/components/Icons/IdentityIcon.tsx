import * as React from "react";

function IdentityIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="80"
            height="81"
            viewBox="0 0 80 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect y="0.25" width="80" height="80" fill="url(#pattern0)" />
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1028_21" transform="scale(0.00694444)" />
                </pattern>
                <image
                    id="image0_1028_21"
                    width="144"
                    height="144"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
}

const MemoIdentityIcon = React.memo(IdentityIcon);
export default MemoIdentityIcon;