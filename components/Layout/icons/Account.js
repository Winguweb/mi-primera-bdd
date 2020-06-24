import React from 'react'

const Account = ({active}) => (
    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="22" height="18" viewBox="0 0 22 18">
    <defs>
        <path id="prefix__b" d="M0 64H240V899H0z"/>
        <path id="prefix__c" d="M2.453 15.731V2.949l8.55 7.058 8.544-7.058v12.782H2.453zm15.75-13.444l-7.155 5.761-7.25-5.761h14.404zM19.25.75H2.75C1.739.75.917 1.572.917 2.583v12.834c0 1.01.822 1.833 1.833 1.833h16.5c1.011 0 1.833-.822 1.833-1.833V2.583c0-1.01-.822-1.833-1.833-1.833z"/>
        <filter id="prefix__a" width="105.4%" height="101.7%" x="-2.3%" y="-.4%" filterUnits="objectBoundingBox">
            <feMorphology in="SourceAlpha" radius=".5" result="shadowSpreadOuter1"/>
            <feOffset dx="1" dy="4" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/>
            <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.454901961 0 0 0 0 0.266666667 0 0 0 0 0.745098039 0 0 0 0.745602054 0"/>
        </filter>
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(-24 -300)">
        <use fill="#000" filter="url(#prefix__a)" href="#prefix__b"/>
        <use fill="#FFF" href="#prefix__b"/>
        <g transform="translate(24 300)">
            <use fill={active ? '#7444BE' : '#718096'} href="#prefix__c"/>
        </g>
    </g>
</svg>

)

export default Account