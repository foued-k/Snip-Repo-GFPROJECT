import { useState } from "react";
import axios from "axios";
import NavbarDashboard from "./NavbarDashboard";
import { Link } from "react-router-dom";

function Dashboard() {
    const [snippets, setSnippets] = useState([]);

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
        <div>

            <NavbarDashboard/>

            <div className="container dashboard">
                <div className="row">
                    <div className="col-4 dashboard-menu">
                        <p>Add new snippets</p>
                        <p><Link to={`/mysnippets`} className="links">My snippets</Link></p>
                    </div>

                    <div className="col">
                        <div className="latestSnippets">
                            <h4>My latest snippets</h4>
                            {/* <div className="d-flex gap-5">
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
            </div>
        </div>
    )
}

export default Dashboard;