import { createSlice } from "@reduxjs/toolkit";

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "account",
  initialState: initialStateCustomer,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateCustomer(state, action) {
      state.fullName = action.payload.fullName;
    },
  },
});

export const { createCustomer, updateCustomer } = customerSlice.actions;
export default customerSlice.reducer;
// const initialStateCustomer = {
//   fullName: "",
//   nationalID: "",
//   createdAt: "",
// };

// export default function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName":
//       return { ...state, fullName: action.payload };

//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalID) {
//   return {
//     payload: { fullName, nationalID, createdAt: new Date().toISOString() },
//   };
// }

// export function updateName(fullName) {
//   return { payload: fullName };
// }
