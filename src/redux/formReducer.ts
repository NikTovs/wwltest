import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PushFormType } from "../types/createPushFormType";

const initialState: PushFormType = {
    pushName: "",
    textTitle: "",
    mainText: "",
    language: "",
    iconLink: "",
    imgLink: "",
    messageType: "",
    audience: ""
}

const createPushFormSlice = createSlice({
    name: "createPushForm",
    initialState,
    reducers: {
        setFieldValue(state: PushFormType, 
            {payload}: PayloadAction<{name: string, value: string}>) {
                const {name, value} = payload;
                return {...state, [name] : value}
        },
        setValue(state: PushFormType, 
            {payload}: PayloadAction<PushFormType>) {
                return payload
            }
    }
})


export const { setValue, setFieldValue } = createPushFormSlice.actions;
export default createPushFormSlice.reducer;