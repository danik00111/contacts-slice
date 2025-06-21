import { createSlice } from "@reduxjs/toolkit";

const initstate = { contacts:[], filter:'' }

const contactSlice = createSlice({
  name: "contacts",
  "initialState": [],
  reducers: {
    add(state,action) {
        const takenids = state.map(x=>x.id);
        let newid = 1;
        while(true) {
          if(!takenids.includes(newid)) break;
          newid++;
        }
        const newcontact = { ...action.payload, id: newid };
        return [...state, newcontact];
    },
    del(state,action) {
      return [...state].filter(x=>x.id!=action.payload)
    }
  }
})

const filterSlice = createSlice({
  name: "filter",
  "initialState": '',
  reducers: {
    set(state,action) {
      return action.payload;
    }
  }
})

export const { add, del } = contactSlice.actions
export const { set } = filterSlice.actions
export const contactReducer = contactSlice.reducer
export const filterReducer = filterSlice.reducer

// export const contactReducer = (state = [], action) => {
//       if (action.type === "addcontact") {
//         const takenids = state.map(x=>x.id);
//         let newid = 1;
//         while(true) {
//           if(!takenids.includes(newid)) break;
//           newid++;
//         }
//         const newcontact = { ...action.payload, id: newid };
//         return [...state, newcontact];
//       }
//       if (action.type === "delcontact") {
//         return [...state].filter(x=>x.id!=action.payload)
//       }
//       return state;
// };


// export const filterReducer = (state = '', action) => {
//       if (action.type === "setfilter") {
//         return action.payload;
//       }
//       return state
// };