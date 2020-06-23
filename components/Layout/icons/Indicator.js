import React from 'react'

const Indicator = ({active}) => (
  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <defs>
        <path d="M0.907216526,12.474227 L8.61855642,12.474227 C9.11959828,12.474227 9.52577295,12.8804017 9.52577295,13.3814436 L9.52577295,21.0927835 C9.52577295,21.5938253 9.11959828,22 8.61855642,22 L0.907216526,22 C0.406174674,22 -1.60684675e-16,21.5938253 -2.22044605e-16,21.0927835 L0,13.3814436 C-6.13599301e-17,12.8804017 0.406174674,12.474227 0.907216526,12.474227 Z M0.907216526,0 L8.61855642,0 C9.11959828,-9.20398951e-17 9.52577295,0.406174674 9.52577295,0.907216526 L9.52577295,8.61855642 C9.52577295,9.11959828 9.11959828,9.52577295 8.61855642,9.52577295 L0.907216526,9.52577295 C0.406174674,9.52577295 -1.60684675e-16,9.11959828 -2.22044605e-16,8.61855642 L0,0.907216526 C-6.13599301e-17,0.406174674 0.406174674,-1.3000471e-16 0.907216526,-2.22044605e-16 Z M13.3814436,0 L21.0927835,0 C21.5938253,-9.20398951e-17 22,0.406174674 22,0.907216526 L22,8.61855642 C22,9.11959828 21.5938253,9.52577295 21.0927835,9.52577295 L13.3814436,9.52577295 C12.8804017,9.52577295 12.474227,9.11959828 12.474227,8.61855642 L12.474227,0.907216526 C12.474227,0.406174674 12.8804017,-1.3000471e-16 13.3814436,-2.22044605e-16 Z M13.3814436,12.474227 L21.0927835,12.474227 C21.5938253,12.474227 22,12.8804017 22,13.3814436 L22,21.0927835 C22,21.5938253 21.5938253,22 21.0927835,22 L13.3814436,22 C12.8804017,22 12.474227,21.5938253 12.474227,21.0927835 L12.474227,13.3814436 C12.474227,12.8804017 12.8804017,12.474227 13.3814436,12.474227 Z M14.1185578,14.1185535 L14.1185578,20.355667 L20.3556714,20.355667 L20.3556714,14.1185535 L14.1185578,14.1185535 Z M14.1185578,1.64432647 L14.1185578,7.88143999 L20.3556714,7.88143999 L20.3556714,1.64432647 L14.1185578,1.64432647 Z M1.64433079,1.64432647 L1.64433079,7.88143999 L7.88144432,7.88143999 L7.88144432,1.64432647 L1.64433079,1.64432647 Z M1.64433079,14.1185535 L1.64433079,20.355667 L7.88144432,20.355667 L7.88144432,14.1185535 L1.64433079,14.1185535 Z" id="path-1"></path>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Gestión-de-Contactos" transform="translate(-24.000000, -186.000000)">
            <g id="Nav/Menu/List-" transform="translate(0.000000, 186.000000)">
                <g id="icon-dashboard" transform="translate(24.000000, 0.000000)">
                    <use id="Combined-Shape" fill={active ? '#7444BE' : '#718096'} href="#path-1"></use>
                </g>
            </g>
        </g>
    </g>
  </svg>
)

export default Indicator