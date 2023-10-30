import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";
import Man_Sprinkler from "./Man_Sprinkler";

let NewsBox = (props)=> {
    let Spiderman = async ()=>{
        let data=await fetch(`https://newsapi.org/v2/everything?q=${props.q}&apiKey=${import.meta.env.VITE_API_KEY}&page=${props.pageNo}&pageSize=8`);
        let pdata=await data.json();
        props.setisItTrueLeonard(false);
        return pdata.articles;
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
        <div>
            <div className="container my-3">
                <h2 style={{fontFamily:"fantasy", margin:"45px", display:"flex", justifyContent:"center"}}>Top H̶e̶a̶d̶l̶i̶n̶e̶s̶  &nbsp; {props.q} lines</h2>


                <div className="row">
                    {news.map((e)=>{
                        return (
                            <div key={e.url} className="my-3 col-md-3">
                                <NewsCard cardText={e.description} timeAndDate={e.publishedAt} author={e.author} source={e.source} title={e.title} imgUrl={e.urlToImage} url={e.url}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default NewsBox;