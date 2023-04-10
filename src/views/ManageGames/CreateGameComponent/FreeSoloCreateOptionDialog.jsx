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
    {title: 'The Shawshank Redemption', mention: 'MALE'},
    {title: 'The Godfather', mention: 'MALE'},
    {title: 'The Godfather: Part II', mention: 'MALE'},
    {title: 'The Dark Knight', mention: 'MALE'},
    {title: '12 Angry Men', mention: 'MALE'},
    {title: 'Schindler\'s List', mention: 'MALE'},
    {title: 'Pulp Fiction', mention: 'MALE'},
    {title: 'The Lord of the Rings: The Return of the King', mention: 'MALE'},
    {title: 'The Good, the Bad and the Ugly', mention: 'MALE'},
    {title: 'Fight Club', mention: 'MALE'},
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        mention: 'MALE'
    },
    {title: 'Star Wars: Episode V - The Empire Strikes Back', mention: 'MALE'},
    {title: 'Forrest Gump', mention: 'MALE'},
    {title: 'Inception', mention: 'MALE'},
    {title: 'The Lord of the Rings: The Two Towers', mention: 'MALE'},
    {title: 'One Flew Over the Cuckoo\'s Nest', mention: 'MALE'},
    {title: 'Goodfellas', mention: 'MALE'},
    {title: 'The Matrix', mention: 'MALE'},
    {title: 'Seven Samurai', mention: 'MALE'},
    {title: 'Star Wars: Episode IV - A New Hope', mention: 'MALE'},
    {title: 'City of God', mention: 'MALE'},
    {title: 'Se7en', mention: 'MALE'},
    {title: 'The Silence of the Lambs', mention: 'MALE'},
    {title: 'It\'s a Wonderful Life', mention: 'MALE'},
    {title: 'Life Is Beautiful', mention: 'MALE'},
    {title: 'The Usual Suspects', mention: 'MALE'},
    {title: 'Léon: The Professional', mention: 'MALE'},
    {title: 'Spirited Away', mention: 'MALE'},
    {title: 'Saving Private Ryan', mention: 'MALE'},
    {title: 'Once Upon a Time in the West', mention: 'MALE'},
    {title: 'American History X', mention: 'MALE'},
    {title: 'Interstellar', mention: 'MALE'},
    {title: 'Casablanca', mention: 'MALE'},
    {title: 'City Lights', mention: 'MALE'},
    {title: 'Psycho', mention: 'MALE'},
    {title: 'The Green Mile', mention: 'MALE'},
    {title: 'The Intouchables', mention: 'MALE'},
    {title: 'Modern Times', mention: 'MALE'},
    {title: 'Raiders of the Lost Ark', mention: 'MALE'},
    {title: 'Rear Window', mention: 'MALE'},
    {title: 'The Pianist', mention: 'MALE'},
    {title: 'The Departed', mention: 'MALE'},
    {title: 'Terminator 2: Judgment Day', mention: 'MALE'},
    {title: 'Back to the Future', mention: 'MALE'},
    {title: 'Whiplash', mention: 'MALE'},
    {title: 'Gladiator', mention: 'MALE'},
    {title: 'Memento', mention: 'MALE'},
    {title: 'The Prestige', mention: 'MALE'},
    {title: 'The Lion King', mention: 'MALE'},
    {title: 'Apocalypse Now', mention: 'MALE'},
    {title: 'Alien', mention: 'MALE'},
    {title: 'Sunset Boulevard', mention: 'MALE'},
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        mention: 'MALE'
    },
    {title: 'The Great Dictator', mention: 'MALE'},
    {title: 'Cinema Paradiso', mention: 'MALE'},
    {title: 'The Lives of Others', mention: 'MALE'},
    {title: 'Grave of the Fireflies', mention: 'MALE'},
    {title: 'Paths of Glory', mention: 'MALE'},
    {title: 'Django Unchained', mention: 'MALE'},
    {title: 'The Shining', mention: 'MALE'},
    {title: 'WALL·E', mention: 'MALE'},
    {title: 'American Beauty', mention: 'MALE'},
    {title: 'The Dark Knight Rises', mention: 'MALE'},
    {title: 'Princess Mononoke', mention: 'MALE'},
    {title: 'Aliens', mention: 'MALE'},
    {title: 'Oldboy', mention: 'MALE'},
    {title: 'Once Upon a Time in America', mention: 'MALE'},
    {title: 'Witness for the Prosecution', mention: 'MALE'},
    {title: 'Das Boot', mention: 'MALE'},
    {title: 'Citizen Kane', mention: 'MALE'},
    {title: 'North by Northwest', mention: 'MALE'},
    {title: 'Vertigo', mention: 'MALE'},
    {title: 'Star Wars: Episode VI - Return of the Jedi', mention: 'MALE'},
    {title: 'Reservoir Dogs', mention: 'MALE'},
    {title: 'Braveheart', mention: 'MALE'},
    {title: 'M', mention: 'MALE'},
    {title: 'Requiem for a Dream', mention: 'MALE'},
    {title: 'Amélie', mention: 'MALE'},
    {title: 'A Clockwork Orange', mention: 'MALE'},
    {title: 'Like Stars on Earth', mention: 'MALE'},
    {title: 'Taxi Driver', mention: 'MALE'},
    {title: 'Lawrence of Arabia', mention: 'MALE'},
    {title: 'Double Indemnity', mention: 'MALE'},
    {title: 'Eternal Sunshine of the Spotless Mind', mention: 'MALE'},
    {title: 'Amadeus', mention: 'MALE'},
    {title: 'To Kill a Mockingbird', mention: 'MALE'},
    {title: 'Toy Story 3', mention: 'MALE'},
    {title: 'Logan', mention: 'MALE'},
    {title: 'Full Metal Jacket', mention: 'MALE'},
    {title: 'Dangal', mention: 'MALE'},
    {title: 'The Sting', mention: 'MALE'},
    {title: '2001: A Space Odyssey', mention: 'MALE'},
    {title: 'Singin\' in the Rain', mention: 'MALE'},
    {title: 'Toy Story', mention: 'MALE'},
    {title: 'Bicycle Thieves', mention: 'MALE'},
    {title: 'The Kid', mention: 'MALE'},
    {title: 'Inglourious Basterds', mention: 'MALE'},
    {title: 'Snatch', mention: 'MALE'},
    {title: '3 Idiots', mention: 'MALE'},
    {title: 'Monty Python and the Holy Grail', mention: 'MALE'}
]
