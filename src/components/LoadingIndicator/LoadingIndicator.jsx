import React from 'react'
import Loader from 'react-loader-spinner'
import {usePromiseTracker} from 'react-promise-tracker'

const LoadingIndicator = props => {
    const {promiseInProgress} = usePromiseTracker()

    return promiseInProgress &&
        <div
            style={{
                width: '100%',
                height: '100',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 0,
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                ...props
            }}
        >
            <Loader type="TailSpin" color="#00BFFF" height={100} width={100}/>
        </div>
}

export default LoadingIndicator
