import React from 'react'
import HashIcon from '../img/Hash'
import MultiIcon from '../img/Multi'
import TextIcon from '../img/Text'
import {DataTypes} from '../utils'

export default function DataTypeIcon({dataType}) {
    function getPropertyIcon(dataType) {
        switch (dataType) {
            case DataTypes.NUMBER:
                return <HashIcon />
            case DataTypes.TEXT:
                return <TextIcon />
            case DataTypes.SELECT:
                return <MultiIcon />
            default:
                return null
        }
    }

    return getPropertyIcon(dataType)
}
