import styles from './Switcher.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getFilteredStatus} from "../../redux/selectors/notesSelector";
import {setFilteredStatus} from "../../redux/slices/notesSlice";
import React from "react";

function Switcher () {
    const filteredStatus = useSelector(getFilteredStatus)
    const dispatch = useDispatch()

    function changeFilteredStatus (value: boolean) {
        dispatch(setFilteredStatus(value))
    }

    return (
        <div className={styles.switcher}>
            <span>Show: </span>
            <button
                onClick={() => changeFilteredStatus(false)}
                className={!filteredStatus ? styles.active : ''}
            >All</button>
            <button
                onClick={() => changeFilteredStatus(true)}
                className={filteredStatus ? styles.active : ''}
            >Starred</button>
        </div>
    )
}

export default React.memo(Switcher)