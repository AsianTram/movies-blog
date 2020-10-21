import { setAlertSuccessAction, removeAlertAction, SET_ALERT_SUCCESS, AlertState, Alert, REMOVE_ALERT } from "../../types";

const initialState:AlertState={
  alerts:[]
}
export default function alert(state=initialState, action:setAlertSuccessAction | removeAlertAction){
  const {type, payload}=action;
  switch(type){
    case SET_ALERT_SUCCESS:
      return {alerts:[...state.alerts, payload as Alert]}
    case REMOVE_ALERT:
      return {
        alerts: state.alerts.filter(alert=> alert.id!==payload)
      }
    default:
      return state
  }
}