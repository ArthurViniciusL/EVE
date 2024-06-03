import './home-style.css'
import { Component } from "react";
import { PathNameProvider } from '../../utils/PathProvieder';
import { Header } from "../../components/Header";
import Directory from "../../views/Directory";


export class Home extends Component {

    render() {

        return (
            <main className='home-main'>
                <PathNameProvider>
                    <section className='home-section'>
                        <Header />
                        <div class='home-Directory-box'>
                            <Directory key={''}></Directory>

                        </div>
                    </section>
                </PathNameProvider >
            </main>
        )
    }
}