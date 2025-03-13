import { createSlice} from "@reduxjs/toolkit";

const isTokenPresentInCookies = () => {
    const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token='));
    return !!token;
};

const loadUserFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('user');
        if (!serializedState) {
            return { user: null };  
        }
        return { user: JSON.parse(serializedState) };
    } catch (error) {
        console.error('Erreur lors de la lecture du localStorage:', error);
        return { user: null };
    }
};

const initialState = loadUserFromLocalStorage();

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log("setUser action déclenchée avec:", action.payload);
            state.user = action.payload.user;
            localStorage.setItem('user', JSON.stringify(action.payload.user));  // Corrige ici
            console.log("✅ localStorage après setUser:", localStorage.getItem('user'));
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        }
    }
});


export const {setUser, logout} = authSlice.actions;

export default authSlice.reducer;