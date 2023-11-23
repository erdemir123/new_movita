import React, {useRef, useEffect} from 'react'

function Video({timeline}) {
    let h1 = useRef(null);
    let pText = useRef(null);
    let btn = useRef(null);
    useEffect(() => {
        timeline.from([h1.children, pText, btn], 1,{
            opacity: 0,
            y: "100",
            skewY: 10,
            stagger: {
                amount: .4
            }
        },"-=1")
    })
    return (
        <div>
            <div className="flex items-start justify-center h-screen w-[30vw] ml-5 mr-14 flex-col">
                <h1 className="font-bold text-lg text-white  " ref= {el=>h1=el}>
                    <div>Movita Nedir</div>
                    <br />
                    <div>Movita, mobil araçlar için yerli mühendisler tarafından geliştirilen araç takip ve uzaktan izlemeli kamera kayıt özelliği bulunan bir sistemdir. </div>
                </h1>
                <p ref= {el=>pText=el} className='font-medium w-[80%] text-[#f0f0f0]'>
                Yeni nesil takip sistemi olarak bilinen mobil nvr cihazı sayesinde okul taşıtlarında koltuk sensörü cihazımız ile entegreli çalışmaktadır. Ayrıca bir çok yeni çözümler sunmaktadır.

                </p>
                <button ref= {el=>btn=el} className='w-[150px] p-4 mt-5 font-medium capitalize border-0 bg-[#0c0c0c] text-white'>
                    Explore
                </button>
            </div>
        </div>
    )
}

export default Video
