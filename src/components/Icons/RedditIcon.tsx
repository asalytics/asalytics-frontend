import * as React from "react";

function RedditIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fill={props.fill || "#B7BECC"}
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 12.9412C24 19.5686 18.6274 24.9412 12 24.9412C5.37258 24.9412 0 19.5686 0 12.9412C0 6.31374 5.37258 0.941162 12 0.941162C18.6274 0.941162 24 6.31374 24 12.9412ZM18.2456 11.1868C19.214 11.1868 20 11.9727 20 12.9411C20 13.6569 19.5649 14.2745 18.9895 14.5552C19.0175 14.7236 19.0316 14.892 19.0316 15.0745C19.0316 17.7692 15.9018 19.9446 12.0281 19.9446C8.15439 19.9446 5.02457 17.7692 5.02457 15.0745C5.02457 14.892 5.0386 14.7096 5.06667 14.5411C4.44913 14.2604 4.02808 13.6569 4.02808 12.9411C4.02808 11.9727 4.81404 11.1868 5.78246 11.1868C6.24562 11.1868 6.68071 11.3832 6.98948 11.678C8.1965 10.7938 9.86667 10.2464 11.7333 10.1903L12.6176 6.0078C12.6456 5.92359 12.6877 5.85342 12.7579 5.81131C12.8281 5.76921 12.9123 5.75517 12.9965 5.76921L15.9018 6.38675C16.0983 5.9657 16.5193 5.685 17.0105 5.685C17.6983 5.685 18.2597 6.2464 18.2597 6.93412C18.2597 7.62184 17.6983 8.18324 17.0105 8.18324C16.3368 8.18324 15.7895 7.64991 15.7614 6.99026L13.1649 6.44289L12.3649 10.1903C14.1895 10.2604 15.8456 10.8218 17.0386 11.678C17.3474 11.3692 17.7684 11.1868 18.2456 11.1868ZM9.24913 12.9411C8.56141 12.9411 8.00001 13.5025 8.00001 14.1903C8.00001 14.878 8.56141 15.4394 9.24913 15.4394C9.93685 15.4394 10.4983 14.878 10.4983 14.1903C10.4983 13.5025 9.93685 12.9411 9.24913 12.9411ZM12.014 18.4008C12.4912 18.4008 14.1193 18.3447 14.9754 17.4885C15.1018 17.3622 15.1018 17.1657 15.0035 17.0254C14.8772 16.899 14.6667 16.899 14.5404 17.0254C13.993 17.5587 12.8561 17.7552 12.0281 17.7552C11.2 17.7552 10.0491 17.5587 9.51579 17.0254C9.38948 16.899 9.17895 16.899 9.05264 17.0254C8.92632 17.1517 8.92632 17.3622 9.05264 17.4885C9.89474 18.3306 11.5368 18.4008 12.014 18.4008ZM13.5018 14.1903C13.5018 14.878 14.0632 15.4394 14.7509 15.4394C15.4386 15.4394 16 14.878 16 14.1903C16 13.5025 15.4386 12.9411 14.7509 12.9411C14.0632 12.9411 13.5018 13.5025 13.5018 14.1903Z"
            />
        </svg>
    );
}

const MemoRedditIcon = React.memo(RedditIcon);
export default MemoRedditIcon;