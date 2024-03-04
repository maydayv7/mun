import styles from './timeline.module.css'
import TimelineModal from './timelineModal';
import timelineData from '../../data/timelineData'
import arrow from '../../assets/prevEditions/arrow.svg'

const Timeline = () => {
    

    
    return ( 
        <div className={styles.timeline}>
                {
                    Object.entries(timelineData).map(([year,arr])=>(
                        <div className={styles.container} key={year}>
                            <div className={styles.side}>
                                <div className={styles.circle} />
                                {/* <div className={styles.arrow}></div> */}
                                <div className={styles.sideContent}>
                                    <img className={styles.arrow} src={arrow} alt="" />
                                    <p className={styles.year}>{year}</p>
                                    <p className={styles.edition}>Edition XII</p>
                                </div>
                            </div>
                            <div className={styles.modal}>
                            <TimelineModal  year={year} arr={arr} />
                            </div>
                        </div>
                    ))
                }
        </div>
     );
}
 
export default Timeline;