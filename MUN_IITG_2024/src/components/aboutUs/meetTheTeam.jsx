import secyImg from '../../assets/aboutUs/secy1.png'
import man from '../../assets/aboutUs/man.png'
import TeamCard from './teamCard';

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
        <div className="px-9 max-letter:px-4 py-10 w-full relative overflow-hidden">
            <div className="flex flex-row w-full overflow-x-hidden">
                <p className="text-[#60E1A4] text-nowrap max-[350px]:text-[20px] text-[28px] sm:text-[32px] md:text-[40px] font-raleway font-bold z-1 pr-4">Meet the Team</p>
                <hr className="border-t-[2px] opacity-100 border-[#60E1A45E] w-full text-4xl mt-[22px] sm:mt-[26px] md:mt-[32px] "/>
            </div>
            <div className='w-full grid grid-cols-1  sm:grid-cols-3 max-md:[&>*:nth-child(3n+1)]:col-start-1 md:grid-cols-7 md:[&>*:nth-child(5n+1)]:col-start-2  gap-x-4 gap-y-16  justify-items-center mx-auto my-16 ' >
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