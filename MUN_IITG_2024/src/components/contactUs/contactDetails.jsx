import callImg from '../../assets/contactUs/Call.svg'
import mailImg from '../../assets/contactUs/Mail.svg'
import locationImg from '../../assets/contactUs/Location.svg'
import DisplayDetails from './displayDetails'
const ContactDetails = () => {
    const details = [
        [callImg,'Call us','tel',['7981828510','7011533630']],
        [mailImg,'Mail us','mailto',['iitgmun@alcheriga.com']],
        [locationImg,'Our location','location',['Conference Hall, IIT Guwahati,','North Guwahati, Guwahati,','Assam 781039']],

    ]
    return ( 
        <div className='flex flex-row flex-wrap justify-evenly align-center md:grid md:grid-cols-3 gap-x-2 w-full lg:w-[64%] px-2 mx-auto my-16 md:justify-between items-start' >
            {
                details.map(([imgLink, title,type, detailsArr])=>(
                    <DisplayDetails key={title} imgLink={imgLink} type={type} title={title} detailsArr={detailsArr} />
                ))
            }
        </div>
     );
}
 
export default ContactDetails;