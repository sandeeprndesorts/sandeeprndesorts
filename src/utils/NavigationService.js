// RootNavigation.js

import * as React from 'react';
export const navigationRef = React.createRef();
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function reset(screen,props={}) {
  navigationRef.current?.reset({
    index: 1,
    routes: [{ name: screen,props:props }],
  })
}

export function goBack() {
  navigationRef.current?.goBack()
}
// add other navigation functions that you need and export them