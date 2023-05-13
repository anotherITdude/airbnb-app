'use client'
import React from 'react'
import {IconType} from 'react-icons'

interface CategoryInputProps {
    onClick: (value:string) => void;
    label: string;
    selected?: boolean;
    icon: IconType
}

const CategoryInput:React.FC<CategoryInputProps> = ({
  label, selected, icon: Icon, onClick  
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
    rounded-xl
    border-2
    p-4
    flex flex-col
    gap-3
    cursor-pointer
    transition
    hover:border-black
    ${selected ? 'border-black' : 'border-neutral-200'}
`}>
      <Icon size={25} />
      <div className='semibold'>{label}</div>
    </div>
  )
}

export default CategoryInput
