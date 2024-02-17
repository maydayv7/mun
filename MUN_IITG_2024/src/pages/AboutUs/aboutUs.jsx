import Letter from '../../components/Letter/letter';
import Navbar from '../../components/Navbar';
import PageHeader from '../../components/PageHeader/pageHeader';
import styles from './aboutUsStyles.module.css'

const AboutUs = () => {
    return ( 
        <>
            <div className='bg-black'>
       
       <Navbar/>
       </div>
            <Navbar/>
            <PageHeader title={'About Us'} color={'#A0EDC9'} />
            {/* <div className={styles.titleContainer}>Hello</div> */}
            <div className={styles.description}>
                <p className={styles.content}>
                    The MUN, or the Model United Nations, is a simulation of the actual UN. The participants pretend to represent a nation, and come to together to discuss the very same issues being debated upon in the UN. This gives a normal person the opportunity to know what’s its like to stand for something more than himself/herself, and to experience the complicated the verbal dance and that politicians and delegates take part in everyday. The MUN is a conclave for ideation by the fresh minds of our nation, to brainstorm solutions to problems plaguing our world. Participants work through the tenuous relationships between nations as they deliberate towards a resolution – and they get to look nice in a suit and tie while they do it!
                </p>
            </div>
            <div className={styles.letterContainer}>
                <Letter/>
            </div>
        </>
     );
}
 
export default AboutUs;