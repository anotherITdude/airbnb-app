import useCountries from '@/app/hooks/usecountries';
import React from 'react'
import Select from 'react-select'

export type CountrySelectValue = {
    flag: string,
    label: string,
    latlng: number[],
    region: string,
    value: string
}

interface CountrySelectProps {
    value?: CountrySelectValue;
    onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
    value, onChange
}) => {
    const { getAll } = useCountries();
  return (
    <Select 
    placeholder='Anywhere'
    isClearable
    value={value}
    options={getAll()}
    onChange={(value) => onChange(value as CountrySelectValue)}
    classNames={{
        control: () => 'p-3 border-2',
        input:() => 'text-lg',
        option:() => 'text-lg'
    }}
    theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        color: {
            ...theme.colors,
            primary:'black',
            primary25:'#FFE4E6',
        }
    })}
    formatOptionLabel = { (option:any) => (
        <div className='flex flex-row items-center gap-3'>
            <div>{option.flag}</div>
            <div>{option.label},
            <span className='text-neutral-500 ml-1'> {option.region}</span>
            </div>
        </div>
    )}
      />
  )
}

export default CountrySelect
