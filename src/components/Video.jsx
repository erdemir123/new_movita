import React, {useRef, useEffect} from 'react'
import video1 from "../assets/ai.mp4"
function Video({timeline, ease}) {
    let image1 = useRef(null);
    let image2 = useRef(null);
    let image3 = useRef(null);
    useEffect(()=>{
        timeline.from(image1, 1.2, {
            y: 1200,
            ease: ease,
            opacity: 0
        },"-=1")
        .from(image1, 2, {
            scale: 1.6,
            ease: ease
        }, "-=1.2");
        timeline.from(image2, 1.2, {
            y: 1200,
            ease: ease,
            opacity: 0
        },"-=1")
        .from(image2, 2, {
            scale: 1.6,
            ease: ease
        }, "-=1");
        timeline.from(image3, 1.2, {
            y: 1200,
            ease: ease,
            opacity: 0
        },"-=1")
        .from(image3, 2, {
            scale: 1.6,
            ease: ease
        }, "-=1");
    })
    return (
        <div>
            <div className="">
                <div className="absolute top-24 right-20 bg-white w-48 h-80 border-slate-400 border-2" ref= {el=> image1 =el}>
                    <video src={video1} autoPlay muted className='w-48 h-80'></video>
                </div>
                <div className="box2 absolute top-60 right-[410px] bg-red w-48 h-80 border-slate-400 border-2" ref= {el=> image2 =el}></div>
                <div className="box3 absolute top-[500px] right-[80px] bg-red w-48 h-80 border-slate-400 border-2" ref= {el=> image3 =el}></div>
            </div>
        </div>
        )
}

export default Video