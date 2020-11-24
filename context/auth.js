/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from 'react';

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN': {
      localStorage.setItem('user', JSON.stringify(action.user));
      return {
        ...state,
        user: action.user,
        isAuth: true,
      };
    }
    case 'LOGOUT': {
      localStorage.removeItem('user', JSON.stringify(action.user));
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    }
    case 'LOAD_USER': {
      return {
        ...state,
        user: action.user,
        isAuth: true,
      };
    }
    default: {
      throw new Error(`Unhandled action type ${action.type}`);
    }
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, { user: null, isAuth: false });

  useEffect(() => {
    function loadUserFromStorage() {
      const user = localStorage.getItem('user');
      if (user) {
        dispatch({ type: 'LOAD_USER', user });
      }
    }
    loadUserFromStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be within a AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
