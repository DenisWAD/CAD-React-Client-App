import {useState, useEffect} from 'react';
import axios from 'axios';
import Article from './Article';

function ArcticleList() {
    const [articleList, setArticleList] = useState([]);

    useEffect(() => 
        async function() {
            var response = await axios.get("http://localhost:3000/articles",
            {headers: {Accept: "application/json"}})
            setArticleList(response.data)
            // console.log(response.data)
            // console.log(articleList)
        } , [])

    return (
        <div>
            Article List
            <ul>
                {
                    articleList.map(function(i, index) {
                        return (
                            <li key={index}>
                                <Article title={i.title} body={i.body} published={i.published}/>

                            </li>
                        )
                    })
                }
            </ul>
{/*                 
                Article List
                <Article /> */}
        </div>
    )
}


export default ArcticleList;