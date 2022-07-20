import * as React from "react";

function AnalyzeIcon(props: React.SVGProps<SVGSVGElement>) {
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
                    <use xlinkHref="#image0_1028_103" transform="scale(0.00694444)" />
                </pattern>
                <image
                    id="image0_1028_103"
                    width="144"
                    height="144"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
}

const MemoAnalyzeIcon = React.memo(AnalyzeIcon);
export default MemoAnalyzeIcon;
