import { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './BackToTop.scss'

function BackToTop() {
    // The back-to-top button is hidden at the beginning
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div>
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    <ArrowUpwardIcon />
                </button>
            )}
        </div>
    )
}

export default BackToTop