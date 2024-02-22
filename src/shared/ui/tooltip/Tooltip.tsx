import { useState } from 'react';
import styles from './Tooltip.module.scss'

interface TooltipProps {
    children: string | JSX.Element
    textTooltip: string
}
const Tooltip: React.FC<TooltipProps> = ({children, textTooltip}) => {
    const [showToolTip, setShowToolTip] = useState(false);
    const isWide = window.innerWidth >= 1024 ? true : false

    const onMouseEnterHandler = () => {
        setShowToolTip(true);
      };
    
      const onMouseLeaveHandler = () => {
        setShowToolTip(false);
      };


    return (
        <div className={styles.tooltipContainer} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            {children}
            {isWide && showToolTip && <div className={styles.tooltip} data-appear={showToolTip}>{textTooltip}</div>}
        </div>
    )
}

export default Tooltip