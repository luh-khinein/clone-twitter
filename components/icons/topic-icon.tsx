import React from 'react'

interface Props {
  color?: string
  width?: number
  height?: number
}

export const TopicIconLine: React.FC<Props> = ({ color, width, height }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      width={width ? width : 20}
      height={height ? height : 20}
      fill={color}>
      <g>
        <path
          d='M12.003 23.274c-.083 0-.167-.014-.248-.042-.3-.105-.502-.39-.502-.708v-4.14c-2.08-.172-4.013-1.066-5.506-2.56-3.45-3.45-3.45-9.062 0-12.51s9.062-3.45 12.512 0c3.096 3.097 3.45 8.07.82 11.565l-6.49 8.112c-.146.182-.363.282-.587.282zm0-21.05c-1.882 0-3.763.717-5.195 2.15-2.864 2.863-2.864 7.524 0 10.39 1.388 1.387 3.233 2.15 5.195 2.15.414 0 .75.337.75.75v2.72l5.142-6.425c2.17-2.885 1.876-7.014-.696-9.587-1.434-1.43-3.316-2.148-5.197-2.148z'
        />
        <path
          d='M15.55 8.7h-7.1c-.413 0-.75-.337-.75-.75s.337-.75.75-.75h7.1c.413 0 .75.335.75.75s-.337.75-.75.75zm-3.05 3.238H8.45c-.413 0-.75-.336-.75-.75s.337-.75.75-.75h4.05c.414 0 .75.336.75.75s-.336.75-.75.75z'
        />
      </g>
    </svg>
  )
}

export const TopicIconFill: React.FC<Props> = ({ color, width, height }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      width={width ? width : 20}
      height={height ? height : 20}
      fill={color}>
      <g>
        <path
          d=''
        />
      </g>
    </svg>
  )
}