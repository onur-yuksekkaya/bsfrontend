import { useState, useEffect, useContext } from 'react';

// EmptyBoard component
const EmptyBoard = (props) => {
  // destructuring props

  // context hooks

  // state

  // effect

  // queries

  // other variables/functions/handlers

  // render
  return (
    <div className="empty-board">
      <svg
        width="251px"
        height="282px"
        viewBox="0 0 251 282"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="Board-view" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="brew-kanban-boards-empty-state" transform="translate(-609.000000, -302.000000)">
            <g id="empty-state-image" transform="translate(609.000000, 302.000000)">
              <rect
                id="Rectangle"
                stroke="#DCDFE2"
                fill="#F5F9FD"
                x="0.5"
                y="0.5"
                width="222"
                height="268"
                rx="3"
              ></rect>
              <g id="Group" transform="translate(18.000000, 15.000000)">
                <rect id="Rectangle" fill="#E9EBED" x="0" y="0" width="187" height="69"></rect>
                <rect id="Rectangle" fill="#D3D9DF" x="9" y="18" width="134" height="13"></rect>
                <rect id="Rectangle-Copy" fill="#D3D9DF" x="9" y="39" width="111" height="13"></rect>
              </g>
              <g id="Group-Copy" transform="translate(18.000000, 96.000000)">
                <rect id="Rectangle" fill="#E9EBED" x="0" y="0" width="187" height="69"></rect>
                <rect id="Rectangle" fill="#D3D9DF" x="9" y="18" width="134" height="13"></rect>
                <rect id="Rectangle-Copy" fill="#D3D9DF" x="9" y="39" width="111" height="13"></rect>
              </g>
              <g id="Group-Copy-2" transform="translate(18.000000, 177.000000)">
                <rect id="Rectangle" fill="#E9EBED" x="0" y="0" width="187" height="69"></rect>
                <rect id="Rectangle" fill="#D3D9DF" x="9" y="18" width="134" height="13"></rect>
                <rect id="Rectangle-Copy" fill="#D3D9DF" x="9" y="39" width="111" height="13"></rect>
              </g>
              <g id="Group-3" transform="translate(182.000000, 213.000000)">
                <circle id="Oval" fill="#EA2027" cx="34.5" cy="34.5" r="34.5"></circle>
                <g id="🔹-Icon-Color" transform="translate(20.000000, 20.000000)" fill="#FFFFFF">
                  <path d="M13.5,19.5 L16.5,19.5 L16.5,22.5 L13.5,22.5 L13.5,19.5 Z M13.5,7.5 L16.5,7.5 L16.5,16.5 L13.5,16.5 L13.5,7.5 Z M14.985,0 C6.705,0 0,6.72 0,15 C0,23.28 6.705,30 14.985,30 C23.28,30 30,23.28 30,15 C30,6.72 23.28,0 14.985,0 Z M15,27 C8.37,27 3,21.63 3,15 C3,8.37 8.37,3 15,3 C21.63,3 27,8.37 27,15 C27,21.63 21.63,27 15,27 Z"></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <h3>There is no board to show</h3>
    </div>
  );
};

// export
export default EmptyBoard;
