import React, {useEffect, useState} from 'react'
import {ActionTypes} from '../utils'

export default function DayCell({
                                    initialValue,
                                    columnId,
                                    rowIndex,
                                    dataDispatch
                                }) {
    const [number, setNumber] = useState({value: initialValue, update: false})
    const [sum1, setSum1] = useState({value: initialValue, update: false})
    const [sum2, setSum2] = useState({value: initialValue, update: false})

    function onChange(e, type) {
        if (type === 'number') setNumber({value: e.target.value, update: false})
        if (type === 'sum1') setSum1({value: e.target.value, update: false})
        if (type === 'sum2') setSum2({value: e.target.value, update: false})
    }

    function onBlur(e, type) {
        if (type === 'number')
            setNumber(old => ({value: old.value, update: true}))
        if (type === 'sum1')
            setSum1(old => ({value: old.value, update: true}))
        if (type === 'sum2')
            setSum2(old => ({value: old.value, update: true}))
    }

    useEffect(() => {
        setNumber({value: initialValue, update: false})
        setSum1({value: initialValue, update: false})
        setSum2({value: initialValue, update: false})
    }, [initialValue])

    useEffect(() => {
        if (number.update) {
            dataDispatch({
                type: ActionTypes.UPDATE_CELL,
                columnId,
                rowIndex,
                value: number.value
            })
        }
        if (sum1.update) {
            dataDispatch({
                type: ActionTypes.UPDATE_CELL,
                columnId,
                rowIndex,
                value: sum1.value
            })
        }
        if (sum2.update) {
            dataDispatch({
                type: ActionTypes.UPDATE_CELL,
                columnId,
                rowIndex,
                value: sum2.value
            })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [number.update, sum1.update, sum2.update, columnId, rowIndex])

    return (<>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
            <input
                value={(number.value && number.value.toString()) || ''}
                onChange={event => onChange(event, 'number')}
                onBlur={event => onBlur(event, 'number')}
                className='data-input'
                style={{width: '95%'}}
                type='number' min='1' max='10'
            />
            <input
                value={(sum1.value && sum1.value.toString()) || ''}
                onChange={event => onChange(event, 'sum1')}
                onBlur={event => onBlur(event, 'sum1')}
                className='data-input'
                style={{width: '95%'}}
                type='number' min='1' max='10'
            />
            <input
                value={(sum2.value && sum2.value.toString()) || ''}
                onChange={event => onChange(event, 'sum2')}
                onBlur={event => onBlur(event, 'sum2')}
                className='data-input'
                style={{width: '95%'}}
                type='number' min='1' max='10'
            />
        </div>
    </>)
}
