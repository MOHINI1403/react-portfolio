import React from "react"
const Items=({projectItems})=>{
    return(

        <>
            {projectItems.map((projectItem)=>{
                const{id,img,category,title,link}=projectItem;
                return(
                    <div className="project__items card card-two">
                        <div className="portfolio__img__wrapper">
                            <img src={img}alt=''className="portfolio__img"/>
                        </div>
                    </div>
                )
            })}
        </>

    )
}
export default Items


