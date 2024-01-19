// import { useState } from "react";
// import axios from "axios";

function Dashboard() {
    // const [snippets, setSnippets] = useState([]);

    // function getSnippets() {
    //     try {
    //         console.log("weight requested front")
    //         axios.get("http://localhost:3020/snippets")
    //             .then(({ data }) => {
    //                 setSnippets(data);
    //                 console.log(snippets);
    //             })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <div className="container dashboard">
            <div className="row">
                <div className="col-4 dashboard-menu">
                    <p>Add new snippets</p>
                    <p>Add new snippets</p>
                </div>


            <div className="col">
                <h3>My latest snippets</h3>
                {/* <div>
                {snippets.map((e) => {
                    return (
                        <div key={e._id}>
                            <h3>{e.title}</h3>
                            <p>{e.description}</p>
                            <p>{e.language}</p>
                        </div>
                    )}
                )}
            </div> */}

            </div>


            </div>




        </div>
    )
}

export default Dashboard;