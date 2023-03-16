import { configureStore } from '@reduxjs/toolkit'

import photoReducer from '../Features/Photo/redux/photoSlide'

const store = configureStore({
    reducer: {
        photoReducer
    }
})

export default store;




