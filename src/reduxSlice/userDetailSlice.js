import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create Action
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    const response = await fetch("https://65f9a7203909a9a65b190a67.mockapi.io/crud", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const userList = createAsyncThunk("userList", async (_, { rejectWithValue }) => {
    const response = await fetch("https://65f9a7203909a9a65b190a67.mockapi.io/crud", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
    const response = await fetch(`https://65f9a7203909a9a65b190a67.mockapi.io/crud/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});



export const updateUserData = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
    const response = await fetch(`https://65f9a7203909a9a65b190a67.mockapi.io/crud/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});


const userDetailSlice = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    reducers: {}, // You can define additional reducers here if needed
    extraReducers: (builder) => {
        builder
            // CreateUser
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // UserList
            .addCase(userList.pending, (state) => {
                state.loading = true;
            })
            .addCase(userList.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(userList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // UserList
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload;

                if (id) {
                    state.users = state.users.filter((elem) => elem.id !== id)
                }

            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Update User
            .addCase(updateUserData.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUserData.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.map((elem) => elem.id === action.payload.id ? action.payload : elem

                )
            })
            .addCase(updateUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default userDetailSlice.reducer;
