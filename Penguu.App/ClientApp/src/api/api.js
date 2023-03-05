export const fetchAlerts = async (sensorUserId) => {
    //const token = await authService.getAccessToken();
    const response = await fetch('api/sensoruser/getalerts?sensorUserId=' + sensorUserId);
    const data = await response.json();
    return data;
}

export const deactivateAlert = async (alertId) => {
    await fetch('api/sensoruser/deactivatealert?sensorAlertId=' + alertId, { method: 'POST' });
}

export const fetchSensorUsers = async (managerId) => {
    const response = await fetch('api/sensoruser/listusers?managerId=' + managerId);
    const data = await response.json();
    return data;
}
