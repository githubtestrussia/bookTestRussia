import {events} from "./events.js";

const LibraryEvents =()=>{
    return (
        <div>
            {events.map(event=>{
                return (
                    <div key={event.key} style={{border:'1px solid black',width: '70vw',marginTop:25,marginRight:40,padding:10}}>
                        <h3>{event.title}</h3>
                        <p> {event.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default LibraryEvents;