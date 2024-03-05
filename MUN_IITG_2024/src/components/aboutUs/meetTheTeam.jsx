import secyImg from '../../assets/aboutUs/secy1.png'
import ketan from '../../assets/aboutUs/Ketan.png'
import adityan from '../../assets/aboutUs/Adithyan.png'
import man from '../../assets/aboutUs/man.png'
import TeamCard from './teamCard';
import SectionHeading from '../general/sectionHeading';

const MeetTheTeam = () => {
    const team = [
        ['Samarth Jhunjhunwala', 'Secretary General',{linkedin:'https://www.linkedin.com/in/samarth-jhunjhunwala/',instagram:'https://www.instagram.com/'},secyImg],
        ['Pratham Garg', 'Director General',{linkedin:'https://www.linkedin.com/in/pratham-garg2728/',instagram:'https://www.instagram.com/prathamm2728?igsh=MWFwZ3RxMmYyd2kyMQ=='},man],
        ['Vedika Garg','Director of International Press',{linkedin:'https://www.linkedin.com/in/vedikag/',instagram:'https://www.instagram.com/confusion.o_o?igsh=eG1zcno3bjhpeTBx'}, secyImg],
        ['Kaustubh Dhote','Director Logistics',{linkedin:'https://www.linkedin.com/in/kaustubh-dhote?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',instagram:'https://www.instagram.com/kaus_theta_/?utm_source=qr&r=nametag'}, man],
        ['kjbxchzvx hzbc','Designer',{linkedin:'https://www.linkedin.com/',instagram:'https://www.instagram.com/'}, secyImg],
        ['kjbcxhbzjab jiabc','Designer',{linkedin:'https://www.linkedin.com/',instagram:'https://www.instagram.com/'}, man],
        ['kajbsibs akjbcnansjc','Designer',{linkedin:'https://www.linkedin.com/',instagram:'https://www.instagram.com/'}, secyImg],
        ['name','Designer',{linkedin:'https://www.linkedin.com/',instagram:'https://www.instagram.com/'}, man],
        ['name','Designer',{linkedin:'https://www.linkedin.com/',instagram:'https://www.instagram.com/'}, adityan],
        ['name','Designer',{linkedin:'https://www.linkedin.com/',instagram:'https://www.instagram.com/'}, ketan],
    ]
    return ( 
        <div className="px-9 max-letter:px-4 py-10 mt-40 w-full relative overflow-hidden">
            <SectionHeading title={'Meet the Team'} color={'#60E1A4'} />
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-16 justify-items-center mx-auto my-16 ' >
            {
                team.map(([name,position,socialMedia,img])=>(
                    <TeamCard key={name} name={name} position={position} socialMedia={socialMedia} img={img} />
                ))
            }
            </div>
        </div>
     );
}
 
export default MeetTheTeam;