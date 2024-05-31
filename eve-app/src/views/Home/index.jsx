import { Component } from "react";
import Directory from "../../components/Directory";

export class Home extends Component {
    
    render() {
        
        return (
            <>
                <h2>
                    Folders:
                </h2>

                <Directory></Directory>
            </>
        )
    }
}