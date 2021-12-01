import { useEffect, useState } from "react"
import Portfoliolist from "../portfolioList/Portfoliolist"
import Popup from "./popup/Popup"
import "./portfolio.scss"
import {All,Website,d_Games,Mobile_App} from "../../data"
import Heading from "../heading/Heading"
import Lines from "../lines/Lines"


export default function Portfolio() {
    const [buttonpop,setbuttonpop] = useState(false) 
    const [selected,setSelected] = useState("All")
    const [selectimage,setSelectedimage] = useState("") 
    const [selectedtitle,setSelectedtitle] = useState("")  
    //const [selectedtitletext,setSelectedtext] = useState("")  
    const [data,setData] = useState([])
    const list =[

        {
            id : "All",
            title : "All"
        },
        {
            id : "Website",
            title : "Website"
        },
        {
            id : "Mobile App",
            title : "Mobile App"
        },
        {
            id : "2d Games",
            title : "2d Games"
        }
        
    ]

    useEffect(() => {
        switch (selected){
            case "All" :
                setData(All);
                break;
            case "Website" :
                setData(Website);
                break;
            case "Mobile App" :
                setData(Mobile_App);
                break;
            case "2d Games" :
                setData(d_Games);
                break;
            default:
                setData(All);
                break;
                
        }
    }, [selected])
    return (
        <div className="portfolio" id="portfolio" >
            
            
            <Heading title={'Portfolio'} sub={'my works '}/>
             
            <ul>
                {list.map(items =>(
                    <Portfoliolist  title = {items.title} id = {items.id} active={selected === items.id} setSelected = {setSelected}/>
                 ))}
            </ul>
            <div className="container">
                
                
                {data.map((d)=> (
                    
                    <><div className="item" onClick={() => (setbuttonpop(true),setSelectedimage(d.img),setSelectedtitle(d.title))}>
                        <img src={d.img} alt="" />

                        <h3>{d.title}</h3>

                    </div>
                    <Popup trigger={buttonpop} settrigger={setbuttonpop} select={selectedtitle}>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"/>
                            <h3 className="title">{selectedtitle}</h3>
                            <div className="contain" id="contain">
                                
                                <img src={selectimage} alt="" />
      
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum non massa porttitor finibus. Aliquam pulvinar ligula arcu. Ut sed placerat dolor,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum non massa porttitor finibus. Aliquam pulvinar ligula arcu. Ut sed placerat dolor.
                            </p>
                            
                                <i class="fab fa-github " onClick={()=> window.open(d.link)}> link to the project's github repository</i>
                                

                            
                        </Popup></>
                    
                        
                ) )}
                
               
            </div>
        </div>
    )
}
