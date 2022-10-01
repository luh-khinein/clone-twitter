import React from 'react'

interface Props {
  color?: string
  coloredColor?: string
  width?: number
  height?: number
}

export const DisplayIcon: React.FC<Props> = ({ color, coloredColor, width, height }) => {
  return (
    <div className='relative'>
      <svg
        className='absolute'
        viewBox='0 0 24 24'
        width={width ? width : 20}
        height={height ? height : 20}
        fill={color}>
        <g>
          <path
            d='M15.692 11.205l6.383-7.216c.45-.45.45-1.18 0-1.628-.45-.45-1.178-.45-1.627 0l-7.232 6.402s.782.106 1.595.93c.548.558.882 1.51.882 1.51z'
          />
          <path
            d='M17.45 22.28H3.673c-1.148 0-2.083-.946-2.083-2.11V7.926c0-1.165.934-2.112 2.082-2.112h5.836c.414 0 .75.336.75.75s-.336.75-.75.75H3.672c-.32 0-.583.274-.583.612V20.17c0 .336.26.61.582.61h13.78c.32 0 .583-.273.583-.61v-6.28c0-.415.336-.75.75-.75s.75.335.75.75v6.28c0 1.163-.934 2.11-2.084 2.11z'
          />
        </g>
      </svg>
      <svg
        viewBox='0 0 24 24'
        width={width ? width : 20}
        height={height ? height : 20}
        fill={coloredColor}>
        <g>
          <path
            d='M8.18 16.99c-.19.154-.476.032-.504-.21-.137-1.214-.234-4.053 1.483-5.943.908-1 3.02-1.52 4.475-.198s1.14 3.473.23 4.473c-2.07 2.15-3.428.058-5.686 1.878z'
          />
        </g>
      </svg>
    </div>
  )
}
