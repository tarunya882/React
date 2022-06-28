import React from 'react';

export type ImageProps = {
   src: string,
   alt?: string,
   className?: string,
   testId?: string,
}

const Image : React.FC<ImageProps>= ((props)=>{
    return(
        <img data-testid={props.testId} src={props.src} alt={props.alt ?? "alt"} className={props.className} />
    )
});
export default Image;