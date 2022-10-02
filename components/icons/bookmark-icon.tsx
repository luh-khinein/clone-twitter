import React from 'react'

interface Props {
  color?: string
  width?: number
  height?: number
}

export const BookmarkIconDisabled: React.FC<Props> = ({ color, width, height }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      width={width ? width : 20}
      height={height ? height : 20}
      fill={color}>
      <g>
        <path
          d='M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z'
        />
      </g>
    </svg>
  )
}

export const BookmarkIconActived: React.FC<Props> = ({ color, width, height }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      width={width ? width : 20}
      height={height ? height : 20}
      fill={color}>
      <g>
        <path
          d='M19.9 23.5c-.2 0-.3 0-.4-.1L12 17.9l-7.5 5.4c-.2.2-.5.2-.8.1-.2-.1-.4-.4-.4-.7V5.6c0-1.2 1-2.2 2.2-2.2h12.8c1.2 0 2.2 1 2.2 2.2v17.1c0 .3-.2.5-.4.7 0 .1-.1.1-.2.1z'
        />
      </g>
    </svg>
  )
}

export const AddBookmarkIcon: React.FC<Props> = ({ color, width, height }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      width={width ? width : 20}
      height={height ? height : 20}
      fill={color}>
      <g>
        <path
          d='M23.074 3.35H20.65V.927c0-.414-.337-.75-.75-.75s-.75.336-.75.75V3.35h-2.426c-.414 0-.75.337-.75.75s.336.75.75.75h2.425v2.426c0 .414.335.75.75.75s.75-.336.75-.75V4.85h2.424c.414 0 .75-.335.75-.75s-.336-.75-.75-.75zM19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z'
        />
      </g>
    </svg>
  )
}
