import { useRef, useState, useEffect } from 'react';

export interface Props {
    root: null,
    threshold?: number, 
    rootMargin?: string;
}

export const useNearScreen = ( options: Props ) => {
    const element = useRef<any>( null );
    const [show, setShow] = useState(false)
  
    useEffect(function () {
      Promise.resolve(
        typeof window.IntersectionObserver !== 'undefined'
          ? window.IntersectionObserver
          : window.IntersectionObserver
      ).then(() => {
        const observer = new window.IntersectionObserver(function ( entries ) {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        },
        options
        )
        observer.observe( element.current )
      })

    }, [ element ]);
  
    return {
        show, 
        element
    }
}