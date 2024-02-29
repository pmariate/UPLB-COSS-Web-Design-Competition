import React, { useState } from 'react';
import '../App.css'; // Import CSS file
import { motion } from "framer-motion"

const CommontActions = () => {
    const headers = [
        "Provide food and clean water for the children", 
        "Contribute to renewable energy source", 
        "Promote good health and quality education", 
        "Restore habitats for the native animals"
    ];

    const [active, setActive] = useState(0); 

    // Commont Actions
    return (
        <>
            <section id="actions" className="flexRow">
                {headers.map((header, index) => {
                    let delay = (index*0.25)+0.75;
                    
                    if(index == active){
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
                                    <div className="action flexCol active">
                                        
                                                <h4>{ header }</h4>
                                                <a href="">READ MORE</a>
                                            
                                    </div>
                                </motion.div>
                            </>
                        )
                    } else {
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
                                    <div className="action flexCol">
                                        
                                                <h4>{ header }</h4>
                                                <a href="">READ MORE</a>
                                            
                                    </div>
                                </motion.div>
                            </>
                        )
                    }
                })}
            </section>
        </>  
    );
};

export default CommontActions;
