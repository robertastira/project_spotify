const initialState = {
  SelectedSong: {
    list:[]
  }
  },

const mainReducer = (state = initialState, action) => {
  switch(action.type){
    case: "SELECTED_SONG"
    ...state,
    state.SelectedSong:{
      list: [...state.SelectedSong.list, action.payload]
    }

    } ,

  default:
    return state
  }
export default mainReducer

