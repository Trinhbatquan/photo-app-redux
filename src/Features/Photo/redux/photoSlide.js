import { createSlice } from "@reduxjs/toolkit";

const listPhotoLocalStorage = JSON.parse(localStorage.getItem('photoList'))

const initialState = listPhotoLocalStorage || [
  {
    id: 11111,
    title: "Một chú cún",
    categoryId: 2,
    photo: "https://picsum.photos/id/237/200/200",
  },
];

const photo = createSlice({
  name: "photo",
  initialState,
  reducers: {
    addPhoto: function (state, action) {
      //mutate state
      state.unshift(action.payload);
    },
    removePhoto: function (state, action) {
      state = state.filter(photo => photo.id !== action.payload)
      return state;
    },
    updatePhoto: (state, action) => {
      const photoIndex = state.findIndex(photo => photo.id === action.payload.id);
      state[photoIndex] = action.payload
    }
  },
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto} = actions;
export default reducer;
