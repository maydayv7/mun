const DisplayDetails = ({imgLink, title,type, detailsArr }) => {
    const links = ['tel', 'mailto']
    return ( 
        <div className="flex flex-col justify-center align-center items-center text-center mx-10 my-10 md:mx-0 md:my-0">
            <img className="w-32" src={imgLink} alt={title} />
            <p className="text-darkRed font-montserrat font-semibold text-2xl mt-3 mb-10">{title}</p>
            {
                detailsArr.map((item)=>(
                    links.includes(type)?
                    (<a href={`${type}:${item}`} key={title} className="text-darkBlue text-base no-underline mb-3">
                        {item}
                    </a>):
                    (<p key={title} className="text-darkBlue text-base">
                    {item}
                    </p>)
                ))
            }
        </div>
     );
}
 
export default DisplayDetails;