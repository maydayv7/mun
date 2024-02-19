import secyImg from '../../assets/aboutUs/secy1.png'
import man from '../../assets/aboutUs/man.png'
import TeamCard from './teamCard';
import SectionHeading from '../general/sectionHeading';

const MeetTheTeam = () => {
    const team = [
        ['name', secyImg],
        ['name', man],
        ['name', secyImg],
        ['name', man],
        ['name', secyImg],
        ['name', man],
        ['name', secyImg],
        ['name', man],
        ['name', secyImg],
        ['name', man],
    ]
    return ( 
        <div className="px-9 max-letter:px-4 py-10 mt-40 w-full relative overflow-hidden">
            <SectionHeading title={'Meet the Team'} color={'#60E1A4'} />
            <div className='w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-16 justify-items-center mx-auto my-16 ' >
            {
                team.map(([name,img])=>(
                    <TeamCard key={name} name={name} img={img} />
                ))
            }
            </div>
        </div>
     );
}
 
export default MeetTheTeam;