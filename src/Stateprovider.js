import React,{createContext,useContext,useReducer} from 'react';

//Prepares the data layer
export const StateContext=createContext();

//Wrap our app and provide data layer to any component
export const StateProvider=({reducer,initialState,children})=>(
	<StateContext.Provider value={useReducer(reducer,initialState)}>
         {children}
	</StateContext.Provider>
);

// pull or push data from the datalayer
export const useStateValue=()=>useContext(StateContext);