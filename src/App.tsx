import React from 'react';
import Container from "./components/Container";
import Modal from './components/Modal'
import {useSelector} from "react-redux";
import {getModalVisibility} from "./redux/selectors/modalSelector";

function App() {
    const {visible} = useSelector(getModalVisibility)

    return (
        <div>
            <Container />
            { visible &&
                <Modal />
            }
        </div>
    );
}

export default App;
