import React from 'react';
import { IconProps } from '../types';

export function DartWithWords({ height, width, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height || 30}
      width={width || 30}
      viewBox="0 0 128 128"
    >
      <path
        fill={color || '#231f20'}
        d="M65.3 55.4c2.8 2.6 4.2 6.1 4.2 10.6s-1.4 8.1-4.1 10.8c-2.7 2.6-6.9 4-12.4 4h-9.8V51.7h10.1c5.2 0 9.2 1.2 12 3.7zm-4.8 17.3c1.6-1.5 2.4-3.7 2.4-6.6 0-2.9-.8-5.1-2.4-6.7-1.6-1.5-4.1-2.4-7.4-2.4h-3.8v18h4.2c3.1 0 5.4-.8 7-2.3zm32.1 8.1h-5.8V78c-1.7 2-3.6 3-6 3s-4.4-.7-6-2.1c-1.6-1.4-2.4-3.2-2.4-5.5s.8-4 2.5-5.1c1.7-1.1 4-1.7 6.9-1.7h4.6v-.2c0-2.4-1.2-3.6-3.8-3.6-1.1 0-2.2.2-3.4.6-1.2.4-2.2 1-3.1 1.6l-2.8-4.1c3-2.2 6.3-3.2 10.1-3.2 2.7 0 4.9.7 6.6 2.1 1.7 1.4 2.5 3.5 2.5 6.5v14.5h.1zm-6.3-8.6v-.9h-3.9c-2.5 0-3.8.7-3.8 2.2 0 .8.3 1.4.9 1.8.6.4 1.4.6 2.6.6 1.1 0 2.1-.3 2.9-1 .9-.7 1.3-1.6 1.3-2.7zm22.8-8.4c-1.9 0-3.4.6-4.3 2-.9 1.3-1.5 3.1-1.5 5.3v9.8h-6.2V58.4h6.2v2.9c.8-.9 2-1.7 3.2-2.3 1.2-.6 2.6-1 3.9-1v5.9l-1.3-.1zm11.3-.9v9.9c0 .9.2 1.5.7 2 .4.5 1 .7 1.6.7 1.2 0 2.2-.5 3-1.6l2.3 4.4c-1.9 1.8-4 2.7-6.1 2.7-2.2 0-4-.7-5.5-2.1-1.5-1.4-2.2-3.4-2.2-5.8V51.7h6.2V58h6.6l-3.4 5-3.2-.1z"
      />
      <path
        fill="#00c4b3"
        d="M9.3 56.3l-2.2-2.2v16.4c0 .3.1.7.2 1.1l17.3 6.1 4.3-1.9L9.3 56.3z"
      />
      <path
        d="M7.3 71.7zm21.6 4.2l-4.3 1.9-17.3-6.1c.3 1.3 1 2.7 1.8 3.5l5.6 5.6h12.5l1.7-4.9z"
        fill="#22d3c5"
      />
      <path
        fill="#0075c9"
        d="M.5 64.2c-.6.6-.3 1.8.6 2.8L5 70.9l2.4.9c-.1-.4-.2-.8-.2-1.1V70l-.1-15.9"
      />
      <path
        fill="#0075c9"
        d="M28.9 75.9l1.9-4.3-6.1-17.3c-.4-.1-.8-.2-1.1-.2H7.1"
      />
      <path
        d="M24.7 54.3zm4.2 21.6l4.7-1.5V61.5l-5.4-5.4c-.8-.8-2.2-1.5-3.5-1.8l6.1 17.3"
        fill="#00a8e1"
      />
      <path
        fill="#00c4b3"
        d="M23.9 51.9l-4-3.9c-.9-.9-2.1-1.2-2.7-.6L7.1 54.1h16.5c.3 0 .7.1 1.1.2l-.8-2.4z"
      />
    </svg>
  );
}
export function Dart({ height, width }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height || 30}
      width={width || 30}
      viewBox="0 0 128 128"
    >
      <path
        fill="#00c4b3"
        d="M35.2 34.9l-8.3-8.3v59.7l.1 2.8c0 1.3.2 2.8.7 4.3l65.6 23.1 16.3-7.2-74.4-74.4z"
      />
      <path
        d="M27.7 93.4zm81.9 15.9l-16.3 7.2-65.4-23.1c1.3 4.8 4 10.1 7 13.2l21.3 21.2 47.6.1 5.8-18.6z"
        fill="#22d3c5"
      />
      <path
        fill="#0075c9"
        d="M1.7 65.1C-.4 67.3.7 72 4 75.5l14.7 14.8 9.2 3.3c-.3-1.5-.7-3-.7-4.3l-.1-2.8-.2-59.8m82.7 82.6l7.2-16.4-23-65.6c-1.5-.3-3-.6-4.3-.7l-2.9-.1-59.6.1"
      />
      <path
        d="M93.6 27.3c.2 0 .2 0 0 0 .2 0 .2 0 0 0zm16 82l17.7-5.8V54.8l-20.4-20.5c-3-3-8.3-5.8-13.2-7l23.1 65.6"
        fill="#00a8e1"
      />
      <path
        fill="#00c4b3"
        d="M90.5 18.2L75.7 3.5c-3.4-3.4-8-4.4-10.4-2.3L26.9 26.6h59.5l2.9.1c1.3 0 2.8.2 4.3.7l-3.1-9.2z"
      />
    </svg>
  );
}

