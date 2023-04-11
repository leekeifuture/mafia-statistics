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

const filter = createFilterOptions()

export default function FreeSoloCreateOptionDialog(props) {
    const [value, setValue] = React.useState(props.value)
    const [open, toggleOpen] = React.useState(false)

    const handleClose = () => {
        setDialogValue({
            nickname: '',
            mention: ''
        })

        toggleOpen(false)
    }

    const [dialogValue, setDialogValue] = React.useState({
        nickname: '',
        mention: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        setValue({
            nickname: dialogValue.nickname,
            mention: dialogValue.mention
        })

        handleClose()
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
                                mention: 'MALE'
                            })
                        })
                    } else if (newValue && newValue.inputValue) {
                        toggleOpen(true)
                        setDialogValue({
                            nickname: newValue.inputValue,
                            mention: 'MALE'
                        })
                    } else {
                        setValue(newValue)
                    }
                }}
                filterOptions={(options, params) => {
                    const filtered = filter(options, params)

                    if (params.inputValue !== '') {
                        filtered.push({
                            inputValue: params.inputValue,
                            nickname: `Добавить нового игрока '${params.inputValue}'`
                        })
                    }

                    return filtered
                }}
                options={top100Films}
                getOptionLabel={(option) => {
                    // e.g value selected with enter, right from the input
                    if (typeof option === 'string') {
                        return option
                    }
                    if (option.inputValue) {
                        return option.inputValue
                    }
                    return option.nickname
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                renderOption={(option) => option.nickname}
                freeSolo
                renderInput={(params) => (
                    <TextField {...params} label={props.label}
                               variant="outlined" />
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
                            id="mention"
                            value={dialogValue.mention}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    mention: event.target.value
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
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    nickname: event.target.value
                                })}
                            label="Никнейм"
                            type="text"
                            style={{width: '100%'}}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Отмена
                        </Button>
                        <Button type="submit" color="primary">
                            Добавить
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </React.Fragment>
    )
}

