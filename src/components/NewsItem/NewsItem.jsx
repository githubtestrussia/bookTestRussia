const NewsItem =({title,author,description})=>{
    return (
        <div className='newsItem' style={{ border:'1px solid black',height:'12vh',minWidth:'63vw',marginBottom: 15,padding:10,cursor:'pointer' }}>
            <div style={{display:'flex', justifyContent:'space-between', }}>
                <h1 style={{fontSize:20,}}>{title}</h1>
                <span style={{display:'inline-block', textDecoration:'underline'}}>{author}</span>
            </div>
                <p style={{fontSize:12}}>{description.split(' ').slice(0,40).join(' ')}</p>
        </div>
    )
}

export default NewsItem;
