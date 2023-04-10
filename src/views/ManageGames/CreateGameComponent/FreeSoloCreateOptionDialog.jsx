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
    const [value, setValue] = React.useState(null)
    const [open, toggleOpen] = React.useState(false)

    const handleClose = () => {
        setDialogValue({
            title: '',
            mention: ''
        })

        toggleOpen(false)
    }

    const [dialogValue, setDialogValue] = React.useState({
        title: '',
        mention: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        setValue({
            title: dialogValue.title,
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
                                title: newValue,
                                mention: 'MALE'
                            })
                        })
                    } else if (newValue && newValue.inputValue) {
                        toggleOpen(true)
                        setDialogValue({
                            title: newValue.inputValue,
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
                            title: `Добавить нового игрока '${params.inputValue}'`
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
                    return option.title
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                renderOption={(option) => option.title}
                freeSolo
                renderInput={(params) => (
                    <TextField {...params} label={props.label}
                               variant="outlined" />
                )}
            />
            <Dialog open={open} onClose={handleClose}
                    aria-labelledby="form-dialog-title">
                <form onSubmit={handleSubmit}>
                    <DialogTitle
                        id="form-dialog-title"
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
                            value={dialogValue.title}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    title: event.target.value
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
    {title: 'Плесень', mention: 'MALE'},
    {title: 'Старый', mention: 'MALE'},
    {title: 'БИ-2', mention: 'MALE'},
    {title: 'Лютер', mention: 'MALE'},
    {title: 'Шкипер', mention: 'MALE'},
    {title: 'Ауткаст', mention: 'MALE'},
    {title: 'Марсианка', mention: 'MALE'},
    {title: 'Гагарин', mention: 'MALE'},
    {title: 'Ягодка', mention: 'MALE'},
    {title: 'Ultimate', mention: 'MALE'},
    {title: 'ГитлерОк', mention: 'MALE'},
    {title: 'Валет', mention: 'MALE'},
    {title: 'Колобок', mention: 'MALE'},
    {title: 'Andolini', mention: 'MALE'},
    {title: 'Шанти', mention: 'MALE'},
    {title: 'Бродяга', mention: 'MALE'},
    {title: 'Партизан', mention: 'MALE'},
    {title: 'Белка', mention: 'MALE'},
    {title: 'Rarity', mention: 'MALE'},
    {title: 'О! Крошка', mention: 'MALE'},
    {title: 'Лев', mention: 'MALE'},
    {title: '55', mention: 'MALE'},
    {title: 'Twinkle', mention: 'MALE'},
    {title: 'Эльф', mention: 'MALE'},
    {title: 'Златовласка', mention: 'MALE'},
    {title: 'Yaccoon', mention: 'MALE'},
    {title: 'Панна-котта', mention: 'MALE'},
    {title: 'Homie', mention: 'MALE'},
    {title: 'Домино', mention: 'MALE'},
    {title: 'Империя', mention: 'MALE'},
    {title: 'Pogchamp', mention: 'MALE'},
    {title: 'Лупа', mention: 'MALE'},
    {title: 'Slam', mention: 'MALE'},
    {title: 'Крендель', mention: 'MALE'},
    {title: 'Зеленоглазка', mention: 'MALE'},
    {title: 'Акедия', mention: 'MALE'},
    {title: 'Элс', mention: 'MALE'},
    {title: 'Тандэм', mention: 'MALE'},
    {title: 'Училка', mention: 'MALE'},
    {title: 'Орк', mention: 'MALE'},
    {title: 'Валькирия', mention: 'MALE'},
    {title: 'Ассассин', mention: 'MALE'},
    {title: 'Совесть', mention: 'MALE'},
    {title: 'Данило', mention: 'MALE'},
    {title: 'Конструктор', mention: 'MALE'},
    {title: 'Мелисса', mention: 'MALE'},
    {title: 'Барселона', mention: 'MALE'},
    {title: 'Purple', mention: 'MALE'},
    {title: 'ReD', mention: 'MALE'},
    {title: 'Pussy', mention: 'MALE'},
    {title: 'Мама', mention: 'MALE'},
    {title: 'Кудряшка', mention: 'MALE'},
    {title: 'MIKE', mention: 'MALE'},
    {title: 'Динамо', mention: 'MALE'},
    {title: 'Пупа', mention: 'MALE'},
    {title: 'Волчара', mention: 'MALE'},
    {title: 'Капу$та', mention: 'MALE'},
    {title: 'Арсения', mention: 'MALE'},
    {title: 'Безымянный', mention: 'MALE'},
    {title: 'ФурсДари', mention: 'MALE'},
    {title: 'Ирландец', mention: 'MALE'},
    {title: 'Республика', mention: 'MALE'},
    {title: 'ОдинДва', mention: 'MALE'},
    {title: 'Герда', mention: 'MALE'},
    {title: 'Спонжик', mention: 'MALE'},
    {title: 'Сандра', mention: 'MALE'},
    {title: 'Кудряшка Сью', mention: 'MALE'},
    {title: 'Киса', mention: 'MALE'},
    {title: 'Сон', mention: 'MALE'},
    {title: 'Джек Николаевич Воскресенский', mention: 'MALE'},
    {title: 'Фрикаделька', mention: 'MALE'},
    {title: 'Крекер Джо', mention: 'MALE'},
    {title: 'Остап', mention: 'MALE'},
    {title: 'Гарри', mention: 'MALE'},
    {title: 'Скромный', mention: 'MALE'},
    {title: 'По', mention: 'MALE'},
    {title: 'Сапёр', mention: 'MALE'},
    {title: 'Serseya', mention: 'MALE'},
    {title: 'Ермак', mention: 'MALE'},
    {title: 'Ночь', mention: 'MALE'},
    {title: 'Вишенка', mention: 'MALE'},
    {title: '13й', mention: 'MALE'},
    {title: 'Айрис', mention: 'MALE'},
    {title: 'Director', mention: 'MALE'},
    {title: 'Антон', mention: 'MALE'},
    {title: 'Green Ice', mention: 'MALE'},
    {title: 'Супер Стас', mention: 'MALE'},
    {title: 'Горун', mention: 'MALE'},
    {title: 'Декабрист', mention: 'MALE'},
    {title: 'Батя', mention: 'MALE'},
    {title: 'Бывшая', mention: 'MALE'},
    {title: 'Баян', mention: 'MALE'},
    {title: 'Кортеска', mention: 'MALE'},
    {title: 'Кепка', mention: 'MALE'},
    {title: 'Кошка', mention: 'MALE'},
    {title: 'Иван', mention: 'MALE'},
    {title: 'Блудница', mention: 'MALE'}
]
