export const fetchAlerts = async (sensorUserId) => {
    //const token = await authService.getAccessToken();
    const response = await fetch('api/sensoruser/getalerts?sensorUserId=' + sensorUserId);
    const data = await response.json();
    return data;
}
