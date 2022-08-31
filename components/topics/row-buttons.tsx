import React from 'react'
import CategoryButton from './category-button'

interface Props {
  links: Array<string>
  names: Array<string>
  elementLoaded: boolean
}

const RowButtons: React.FC<Props> = ({ links, names, elementLoaded }) => (
  <div className={`flex w-timeline px-4 duration-1000 ${elementLoaded ? 'opacity-1000' : 'opacity-0'}`}>
    <div className='flex w-full my-1 justify-around'>
      <CategoryButton
        link={links[0]}
        name={names[0]}
      />
      <CategoryButton
        link={links[1]}
        name={names[1]}
      />
      <CategoryButton
        link={links[2]}
        name={names[2]}
      />
    </div>
  </div>
)


export default RowButtons
