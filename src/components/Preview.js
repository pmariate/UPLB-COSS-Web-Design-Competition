import React from 'react';
import { useRef } from "react";
import '../App.css'; // Import CSS file
import { motion, useInView } from "framer-motion"

const Preview = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} id="preview" className="flexRow">
            <div id="imageContainer" className="flexRow" style={{
                transform: isInView ? "none" : "translateX(-50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"
            }}>
                <div id="image" className="flexRow">
                </div>
            </div>
            <div id="description" className="flexCol">
                <div> 
                    <h2 style={{ 
                        margin: '0', 
                        fontSize: '40px',
                        transform: isInView ? "none" : "translateY(25px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s"
                    }}>
                        Children's Welfare
                    </h2>

                    <p style={{
                        transform: isInView ? "none" : "translateY(25px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.85s"
                    }}>
                        Efforts to enhance family planning services and childhood vaccinations also require immediate attention to ensure universal access to healthcare services.
                    </p>
                </div>
                <button id="donate" style={{
                    transform: isInView ? "none" : "translateY(25px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                }}>
                    Donate
                </button>
            </div>
        </section>
    );
};

export default Preview;
