export const initialState = {
    name: "Asif",
    age: 100,
    status: "Engineer"
}
export type actionType = {
    type:"SET_NAME",
    payload:string
} | {
    type:"SET_AGE",
    payload:number
} | {
    type:"SET_STATUS",
    payload:string
}

export const reducer = (state: typeof  initialState, action:actionType) => {
    switch (action.type) {
        case "SET_NAME":
            return {
                ...state,
                name: action.payload
            }
        case "SET_AGE":
            return {
                ...state,
                age: action.payload
            }
        case "SET_STATUS":
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}
