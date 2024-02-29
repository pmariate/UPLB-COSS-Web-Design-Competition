import React from 'react';
import { useRef } from "react";
import '../App.css'; // Import CSS file
import { motion, useInView } from "framer-motion"

const Recents = () => {
    const recents = [
        {
            title: "Provide job opportunities to displaced workers", 
            location: "Los Banos, Laguna"
        },
        {
            title: "Achieve quality education from less-priviliged students", 
            location: "Gumaca, Quezon"
        },
        {
            title: "Donate medicine and supplement subsidies", 
            location: "Bacoor, Cavite"
        },
        {
            title: "Build renewable sources of energy", 
            location: "Metro Manila, Manila"
        }
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return(
        <>
            <section ref={ref} id="recent-post" className="flexCol">
                <h2 style={{ margin: '0 0 20px 0', fontSize: '40px'}}>Recent Activities</h2>
                <div id="recent-container" className="flexRow">
                    {recents.map((recent, index) => {
                        let delay = (index*0.25);
                        console.log(delay);
                        if(isInView){
                            return(
                                <>
                                    <motion.div
                                        variants={{
                                        hidden: { opacity: 0, y: 25 },
                                        visible: { opacity: 1, y: 0 }
                                        }}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{duration: 0.5, delay: delay}}
                                    >
                                        <div id={`recent${index+1}`} className="recent flexCol">
                                            <h4>{ recent.title }</h4>
                                            <h6>{ recent.location }</h6>
                                        </div>
                                    </motion.div>
                                </>
                                
                            )
                        }
                        
                    })}
                </div>
            </section>
        </>
    )
};

export default Recents;
