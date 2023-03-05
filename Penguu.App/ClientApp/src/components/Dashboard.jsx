import React, { useState, useEffect } from 'react';
import { fetchAlerts, fetchSensorUsers, deactivateAlert } from '../api/api';
import AlertCard from './AlertCard';

const POLL_RATE = 10000;

const Dashboard = () => {

    const [alerts, setAlerts] = useState([]);
    const [sensorUsers, setSensorUsers] = useState({});

    const deactivateAlertCallback = async (alertId) => {
        await deactivateAlert(alertId);
        await updateAlerts(); 
    }

    const updateAlerts = async () => {
        const data = await fetchAlerts(1);
        data.sort((a, b) => b.alertTime.localeCompare(a.alertTime));
        setAlerts(data);
    };

    const pollAlerts = async () => {
        await updateAlerts();
        setTimeout(pollAlerts, POLL_RATE); 
    };

    const getSensorUsers = async () => {
        const data = await fetchSensorUsers("8490cb70-649d-404e-9699-6786f30d3a06");
        var result = {};
        data.forEach((datum) => {
            result[datum.sensorUserId] = datum.name; 
        });
        setSensorUsers(result);
    }

    const alertCards = alerts.map((alert) => (
        <div className="p-2">
            <AlertCard
                key={alert.sensorAlertId}
                alertId={alert.sensorAlertId}
                alertUser={sensorUsers[alert.sensorUserId]}
                alertType={alert.alertType}
                alertTime={alert.alertTime}
                payload={alert.payload}
                deactivateAlertCallback={deactivateAlertCallback}
            />
        </div>
    ));

    useEffect(() => {
        pollAlerts();
        getSensorUsers();
        // eslint-disable-next-line
    }, []);
    
    return (
        <>
            <h1>Dashboard</h1>
            { alertCards }
        </>
    );
};

export default Dashboard;
