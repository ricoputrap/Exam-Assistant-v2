export const initialState = {
  user: null,
  token:null,
  playlists: ['English','Social','Chemistry','Computer Science','Physics'],
  subject_audio: {'English':[{'title': 'Literature','teacher':'ajay'}],
'Social':[],'Chemistry':[],'Computer Science':[],'Physics':[]},
  playing: false,
  item: 'English',
  curr_song: null
};


const reducer = (state, action) => {
  
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item
      }
    case "SET_SONG":
      return {
        ...state,
        curr_song: action.song
      }
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing
      }
    case "SET_AUDIO":
    let newplaylist = state.subject_audio
    newplaylist[action.name].push({'title':action.title,'teacher':'ajay'})
    return{
      ...state,
      subject_audio: newplaylist
    }
    default:
        return state;

  };
}

export default reducer;
