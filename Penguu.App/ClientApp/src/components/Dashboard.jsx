import React, { useState, useEffect } from 'react';
import { fetchAlerts } from '../api/api';

const Dashboard = () => {

    const [alerts, setAlerts] = useState([]);
    const alertContainers = alerts.map((alert) => (
        <h3>{alert.sensorAlertId} {alert.sensorUserId} {alert.alertType} {alert.alertTime} {alert.payload}</h3>
    ));

    useEffect(() => {
        const getAlerts = async () => {
            setAlerts(await fetchAlerts(1));
        };
        getAlerts();
    }, []);
    
    return (
        <>
            <h1>Dashboard</h1>
            { alertContainers }
        </>
    );
};

export default Dashboard;
