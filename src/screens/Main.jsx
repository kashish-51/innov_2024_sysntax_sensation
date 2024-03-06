import React, { useState } from 'react';
import { Dashboard } from '../components/Dashboard';
import Header from '../components/Header';
import Addtask from '../components/Addtask';
import Footer from '../components/Footer';
import Welcome from './Welcome';

const Main = () => {
    const [showAddTask, setShowAddTask] = useState(false);

    const toggleAddTask = () => {
        setShowAddTask(!showAddTask);
    };

    return (
        <div>
            <Header />
            <div className="flex">
                <Dashboard onAddTask={toggleAddTask} />
                <div className="flex-1">
                    {showAddTask ? <Addtask /> : <Welcome />}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;
