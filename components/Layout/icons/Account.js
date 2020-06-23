import React from 'react'

const Account = ({active}) => (
  <svg width="22px" height="18px" viewBox="0 0 22 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
      <defs>
          <path d="M2.45317497,17.7309582 L2.45317497,4.94913519 L11.0035476,12.0074744 L19.5468269,4.94913519 L19.5468269,17.7309582 L2.45317497,17.7309582 Z M18.202381,4.2865138 L11.0480092,10.0484186 L3.79761905,4.2865138 L18.202381,4.2865138 Z M19.25,2.75 L2.75,2.75 C1.73891667,2.75 0.916666667,3.57225 0.916666667,4.58333333 L0.916666667,17.4166667 C0.916666667,18.42775 1.73891667,19.25 2.75,19.25 L19.25,19.25 C20.2610833,19.25 21.0833333,18.42775 21.0833333,17.4166667 L21.0833333,4.58333333 C21.0833333,3.57225 20.2610833,2.75 19.25,2.75 L19.25,2.75 Z" id="path-1"></path>
      </defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Dashboard" transform="translate(-24.000000, -300.000000)">
              <g id="Nav/Menu/List--Copy-5" transform="translate(0.000000, 281.000000)">
                  <g id="icon-Chat" transform="translate(24.000000, 17.000000)">

                      <use id="Mail" fill={active ? '#7444BE' : '#718096'} fill-rule="evenodd" href="#path-1"></use>
                  </g>
              </g>
          </g>
      </g>
  </svg>
)

export default Account