import { useState } from "react"
import Chatroom from "./Chatroom";

const menus = [
    "Chatroom",
    "Notifications"
]
const Classroom = ({ username }: { username: string }) => {
    const [activeMenu, setActiveMenu] = useState(menus[0]);

    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex"
        }}>
            {/* sidebar */}
            <div style={{
                width: "20%",
                height: "100%",
                borderRight: "5px solid gray"
            }}>
                <ul style={{
                    marginTop: "4rem",
                }}>
                    {menus.map((menu) => {
                        return (
                            <li>
                                <button style={{
                                    fontFamily: "sans-serif",
                                    padding: "12px 24px",
                                    cursor: "pointer",
                                    background: activeMenu === menu ? "black" : "none",
                                    color: activeMenu === menu ? "white" : "black",
                                    border: 0,
                                    outline: 0,
                                    width: "100%"
                                }}
                                    onClick={() => setActiveMenu(menu)}>
                                    {menu}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column"
            }}>
                {/* main window */}
                <div style={{
                    width: "100%",
                    height: "100%"
                }}>
                    {activeMenu === "Chatroom" ? <Chatroom username={username} /> : <>Not yet created</>}
                </div>
            </div>
        </div>
    )
}

export default Classroom