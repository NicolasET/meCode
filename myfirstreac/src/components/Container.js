import React, { useState } from 'react';
import FormsTodo from './FormsTodo';
import TaskList from './TaskList';

const Container = () => {
    const [list, setList] = useState([]);
    const handleAddItem = (addItem) => {
        setList([...list, addItem]);
    };
    return (
        <div>
            <FormsTodo handleAddItem={handleAddItem} />
            <TaskList list={list} setList={setList}/>
        </div>
    );
};

export default Container;
