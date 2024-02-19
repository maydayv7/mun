import ContactDetails from "../components/contactUs/contactDetails";
import Map from "../components/contactUs/map";
import Navbar from "../components/general/Navbar";
import PageHeader from "../components/general/pageHeader";
import SectionHeading from "../components/general/sectionHeading";

const ContactUs = () => {
    return ( 
        <>
            <Navbar/>
            <PageHeader title={'Contact Us'} color={'#F8506B'}/>
            <ContactDetails/>
            <Map/>
            
        </>
     );
}
 
export default ContactUs;