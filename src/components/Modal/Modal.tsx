import React, {useEffect} from 'react'
import styles from './Modal.module.scss'
import {useState} from "react"
import {TwitterPicker} from "react-color";
import starIcon from '../../assets/img/star.svg'
import {useDispatch, useSelector} from "react-redux";
import {setModalVisibility} from "../../redux/slices/modalSlice";
import {getModalVisibility} from "../../redux/selectors/modalSelector";
import {getNoteById} from "../../redux/selectors/notesSelector";
import {RootState} from "../../redux/store";
import {ICard} from "../../interfaceTypes/interfaceTypes";
import {addNote, changeFavouriteStatus, changeNoteColor, changeNoteText} from "../../redux/slices/notesSlice";
import {getFormattedDate} from "../../helpers/dateFormatter";

export default function Modal () {
    const [value, setValue] = useState<string>('')
    const [color, setColor] = useState<string>('#7BDCB5')

    const {id, visible} = useSelector(getModalVisibility)
    const noteInfo = useSelector((state: RootState) => getNoteById(state, id))

    function changeInputValue (e: React.ChangeEvent<HTMLTextAreaElement>) {
        setValue(e.target.value)
    }

    useEffect(() => {
        if(noteInfo) {
            setValue(noteInfo.text)
            setColor(noteInfo.color)
        }
        //eslint-disable-next-line
    }, [])

    const formRef = React.useRef<HTMLFormElement>(null)

    const dispatch = useDispatch()

    function closeClickHandler () {
        dispatch(setModalVisibility({visible: false, id: null}))
    }

    function addNewNote (e: React.SyntheticEvent) {
        e.preventDefault()
        if(value.trim().length !== 0) {
            const date = new Date()
            const formattedDate = getFormattedDate(date)
            const newNoteInfo: ICard = {
                id: Math.random() * 1000,
                date: formattedDate,
                favourite: false,
                color: color,
                text: value.trim()
            }
            dispatch(addNote(newNoteInfo))
            closeClickHandler()
        }
    }

    function editNote (e: React.SyntheticEvent) {
        e.preventDefault()
        if(id !== null) {
            if(noteInfo && noteInfo.text !== value && value.trim().length !== 0) {
                dispatch(changeNoteText({id, value}))
            }
            if(noteInfo && noteInfo.color !== color) {
                dispatch(changeNoteColor({id, color}))
            }
            closeClickHandler()
        }
    }

    function editFavourite (e: React.SyntheticEvent) {
        e.preventDefault()
        if(id !== null) {
            dispatch(changeFavouriteStatus(id))
        }
    }

    useEffect(() => {
        if(visible) {
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.body.style.overflow = 'visible'
        }
    }, [visible])

    return (
        <div
            className={styles.modal}
            onClick={closeClickHandler}
        >
            <form
                ref={formRef}
                onClick={(e: React.MouseEvent<HTMLFormElement>) => e.stopPropagation()}
            >
                <div
                    className={styles.close}
                    onClick={closeClickHandler}
                >&times;</div>
                <div className={styles.textarea}>
                    <textarea
                        value={value}
                        onChange={changeInputValue}
                        placeholder='Note text...'
                    />
                </div>
                <div className={styles.bottomSide}>
                    <div>
                        <TwitterPicker
                            onChangeComplete={(color) => setColor(color.hex)}
                            color={color}
                        />
                    </div>
                    <div className={styles.controls}>
                        { id !== null && noteInfo &&
                            <button
                                className={styles.favourite}
                                onClick={editFavourite}
                            >
                                <span>{noteInfo.favourite ? 'Remove from' : 'Add to'} favourite</span>
                                <img src={starIcon} alt="Add to favourite"/>
                            </button>
                        }
                        <div className={styles.buttons}>
                            <button
                                onClick={id === null ? addNewNote : editNote}
                            >Apply</button>
                            <button
                                onClick={closeClickHandler}
                            >Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}