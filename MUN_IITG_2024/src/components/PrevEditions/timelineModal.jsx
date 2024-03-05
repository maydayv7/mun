import styles from './timelineModal.module.css';
const TimelineModal = ({year,arr}) => {
    const [name, imgLink, agenda, description, bgURL] = [...arr];
    return ( 
        
        <div className={styles.box}>
            {
                arr.map((arr)=>(
                        // <TimelineComponent key={item[0]} arr={item} />
                        <div key={arr[0]} className={styles.superContainer}>
                            <div className={styles.container}>
                                <div className={styles.imgContainer}>
                                    <img className={styles.img} src={arr[1]} alt="logo" />
                                    <h3 className={styles.title}>{arr[0]}</h3>
                                </div>
                                <div className={styles.verticalHR}></div>
                                <div className={styles.contentContainer}>
                                    <h2 className={styles.agenda}>{arr[2]}</h2>
                                    <small className={styles.description}>{arr[3]}</small>
                                    <a href={arr[4]} className={styles.link}><button className={styles.button}>BG Guide</button></a>
                                </div>
                            </div>
                            {/* <div className={styles.line} /> */}
                        </div>
                        ))
            }
        </div>
        // <div>
        //     <div>
        //         <img src={imgLink} alt="logo" />
        //         <h1>{name}</h1>
        //     </div>
        //     <div>
        //         <h2>{agenda}</h2>
        //         <small>{description}</small>
        //         <a href={bgURL}><button>BG Guide</button></a>
        //     </div>
        // </div>
     );
}

 
export default TimelineModal;