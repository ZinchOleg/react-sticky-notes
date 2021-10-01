import styles from './Card.module.scss'
import starIcon from '../../assets/img/star.svg'
import pencilIcon from '../../assets/img/pencil.svg'
import {ICard} from "../../interfaceTypes/interfaceTypes";
import Button from "../Button";
import {useDispatch} from "react-redux";
import {setModalVisibility} from "../../redux/slices/modalSlice";
import {changeFavouriteStatus, removeNote} from "../../redux/slices/notesSlice";
import React, {useRef} from "react";
import {clampString} from "../../helpers/clampString";
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd'
import { XYCoord } from 'dnd-core'

interface ICardProps {
    card: ICard,
    index: number
    moveCard: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem {
    index: number
    id: string
    type: string
}

export default function Card ({card, index, moveCard}:ICardProps) {

    const ref = useRef<HTMLDivElement>(null)

    const [{ handlerId }, drop] = useDrop({
        accept: 'card',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: DragItem, monitor: DropTargetMonitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            moveCard(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })


    const dispatch = useDispatch()

    function clickHandler () {
        dispatch(setModalVisibility({visible: true, id: card.id}))
    }

    function removeHandler () {
        if(window.confirm("Are you sure that you want to remove note?")) {
            dispatch(removeNote(card.id))
        }
    }

    function editFavourite () {
        dispatch(changeFavouriteStatus(card.id))
    }

    const [{ isDragging }, drag] = useDrag({
        type: 'card',
        item: () => {
            return { id: card.id, index }
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))

    return (
        <div
            ref={ref}
            className={styles.card}
            style={{backgroundColor: card.color, opacity}}
            data-handler-id={handlerId}
        >
            <button
                className={styles.removeBtn}
                onClick={removeHandler}
            >
                <span>&times;</span>
            </button>
            <div>
                { card.favourite &&
                    <div className={styles.favourite}>
                        <Button clickHandler={editFavourite} tooltip='*' iconUrl={starIcon} />
                    </div>
                }
                <p className={styles.text}>{clampString(card.text, 110)}</p>
            </div>
            <div className={styles.bottomSide}>
                <p className={styles.date}>{card.date}</p>
                <Button iconUrl={pencilIcon} tooltip='edit' clickHandler={clickHandler} />
            </div>
        </div>
    )
}