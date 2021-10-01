import styles from './Container.module.scss'
import Card from "../Card";
import {useDispatch, useSelector} from "react-redux";
import {setModalVisibility} from "../../redux/slices/modalSlice";
import React, {useCallback, useEffect} from "react";
import {getLoadedStatus, getNotes} from "../../redux/selectors/notesSelector";
import {fetchNotes, setNotesOrder} from "../../redux/slices/notesSlice";
import Loader from "../Loader";
import Switcher from '../Switcher'

export default function Container () {

    const dispatch = useDispatch()

    const isLoaded = useSelector(getLoadedStatus)
    const items = useSelector(getNotes)

    useEffect(() => {
        dispatch(fetchNotes())
        //eslint-disable-next-line
    }, [])

    function clickHandler () {
        dispatch(setModalVisibility({visible: true, id: null}))
    }

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
            dispatch(setNotesOrder({hoverID: items[hoverIndex].id, cardID: items[dragIndex].id}))
        },
        //eslint-disable-next-line
        [items]
    );

    return (
        <div className={styles.container}>
            <div className="wrapper">
                <div className={styles.switcher}>
                    <Switcher/>
                </div>
                {isLoaded &&
                    <button
                        className={styles.addBtn}
                        onClick={clickHandler}
                    >
                        <span>+</span>
                    </button>
                }
                <div className={styles.list}>
                    {isLoaded ?
                        items.map((item, index) => {
                            return <Card key={item.id} card={item} moveCard={moveCard} index={index} />
                        }) :
                        <div className={styles.loader}>
                            <Loader/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}