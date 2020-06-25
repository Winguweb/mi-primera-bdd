import React from 'react'

const Opportunity = ({active}) => (
  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Dashboard" transform="translate(-24.000000, -354.000000)" fill={active ? '#7444BE' : '#718096'}>
            <g id="Nav/Menu/List--Copy-6" transform="translate(0.000000, 337.000000)">
                <g id="icon-target" transform="translate(23.000000, 16.000000)">
                    <g id="goal" transform="translate(1.000000, 1.000000)">
                        <path d="M20.3849792,5.26098633 L21.4519806,4.19415283 C21.6292267,4.0167389 21.6876373,3.75254821 21.601532,3.5170593 C21.5154266,3.28140261 21.300415,3.11724854 21.0503235,3.09609988 L19.0709076,2.92909242 L18.9039001,0.949676492 C18.8829193,0.699752797 18.7185974,0.484741211 18.4831085,0.398635875 C18.2476196,0.31236266 17.983429,0.370773305 17.806015,0.548187234 L16.7390137,1.61502077 C15.0135498,0.557083141 13.04068,0 11,0 C8.06184388,0 5.29942321,1.1442108 3.22181703,3.22181703 C1.1442108,5.29942321 0,8.06184388 0,11 C0,13.9381561 1.1442108,16.7005768 3.22181703,18.778183 C5.29942321,20.8557892 8.06184388,22 11,22 C13.9381561,22 16.7005768,20.8557892 18.778183,18.778183 C20.8557892,16.7005768 22,13.9381561 22,11 C22,8.95932005 21.4429169,6.98661803 20.3849792,5.26098633 Z M17.8320312,3.57983398 C17.858551,3.89303587 18.1069641,4.14144895 18.420166,4.16796875 L19.5590057,4.26397705 L18.0175018,5.80548096 L16.3363495,5.66365052 L16.194519,3.98249818 L17.7360229,2.44099427 L17.8320312,3.57983398 Z M13.1914062,11 C13.1914062,12.2083283 12.2083283,13.1914062 11,13.1914062 C9.79167174,13.1914062 8.80859375,12.2083283 8.80859375,11 C8.80859375,9.79167174 9.79167174,8.80859375 11,8.80859375 C11.3701019,8.80859375 11.7187195,8.90107728 12.024704,9.0637207 L10.5442963,10.5442963 C10.2925262,10.7958984 10.2925262,11.2039337 10.5442963,11.4557037 C10.6700134,11.5815887 10.8350067,11.6445312 11,11.6445312 C11.1649933,11.6445312 11.3299866,11.5815887 11.4557037,11.4557037 L12.9362793,9.97529603 C13.0989227,10.2812805 13.1914062,10.6298981 13.1914062,11 L13.1914062,11 Z M12.9616242,8.12680052 C12.4026947,7.74411009 11.7271118,7.51953125 11,7.51953125 C9.08084109,7.51953125 7.51953125,9.08084109 7.51953125,11 C7.51953125,12.9191589 9.08084109,14.4804688 11,14.4804688 C12.9191589,14.4804688 14.4804688,12.9191589 14.4804688,11 C14.4804688,10.2728882 14.2558899,9.59730531 13.8731995,9.03837584 L15.7134704,7.19810485 C16.5542145,8.23841859 17.0585938,9.5613861 17.0585938,11 C17.0585938,14.3406525 14.3406525,17.0585938 11,17.0585938 C7.65934752,17.0585938 4.94140625,14.3406525 4.94140625,11 C4.94140625,7.65934752 7.65934752,4.94140625 11,4.94140625 C12.4386139,4.94140625 13.7615814,5.44578551 14.8018952,6.28652956 L12.9616242,8.12680052 Z M17.8666077,17.8666077 C16.032547,19.7008362 13.5939026,20.7109375 11,20.7109375 C8.40609739,20.7109375 5.96745299,19.7008362 4.13339231,17.8666077 C2.2991638,16.032547 1.2890625,13.5939026 1.2890625,11 C1.2890625,8.40609739 2.2991638,5.96745299 4.13339231,4.13339231 C5.96745299,2.2991638 8.40609739,1.2890625 11,1.2890625 C12.69693,1.2890625 14.3406525,1.72496032 15.7984009,2.55563352 L15.0714569,3.2825775 C14.9539642,3.40007018 14.8869934,3.55751039 14.8827972,3.7218323 C14.8822937,3.74533079 14.8829651,3.76882937 14.8848114,3.79249574 L14.9715882,4.82089231 C13.8256989,4.08169558 12.4621124,3.65234375 11,3.65234375 C6.94851687,3.65234375 3.65234375,6.94851687 3.65234375,11 C3.65234375,15.0514831 6.94851687,18.3476562 11,18.3476562 C15.0514831,18.3476562 18.3476563,15.0514831 18.3476563,11 C18.3476563,9.53788756 17.9183044,8.17430114 17.1791077,7.02841184 L18.2075043,7.11518861 C18.2256317,7.11653138 18.2437591,7.11737061 18.2617188,7.11737061 C18.26474,7.11737061 18.2679291,7.11703489 18.2709503,7.11686705 C18.2795105,7.11686705 18.2879028,7.11619567 18.296463,7.11569212 C18.3103943,7.11485289 18.3244934,7.11401367 18.3382568,7.11233523 C18.346817,7.11116029 18.3553772,7.10981752 18.3639374,7.10847474 C18.3775329,7.1062927 18.3909607,7.10377504 18.4043884,7.10075377 C18.4129486,7.09873961 18.421341,7.09655762 18.4297333,7.09437562 C18.4428253,7.09085085 18.4557495,7.08682253 18.4686737,7.0824585 C18.4770661,7.07960511 18.4852905,7.07675169 18.493515,7.07356263 C18.5061035,7.06869505 18.5185241,7.06332395 18.5309448,7.05744935 C18.5388336,7.05392454 18.5467224,7.05039977 18.5546112,7.04637145 C18.5670319,7.0399933 18.5791168,7.03294371 18.5910339,7.02589418 C18.5982513,7.02153014 18.6054688,7.01750182 18.6125183,7.01313783 C18.6252747,7.00474547 18.6375275,6.99568177 18.6497803,6.9864502 C18.655487,6.9820862 18.6613617,6.97822572 18.6669007,6.97369385 C18.6843567,6.95959473 18.7013092,6.94465638 18.7174225,6.9285431 L19.4443665,6.20159912 C20.2750397,7.65934752 20.7109375,9.30307005 20.7109375,11 C20.7109375,13.5939026 19.7008362,16.032547 17.8666077,17.8666077 L17.8666077,17.8666077 Z" id="Shape" fillRule="nonzero"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
  </svg>
)

export default Opportunity