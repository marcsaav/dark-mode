import useLocalStorage from './localStorage'

const useDarkMode = () => {
    const [ darkMode, setDarkMode ] = useLocalStorage('dark', false)

    return [darkMode, setDarkMode]
}

export default useDarkMode