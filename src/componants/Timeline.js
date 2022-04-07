import { useEffect ,useState} from "react";


const Timeline = ()=>{
    const [posts,setpost]=useState([])
    useEffect(async()=>{
        console.log('rendering time line')

        let req = await fetch('https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json')
        let res = await req.json()
        setpost(res)
    },[])
    return(
        <div>
            <h2>Timeline</h2>
            {
                
            }

        </div>
    )
}
export default Timeline;