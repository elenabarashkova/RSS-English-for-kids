import { Action } from "redux";

export interface ActionWithPayload extends Action {payload: string}