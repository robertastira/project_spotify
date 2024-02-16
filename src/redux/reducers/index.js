const initialState = {
 Song: {
    selectedSong:[]
  }
  },

const mainReducer = (state = initialState, action) => {
  switch(action.type){
    case: "SELECTED_SONG"
    ...state,
    state.Song:{
      selectedSong: [...state.SelectedSong.list, action.payload]
    }

    } ,

  default:
    return state
  }
export default mainReducer


          {/*  Ho iniziato ad impostare Redux alle 16, ma ammetto di aver riscontrato molte difficoltà, perché essendomi concentrata su Typescript
          e avendo immesso tante nozioni tutte insieme, ripassandole per il benchmark, mi è pesato tanto il fatto di essermi esercitata su Redux solo i primi due giorni della settimana. 
          Se posso permettermi, nella massima umiltà, un consiglio, forse farei prima Typescript e poi Redux, se il compito del venerdì è poi su Redux, perché le nozioni sono tante, e averle più fresche è senza dubbio più agevole.
              }) */}