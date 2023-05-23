import React, {useState} from 'react'

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
        else if (type === 'sum1') setSum1({
            value: e.target.value,
            update: false
        })
        else if (type === 'sum2') setSum2({
            value: e.target.value,
            update: false
        })
    }

    function onBlur(e, type) {
        if (type === 'number')
            setNumber(old => ({value: old.value, update: true}))
        else if (type === 'sum1')
            setSum1(old => ({value: old.value, update: true}))
        else if (type === 'sum2')
            setSum2(old => ({value: old.value, update: true}))
    }

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
