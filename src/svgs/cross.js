import React from "react";

export default function Cross(props){
    const size = props.size || 100;

    return(
        <svg width={size} height={size} viewBox="0 0 193 157" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_3_5)">
<path d="M16 5L165 144M9 144L184 5" stroke="black" strokeWidth="10" strokeLinecap="round"/>
</g>
<defs>
<filter id="filter0_d_3_5" x="-0.000198364" y="-0.000198364" width="193" height="157" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_5"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_5" result="shape"/>
</filter>
</defs>
</svg>

    );
}