import ContactDetails from "../components/contactUs/contactDetails";
import Navbar from "../components/general/Navbar";
import PageHeader from "../components/general/pageHeader";

const ContactUs = () => {
    return ( 
        <>
            <Navbar/>
            <PageHeader title={'Contact Us'} color={'#F8506B'}/>
            <ContactDetails/>
        </>
     );
}
 
export default ContactUs;