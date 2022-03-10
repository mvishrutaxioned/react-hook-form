import React, { useState, useMemo, createContext } from 'react';

export const MyContext = createContext();

export const ContextProvider = (props) => {

    const [editInfo, setEditInfo] = useState({});
    const [searchReports, setSearchReports] = useState([]);
    const [searchTasks, setSearchTasks] = useState([]);
    const [counter, setCounter] = useState(0);

    const objData = useMemo(() => {
        return {counter, setCounter, editInfo, setEditInfo, searchReports, setSearchReports, searchTasks, setSearchTasks}
    }, [counter, setCounter, editInfo, setEditInfo, searchReports, setSearchReports, searchTasks, setSearchTasks])

    return (
        <MyContext.Provider value={objData}>
            {props.children}
        </MyContext.Provider>
    )
}