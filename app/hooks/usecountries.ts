import Countries from 'world-countries'

const formatedCountries = Countries.map( country => ({
   value: country.cca2,
    label: country.name.common,
   flag: country.flag,
    latlng: country.latlng,
   region: country.region
}))

const useCountries = () => {
    const getAll = () => formatedCountries;

    const getByValue = (country: string) => {
        return formatedCountries.find(item => item.value === country)
    }
    return { getAll, getByValue }
}

export default useCountries;