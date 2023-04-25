/* eslint-disable no-use-before-define */
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Autocomplete, {createFilterOptions} from '@material-ui/lab/Autocomplete'
import React from 'react'
import {trackPromise} from 'react-promise-tracker'
import {mafiaStatisticsApi} from '../../../api/mafiaStatisticsApi'
import LoadingIndicator
    from '../../../components/LoadingIndicator/LoadingIndicator'

const filter = createFilterOptions()

export default function FreeSoloCreateOptionDialog(props) {
    const [value, setValue] = React.useState(props.value)
    const [open, toggleOpen] = React.useState(false)
    const [isLoading, setLoading] = React.useState(false)

    const handleClose = () => {
        setDialogValue({
            nickname: '',
            gender: 'UNKNOWN'
        })

        toggleOpen(false)
    }

    const [dialogValue, setDialogValue] = React.useState({
        nickname: '',
        gender: 'UNKNOWN'
    })

    const handleSubmit = event => {
        setLoading(true)
        event.preventDefault()
        setValue({
            nickname: dialogValue.nickname,
            gender: dialogValue.gender
        })

        trackPromise(
            mafiaStatisticsApi.createPlayer(dialogValue.nickname, dialogValue.gender)
                .then(
                    player => {
                        props.successAlert(player)
                        props.onChange(player)
                    },
                    error => {
                        props.errorAlert({
                            nickname: dialogValue.nickname,
                            gender: dialogValue.gender
                        }, error)
                    }
                )
        ).then(r => {
            setLoading(false)
            handleClose()
        })
    }

    return (
        <React.Fragment>
            <Autocomplete
                {...props}
                value={value}
                onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                        // timeout to avoid instant validation of the dialog's form.
                        setTimeout(() => {
                            toggleOpen(true)
                            setDialogValue({
                                nickname: newValue,
                                gender: 'MALE'
                            })
                        })
                    } else if (newValue && newValue.inputValue) {
                        toggleOpen(true)
                        setDialogValue({
                            nickname: newValue.inputValue,
                            gender: 'MALE'
                        })
                    } else {
                        setValue(newValue)
                    }

                    props.onChange(newValue)
                }}
                filterOptions={(options, params) => {
                    const filtered = filter(options, params)
                    const isPlayerExists = Boolean(
                        props.players
                            .find(player =>
                                (player.nickname ? player.nickname : '').toLowerCase() ===
                                (params.inputValue ? params.inputValue : '').toLowerCase())
                    )

                    if (params.inputValue !== '' && !isPlayerExists) {
                        filtered.push({
                            inputValue: params.inputValue,
                            nickname: `Добавить нового игрока '${params.inputValue}'`
                        })
                    }

                    return filtered
                }}
                options={props.players}
                getOptionLabel={option => option.nickname ? option.nickname : ''}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                renderOption={(option) => option.nickname}
                freeSolo
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={props.label}
                        variant="outlined"
                        error={props.error}
                    />
                )}
            />
            <Dialog open={open} onClose={handleClose}
                    aria-labelledby="form-dialog-nickname">
                <form onSubmit={handleSubmit}>
                    <DialogTitle
                        id="form-dialog-nickname"
                        style={{textAlign: 'center'}}
                    >
                        Добавление нового игрока в клуб
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Вы не увидели данного игрока в списке?
                            Можете добавьте его в базу данных клуба здесь.
                        </DialogContentText>
                        <Select
                            margin="dense"
                            id="gender"
                            value={dialogValue.gender}
                            onChange={event =>
                                setDialogValue({
                                    ...dialogValue,
                                    gender: event.target.value
                                })}
                            label="Как обращаться"
                            type="text"
                            style={{width: '100%'}}
                        >
                            <MenuItem value={'MALE'}>Господин</MenuItem>
                            <MenuItem value={'FEMALE'}>Госпожа</MenuItem>
                        </Select>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="nickname"
                            value={dialogValue.nickname}
                            onChange={event => {
                                setDialogValue({
                                    ...dialogValue,
                                    nickname: event.target.value
                                })
                            }}
                            label="Никнейм"
                            type="text"
                            style={{width: '100%'}}
                        />
                    </DialogContent>
                    {isLoading
                        ? <LoadingIndicator position transform />
                        : (
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Отмена
                                </Button>
                                <Button type="submit" color="primary">
                                    Добавить
                                </Button>
                            </DialogActions>
                        )}
                </form>
            </Dialog>
        </React.Fragment>
    )
}