const top100Films = [
    {nickname: 'Плесень', mention: 'MALE'},
    {nickname: 'Старый', mention: 'MALE'},
    {nickname: 'БИ-2', mention: 'MALE'},
    {nickname: 'Лютер', mention: 'MALE'},
    {nickname: 'Шкипер', mention: 'MALE'},
    {nickname: 'Ауткаст', mention: 'MALE'},
    {nickname: 'Марсианка', mention: 'MALE'},
    {nickname: 'Гагарин', mention: 'MALE'},
    {nickname: 'Ягодка', mention: 'MALE'},
    {nickname: 'Ultimate', mention: 'MALE'},
    {nickname: 'ГитлерОк', mention: 'MALE'},
    {nickname: 'Валет', mention: 'MALE'},
    {nickname: 'Колобок', mention: 'MALE'},
    {nickname: 'Andolini', mention: 'MALE'},
    {nickname: 'Шанти', mention: 'MALE'},
    {nickname: 'Бродяга', mention: 'MALE'},
    {nickname: 'Партизан', mention: 'MALE'},
    {nickname: 'Белка', mention: 'MALE'},
    {nickname: 'Rarity', mention: 'MALE'},
    {nickname: 'О! Крошка', mention: 'MALE'},
    {nickname: 'Лев', mention: 'MALE'},
    {nickname: '55', mention: 'MALE'},
    {nickname: 'Twinkle', mention: 'MALE'},
    {nickname: 'Эльф', mention: 'MALE'},
    {nickname: 'Златовласка', mention: 'MALE'},
    {nickname: 'Yaccoon', mention: 'MALE'},
    {nickname: 'Панна-котта', mention: 'MALE'},
    {nickname: 'Homie', mention: 'MALE'},
    {nickname: 'Домино', mention: 'MALE'},
    {nickname: 'Империя', mention: 'MALE'},
    {nickname: 'Pogchamp', mention: 'MALE'},
    {nickname: 'Лупа', mention: 'MALE'},
    {nickname: 'Slam', mention: 'MALE'},
    {nickname: 'Крендель', mention: 'MALE'},
    {nickname: 'Зеленоглазка', mention: 'MALE'},
    {nickname: 'Акедия', mention: 'MALE'},
    {nickname: 'Элс', mention: 'MALE'},
    {nickname: 'Тандэм', mention: 'MALE'},
    {nickname: 'Училка', mention: 'MALE'},
    {nickname: 'Орк', mention: 'MALE'},
    {nickname: 'Валькирия', mention: 'MALE'},
    {nickname: 'Ассассин', mention: 'MALE'},
    {nickname: 'Совесть', mention: 'MALE'},
    {nickname: 'Данило', mention: 'MALE'},
    {nickname: 'Конструктор', mention: 'MALE'},
    {nickname: 'Мелисса', mention: 'MALE'},
    {nickname: 'Барселона', mention: 'MALE'},
    {nickname: 'Purple', mention: 'MALE'},
    {nickname: 'ReD', mention: 'MALE'},
    {nickname: 'Pussy', mention: 'MALE'},
    {nickname: 'Мама', mention: 'MALE'},
    {nickname: 'Кудряшка', mention: 'MALE'},
    {nickname: 'MIKE', mention: 'MALE'},
    {nickname: 'Динамо', mention: 'MALE'},
    {nickname: 'Пупа', mention: 'MALE'},
    {nickname: 'Волчара', mention: 'MALE'},
    {nickname: 'Капу$та', mention: 'MALE'},
    {nickname: 'Арсения', mention: 'MALE'},
    {nickname: 'Безымянный', mention: 'MALE'},
    {nickname: 'ФурсДари', mention: 'MALE'},
    {nickname: 'Ирландец', mention: 'MALE'},
    {nickname: 'Республика', mention: 'MALE'},
    {nickname: 'ОдинДва', mention: 'MALE'},
    {nickname: 'Герда', mention: 'MALE'},
    {nickname: 'Спонжик', mention: 'MALE'},
    {nickname: 'Сандра', mention: 'MALE'},
    {nickname: 'Кудряшка Сью', mention: 'MALE'},
    {nickname: 'Киса', mention: 'MALE'},
    {nickname: 'Сон', mention: 'MALE'},
    {nickname: 'Джек Николаевич Воскресенский', mention: 'MALE'},
    {nickname: 'Фрикаделька', mention: 'MALE'},
    {nickname: 'Крекер Джо', mention: 'MALE'},
    {nickname: 'Остап', mention: 'MALE'},
    {nickname: 'Гарри', mention: 'MALE'},
    {nickname: 'Скромный', mention: 'MALE'},
    {nickname: 'По', mention: 'MALE'},
    {nickname: 'Сапёр', mention: 'MALE'},
    {nickname: 'Serseya', mention: 'MALE'},
    {nickname: 'Ермак', mention: 'MALE'},
    {nickname: 'Ночь', mention: 'MALE'},
    {nickname: 'Вишенка', mention: 'MALE'},
    {nickname: '13й', mention: 'MALE'},
    {nickname: 'Айрис', mention: 'MALE'},
    {nickname: 'Director', mention: 'MALE'},
    {nickname: 'Антон', mention: 'MALE'},
    {nickname: 'Green Ice', mention: 'MALE'},
    {nickname: 'Супер Стас', mention: 'MALE'},
    {nickname: 'Горун', mention: 'MALE'},
    {nickname: 'Декабрист', mention: 'MALE'},
    {nickname: 'Батя', mention: 'MALE'},
    {nickname: 'Бывшая', mention: 'MALE'},
    {nickname: 'Баян', mention: 'MALE'},
    {nickname: 'Кортеска', mention: 'MALE'},
    {nickname: 'Кепка', mention: 'MALE'},
    {nickname: 'Кошка', mention: 'MALE'},
    {nickname: 'Иван', mention: 'MALE'},
    {nickname: 'Блудница', mention: 'MALE'}
]
