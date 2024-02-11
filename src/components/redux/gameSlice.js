import { createSlice } from "@reduxjs/toolkit";

const gameSLice = createSlice({
    name: "game",
    initialState: {
        logged: false,
        imgSelected: "",
        nicknameRedux: "",
        nivel: 1,
        puncte: 0,

        cross: 0,
        circle: 0,
        hiddenMessage: false,

    },
    reducers: {
        setLogged: (state, action) => {
            state.logged = action.payload;
        },
        setImgSelected: (state, action) => {
            state.imgSelected = action.payload;
        },
        setNicknameRedux: (state, action) => {
            state.nickname = action.payload;
        },
        setNivel: (state, action) => {
            state.nivel = action.payload;
        },
        setPuncte: (state, action) => {
            state.puncte = action.payload;
        
            if (state.puncte >= 250) {
                state.nivel = 10;
            } else if (state.puncte >= 170) {
                state.nivel = 9;
            } else if (state.puncte >= 125) {
                state.nivel = 8;
            } else if (state.puncte >= 90) {
                state.nivel = 7;
            } else if (state.puncte >= 60) {
                state.nivel = 6;
            } else if (state.puncte >= 37) {
                state.nivel = 5;
            } else if (state.puncte >= 22) {
                state.nivel = 4;
            } else if (state.puncte >= 12) {
                state.nivel = 3;
            } else if (state.puncte >= 5) {
                state.nivel = 2;
            } else {
                state.nivel = 1;
            }
        },

        setCross: (state, action) => {
            state.cross += action.payload;
        },
        setCircle: (state, action) => {
            state.circle += action.payload;
        },
        setHiddenMessage: (state, action) => {
            state.hiddenMessage = action.payload;
        }
    },
})
export const { setLogged, setImgSelected, setNicknameRedux, setNivel, setPuncte, setCross, setCircle, setHiddenMessage } = gameSLice.actions
export const gameReducer = gameSLice.reducer