import { Component } from "react";
import Feed from "../../components/Feed";

export class Home extends Component {
    
    render() {
        
        return (
            <>
                <h2>
                    Folders:
                </h2>

                <Feed></Feed>
            </>
        )
    }
}