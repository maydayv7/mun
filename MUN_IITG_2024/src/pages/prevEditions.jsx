import Timeline from "../components/PrevEditions/timeline";
import Navbar from "../components/general/Navbar";
import PageHeader from "../components/general/pageHeader";

const PrevEditions = () => {
    return ( 
        <div className="overflow-x-hidden">
            <Navbar/>
            <PageHeader title={'Previous Editions'} color={'#AAB4E7'}/>
            <Timeline/>
        </div>
     );
}
 
export default PrevEditions;