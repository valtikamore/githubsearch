import React from 'react';
interface propTypes {
 error:string | null
}
export const Alert = (props:propTypes) => {
 return (
  <div>
   {props.error}
  </div>
 );
};