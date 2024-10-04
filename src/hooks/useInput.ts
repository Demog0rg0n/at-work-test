import { ChangeEvent, useState } from 'react'

export const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)
    const [isChanged, setIsChanged] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        if(e.target.value.length > 0) {
            setIsEmpty(false)
        } else {
            setIsEmpty(true)
        }
        if(e.target.value != initialValue) {
            setIsChanged(true)
        } else {
            setIsChanged(false)
        }
    }

    return {
        value,
        isEmpty,
        onChange,
        isChanged,
    }
}

export default useInput
