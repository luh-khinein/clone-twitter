import React from 'react'

interface Props {
  color?: string
  width?: number
  height?: number
}

export const ChartIcon: React.FC<Props> = ({ color, width, height }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      width={width ? width : 20}
      height={height ? height : 20}
      fill={color}>
      <g>
        <path
          d='M12 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75zm5.14 0c-.415 0-.75-.336-.75-.75V7.89c0-.415.335-.75.75-.75s.75.335.75.75v13.36c0 .414-.337.75-.75.75zM6.86 22c-.413 0-.75-.336-.75-.75V10.973c0-.414.337-.75.75-.75s.75.336.75.75V21.25c0 .414-.335.75-.75.75z'
        />
      </g>
    </svg>
  )
}
