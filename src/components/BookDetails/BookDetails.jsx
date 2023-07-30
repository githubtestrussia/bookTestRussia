import {useSelector} from "react-redux";

const BookDetails =()=>{
    const {bookProp} = useSelector(state=>state.libraryReducer);

    return (
        <div style={{width:'70vw',border:'2px solid #3d8eff ',height:'40vh',marginLeft:30,marginTop:20, padding:20}}>
            <h1>{bookProp.author}</h1>
            <img src={bookProp.thumbnail} alt={bookProp.title}/>
            <h2>{bookProp.url}</h2>
            <p>{bookProp.description}</p>

    </div>)
}

export default BookDetails;