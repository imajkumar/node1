import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR ,REGISTER_USER,REGISTER_USER_ERROR} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
};

function appReducer(state = initialState, action) {
  let response = action.response;


  switch (action.type) {
    case LOAD_REPOS: {
      const newState = {
        ...state,
        loading: true,
        error: false,
        userData: {
          repositories: false,
        },
      };

      return newState;
    }
    case LOAD_REPOS_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        userData: {
          repositories: action.repos,
        },
        currentUser: action.username,
      };
      return newState;
    }
    case REGISTER_USER: {
      const newState = {
        ...state,
        loading: false,
        userData: {
          users: action.user,
        },
        currentUserData: action.user,
      };
           
    
      return newState;
    }

    


    case LOAD_REPOS_ERROR: {
      return { ...state, error: action.error, loading: false };
    }
    default:
      return state;
  }
}

export default appReducer;
