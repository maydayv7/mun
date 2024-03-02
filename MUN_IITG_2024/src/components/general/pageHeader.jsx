const PageHeader = ({title, color}) => {
    return ( 
        <div style={{backgroundColor:`${color}`}} className='w-full aspect-[calc(1440/354)] min-h-[200px] max-h-[350px]  flex flex-row justify-center sm:black sm:text-left text-white relative overflow-x-hidden' >
            <h2 className='text-[48px] sm:text-[60px] md:text-[80px] absolute font-raleway font-extrabold sm:left-[15%] bottom-[14%] drop-shadow-[0px_4px_40px_rgba(0,0,0,0.25)]'>{title}</h2>
        </div>
     );
}
 
export default PageHeader;