import { Component } from "react";
import DirectoryView from "../../components/DirectoryView";

import './home-style.css'
import { Header } from "../../components/Header";


export class Home extends Component {

    render() {

        return (
            <main className="box-home-content">
                <section>
                    <Header></Header>
                    <div className="directory-content">
                        <DirectoryView></DirectoryView>
                    </div>
                </section>
            </main>
        )
    }
}