import React from 'react'


function Alert(props) {
  // const capital=(word)=>{
  //   const low=word.toLowerCase();
  //   return low.charAt(0).toUpperCase()+low.slice(1);
  // }
  return (
    // if alert has null value then condition will break otherwise it will display all things which we set below..
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    {/* below type and message are key name not value name */}
 <strong>{props.alert.type}</strong>:{props.alert.message}
</div>
  )
}

export default Alert