export function DartSolidWithWords({ height, width, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height || 30}
      width={width || 30}
      viewBox="0 0 128 128"
    >
      <path
        fill={color || '#00a8e1'}
        d="M65.3 55.4c2.8 2.6 4.2 6.1 4.2 10.6s-1.4 8.1-4.1 10.8c-2.7 2.6-6.9 4-12.4 4h-9.8V51.7h10.1c5.2 0 9.2 1.2 12 3.7zm-4.8 17.3c1.6-1.5 2.4-3.7 2.4-6.6 0-2.9-.8-5.1-2.4-6.7-1.6-1.5-4.1-2.4-7.4-2.4h-3.8v18h4.2c3.1 0 5.4-.8 7-2.3zm32.1 8.1h-5.8V78c-1.7 2-3.6 3-6 3s-4.4-.7-6-2.1-2.4-3.2-2.4-5.5.8-4 2.5-5.1 4-1.7 6.9-1.7h4.6v-.2c0-2.4-1.2-3.6-3.8-3.6-1.1 0-2.2.2-3.4.6-1.2.4-2.2 1-3.1 1.6l-2.8-4.1c3-2.2 6.3-3.2 10.1-3.2 2.7 0 4.9.7 6.6 2.1 1.7 1.4 2.5 3.5 2.5 6.5v14.5h.1zm-6.3-8.6v-.9h-3.9c-2.5 0-3.8.7-3.8 2.2 0 .8.3 1.4.9 1.8s1.4.6 2.6.6c1.1 0 2.1-.3 2.9-1 .9-.7 1.3-1.6 1.3-2.7zm22.8-8.4c-1.9 0-3.4.6-4.3 2-.9 1.3-1.5 3.1-1.5 5.3v9.8h-6.2V58.4h6.2v2.9c.8-.9 2-1.7 3.2-2.3s2.6-1 3.9-1v5.9l-1.3-.1zm11.3-.9v9.9c0 .9.2 1.5.7 2 .4.5 1 .7 1.6.7 1.2 0 2.2-.5 3-1.6l2.3 4.4c-1.9 1.8-4 2.7-6.1 2.7-2.2 0-4-.7-5.5-2.1s-2.2-3.4-2.2-5.8V51.7h6.2V58h6.6l-3.4 5-3.2-.1zM23.1 76.5l2.8-1.3L7.1 56.4v13.9c0 .1 0 .3.1.5l15.9 5.7zm-.4-21.1c-.2 0-.4-.1-.6-.1H8.2L27 74.1l1.3-2.9-5.6-15.8zm-1.2-1.6h.8c.4 0 .8.1 1.2.2h.1l-.6-1.5-3.8-3.8c-.9-.9-2.1-1.1-2.7-.6L8 53.8h13.5z"
      />
      <path
        fill={color || '#00a8e1'}
        d="M27.2 56.6c-.7-.7-1.9-1.4-3.1-1.7l5.8 16.4-1.7 3.9.4.4 3.9-1.3V61.9l-5.3-5.3zM5.7 70.3V56.2L.3 64.4c-.5.6-.3 1.8.6 2.7L4.6 71l1.2.4c-.1-.4-.1-.7-.1-1.1zm17.5 7.8l-.3-.1-15.7-5.6c.4 1 .9 2.1 1.6 2.7l5.5 5.4h12.2l1.4-4.6-4.7 2.2z"
      />
    </svg>
  );
}
export function DartSolid({ height, width, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height || 30}
      width={width || 30}
      viewBox="0 0 128 128"
    >
      <g fill={color || '#00a8e1'}>
        <path d="M86.6 25l3 .1c1.1.1 2.2.3 3.4.5l-2.5-7.4L75.7 3.5c-3.4-3.4-8-4.4-10.4-2.3L29.2 25.1l57.4-.1zm6.1 3.6c-1.2-.2-2.3-.4-3.3-.5l-2.9-.1-56 .1 78.6 78.6 6.1-13.8-22.5-64.3zM28.9 92.2l64.3 22.7 13.8-6.1-78.6-78.6v56.1l.1 2.7c0 .9.1 2 .4 3.2z" />
        <path d="M106.9 34.3c-2.6-2.6-7-5.1-11.3-6.5L118.4 93l-6.9 15.7 15.8-5.2V54.8l-20.4-20.5zm-13.5 83.8l-65-22.9c1.4 4.3 3.8 8.7 6.5 11.4l21.3 21.2 47.6.1 5.3-16.7-15.7 6.9zm-67.9-29l-.1-2.7V28.9L1.7 65.1C-.4 67.3.7 72 4 75.5l14.7 14.8 7.3 2.6c-.3-1.3-.5-2.5-.5-3.8z" />
      </g>
    </svg>
  );
}