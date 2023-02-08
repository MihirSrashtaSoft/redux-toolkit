import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
    const [value, setValue] = useState(1)
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Ice creams - {numOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
            <input type="number" value={value} onChange={e => setValue(parseInt(e.target.value))} />
            <button onClick={() => dispatch(restocked(value))}>restock Ice cream</button>
        </div>
    )
}

