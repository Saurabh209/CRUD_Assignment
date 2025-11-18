import { useContext, useEffect } from "react";
import SpotlightCard from "./ReactBitsComponents/SpotlightCard/SpotlightCard";
import Nav from "./src/Nav";
import Users from "./src/Users";
import { Context } from "./src/main";
import axios from "axios";


export default function Home() {

    const { loading, allUsers, setAllUsers, setLoading } = useContext(Context)


    return (
        <div className="home-parent" >
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 255, 255, 0.23)">
                <div className="home-page-main-container">
                    <Nav />

                    <Users />


                </div>
            </SpotlightCard>
        </div>
    )
}