import React from "react";
import {Route, Redirect} from "react-router-dom";

// Component with capital C: React convention of components having capital
function ProtectedRoute({component: Component, ...rest}){
  
  return(
    <Route {...rest} render={props => requestProtectedContent(Component, props)} />
  )
}


function requestProtectedContent(Component, props){

  let isUserAllowedHere = false;

  if (window.confirm("Press okay if you are the dungeon master")){
    isUserAllowedHere = true;
  }


  // Magic: a proper authentication is simply a boolean
  return(
    isUserAllowedHere ? 
      <Component {...props} />
    :
      <Redirect to="/" />
  )
}

export default ProtectedRoute;