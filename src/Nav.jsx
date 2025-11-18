import { useRef } from "react";
import VariableProximity from "../ReactBitsComponents/VariableProximity/VariableProximity";
import ShinyText from "../ReactBitsComponents/ShinyText";

export default function Nav() {

    const containerRef = useRef(null);

    return (
        <div
            style={{
                zIndex:"9999",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#1e1e1e",
                color: "white",
                padding: "10px 20px",
                borderBottom: "2px solid #333",
                fontFamily: "monospace",
            }}
        >
            <span style={{ fontWeight: "bold", letterSpacing: "0.5px" }}>
                ⚙️ CRUD ASSIGNMENT
            </span>
            <span
            >
            </span>
        </div>
    )
}