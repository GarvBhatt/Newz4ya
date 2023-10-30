import NewsCard from "./NewsCard";
import axios from "axios";
import { useState, useEffect } from "react";
import Man_Sprinkler from "./Man_Sprinkler";

let NewsBox = (props)=> {

    let Spiderman = async ()=>{
        props.setisItTrueLeonard(true);
        const data = await axios.get(`https://newz4yapi.onrender.com/news?q=${props.q}&pageNo=${props.pageNo}`);
        props.setisItTrueLeonard(false);
        return data.data.response;
    }

    const [news, setnews] = useState([]);

    useEffect(() => {
        Spiderman().then(articles => setnews(articles));
    }, [props.pageNo,props.q]);
    
    if(props.isItTrueLeonard)
    {
        return (
            <Man_Sprinkler isItTrueLeonard={props.isItTrueLeonard}/>
        )
    }
    return (
            <div className="container my-3">
                <h2 style={{fontFamily:"fantasy", margin:"45px", display:"flex", justifyContent:"center"}}>Top H̶e̶a̶d̶l̶i̶n̶e̶s̶  &nbsp; {props.q} lines</h2>

                <div className="row">
                    {news.map((e)=>{

                        const newsObj =
                        {
                            cardText : e.description,
                            timeAndDate : e.publishedAt,
                            author : e.author,
                            source : e.source,
                            title : e.title,
                            imgUrl : e.urlToImage,
                            url : e.url,
                        }

                        return (
                            <div key={e.url} className="my-3 col-md-3">
                                <NewsCard newsObj={newsObj}/>
                            </div>
                        )
                    })}
                </div>
            </div>
    )
}

export default NewsBox;