import { Component } from "react";
import Feed from "../../components/Feed";

export class Home extends Component {
    

    render() {
        
        return (
            <>
                <h1>
                    Folders:
                </h1>

                <Feed></Feed>
            </>
        )
    }
}