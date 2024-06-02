import { Component } from "react";
import Directory from "../../views/Directory";

import './home-style.css'
import { Header } from "../../components/Header";


export class Home extends Component {

    render() {

        return (
            <main className="box-home-content">
                <section>
                    <Directory key={''}></Directory>
                    <div className="pseudo-footer"></div>
                    {/*  <Header></Header> */}
                </section>
            </main>
        )
    }
}