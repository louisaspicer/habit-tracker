import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function WaveBackground(props: any) {
    return (
        <Svg
            width={375}
            height={137}
            viewBox="0 0 375 137"
            fill="none"
            {...props}
        >
            <G clipPath="url(#prefix__clip0)">
                <G clipPath="url(#prefix__clip1)">
                    <Path
                        d="M681.703-55.017l-72.472-217.831c-4.988-15.001-11.509-31.697-26.12-37.732-10.77-4.439-22.998-1.71-34.302 1.079C276.602-242.444 4.404-175.389-267.787-108.347c-19.635 4.835-39.585 9.805-57.022 20.028-17.437 10.223-32.353 26.646-35.871 46.56-3.476 19.705 4.825 40.233 18.483 54.861 13.657 14.628 32.101 23.963 51.046 30.374 73.525 24.896 160.001 6.441 216.97-46.284 15.253 24.115 46.918 32.283 75.469 27.2l31.976 17.262c18.922 10.214 38.241 20.572 59.396 24.37 19.989 3.59 41.193 1.242 60.129 8.575 18.558 7.183 32.392 22.655 48.011 34.993 15.619 12.338 36.397 22.056 55.012 15.041 26.253-9.889 35.719-48.132 63.39-52.768 17.386-2.919 33.246 9.212 47.542 19.543 14.292 10.322 33.169 19.746 48.753 11.51 22.484-11.882 19.423-50.666 42.754-60.775 16.287-7.057 33.893 4.735 49.439 13.299 35.809 19.716 79.997 23.577 118.676 10.358 31.748-10.846 61.494-36.398 64.716-69.802 1.69-17.351-3.886-34.483-9.379-51.015z"
                        fill="#FF7171"
                    />
                </G>
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" d="M0 0h375v137H0z" />
                </ClipPath>
                <ClipPath id="prefix__clip1">
                    <Path
                        fill="#fff"
                        transform="rotate(-16.47 -453.894 1264.029)"
                        d="M0 0h1009.39v421.35H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    );
}

export default WaveBackground;
