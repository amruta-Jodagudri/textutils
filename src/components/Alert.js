import React from 'react';

export default function Alert(props) {
  return (
    <div>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.Alert.type}</strong>:{props.Alert.msg}
        </div>}
    </div>
  );
}
