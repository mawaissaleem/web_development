import {useEffect} from 'react'

export const useOnKeyPress = (callbackFunc, targetKey) => {
    useEffect(() => {
        const keyPressHandler = (event) => {
            if (event.key === targetKey){
                callbackFunc();
            }
        };

        // mounting the component
        window.addEventListener("keyup", keyPressHandler); // using keyup as an javascript event

        // unmounting the component
        return () => {
            window.removeEventListener("keyup", keyPressHandler);
        };
    },[callbackFunc,targetKey]);
  
};
