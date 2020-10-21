import { AlertForm, Alert, SET_ALERT, SET_ALERT_SUCCESS, REMOVE_ALERT } from "../../types";

export function setAlert(alert: AlertForm){
  return {
    type: SET_ALERT,
    payload: alert
  }
}
export function setAlertSuccess(alert: Alert){
  return {
    type: SET_ALERT_SUCCESS,
    payload: alert
  }
}
export function removeAlert(id:string){
  return {
    type: REMOVE_ALERT,
    payload: id
  }
}