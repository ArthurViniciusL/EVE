import { Component } from "react";
import Directory from "../../components/Directory";

import './home-style.css'
import { Header } from "../../components/Header";


export class Home extends Component {

    render() {

        return (
            <main className="box-home-content">
                <section>
                    <Header></Header>

                    <div className="directory-content">
                        <Directory></Directory>
                    </div>
                </section>
            </main>
        )
    }
}