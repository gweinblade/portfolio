import { useEffect, useState } from "react"
import Portfoliolist from "../portfolioList/Portfoliolist"
import Popup from "./popup/Popup"
import "./portfolio.scss"
import { All, Website, d_Games, Mobile_App } from "../../data"
import Heading from "../heading/Heading"




export default function Portfolio() {
    


    const [buttonpop, setbuttonpop] = useState(false)
    const [selected, setSelected] = useState("All")
    const [selectimage, setSelectedimage] = useState("")
    const [selectdesciption, setSelecteddesciption] = useState("")
    const [selectedtitle, setSelectedtitle] = useState("")
    const [selectedtitlelink,setSelectedlink] = useState("")  
    const [data, setData] = useState([])
    const list = [

        {
            id: "All",
            title: "All"
        },
        {
            id: "Website",
            title: "Website"
        },
        {
            id: "Mobile App",
            title: "Mobile App"
        },
        {
            id: "2d Games",
            title: "2d Games"
        }

    ]
    

    useEffect(() => {
        switch (selected) {
            case "All":
                setData(All);
                break;
            case "Website":
                setData(Website);
                break;
            case "Mobile App":
                setData(Mobile_App);
                break;
            case "2d Games":
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
             
            <ul >
                {list.map(items =>(
                    <Portfoliolist  key={items.title} title = {items.title} id = {items.id} active={selected === items.id} setSelected = {setSelected}/>
                 ))}
            </ul>
            <div className="container">
                {data.map((d)=> (
                    // eslint-disable-next-line
                    <><div className="item" key={d.title} onClick={() => (setbuttonpop(true),setSelectedimage(d.img),setSelectedtitle(d.title),setSelecteddesciption(d.text),setSelectedlink(d.link))}>
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                   
                    </>         
                ) )}
                
                {
                    buttonpop ? <Popup  buttonpop={buttonpop} setbuttonpop={setbuttonpop} select={selectedtitle}>
                                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"/>
                                    <h3 className="title">{selectedtitle}</h3>
                                    <div className="contain" id="contain">                            
                                        <img src={selectimage} alt="" />
                                    </div>
                                    <p>{selectdesciption}</p>       
                                    <i className="fab fa-github " onClick={()=> window.open(selectedtitlelink)}> link to the project's github repository</i>
                                </Popup> 
                            : <div></div>
                    }
               
            </div>
        </div>

    )

}