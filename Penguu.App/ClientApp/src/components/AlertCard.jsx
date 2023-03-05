import React from 'react';

const alertTypes = {
    1: "Access Alert",
    2: "Water Level Alert",
    3: "Distress Alert",
    4: "Correct Pin Alert",
    5: "Incorrect Pin Alert"
}

const AlertCard = (props) => {
    return (
        <div className="card p-2">
            <div className="d-flex">
                <div className="card-body">
                    <h5 className="card-title">{props.payload}</h5> 
                    <h6 className="card-subtitle">{props.alertTime}</h6>
                    {alertTypes[props.alertType]} for {props.alertUser}
                </div>
                <div className="justify-self-center align-self-center">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={async () => {await props.deactivateAlertCallback(props.alertId)}}
                    >
                        Deactivate
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AlertCard;
