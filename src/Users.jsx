
import { useContext, useEffect, useRef, useState } from 'react';
import './Users.scss'
import axios from 'axios';
import VariableProximity from '../ReactBitsComponents/VariableProximity/VariableProximity'
import ShinyText from '../ReactBitsComponents/ShinyText'
import { Context } from './main';

export default function Users() {
    const containerRef = useRef(null);
    const { loading, allUsers, setAllUsers, setLoading, reloadUsers, setReloadUsers } = useContext(Context)
    const [isactive, setIsActive] = useState(false)
    const [confirmTodoCardDeleteButtonVisibility, setConfirmTodoCardDeleteButtonVisibility] = useState(false)

    const [userName, setUserName] = useState("")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [_id, setId] = useState("")

    const [updating, setupdating] = useState(false)




    // it handles todo form visibility 
    const handleTodo = () => {
        if (!isactive) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    function formatDate(dateString) {
        const date = new Date(dateString);

        const options = {
            weekday: "short", // adds Mon, Tue etc.
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        };

        // Example output: "Mon · 27 Oct 2025 · 14:36"
        return date
            .toLocaleString("en-GB", options)
            .replace(",", "")
            .replace(
                /(\w{3}) (\d{2}) (\w{3}) (\d{4}) (\d{2}):(\d{2})/,
                "$1 · $2 $3 $4 · $5:$6"
            );
    }

    async function HandleTodoDelete(username) {
        try {
            setLoading(true);
            await axios.delete(`/delete/${username}`, { withCredentials: true });

            // Remove the deleted user from state so UI updates immediately
            setAllUsers(prev => prev.filter(user => user.userName !== username));

            // Reset delete confirmation if needed
            setConfirmTodoCardDeleteButtonVisibility(false);
        } catch (error) {
            console.error("Error deleting user:", error);
        } finally {
            setLoading(false);
        }
    }

    const HandleImageVisibility = () => {
        setConfirmTodoCardDeleteButtonVisibility(true)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(
                '/add/fakeUser',
                { userName, fullName, email, phone },
                { withCredentials: true }
            );

            setReloadUsers(prev => !prev)


        } catch (error) {
            console.error("Error adding user:", error);
        } finally {
            setLoading(false);
        }
    }
    const handleUpdating = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(userName, fullName, email, phone, _id);

        try {
            const response = await axios.put(
                '/updateUser', // backend route
                { userName, fullName, email, phone, _id },
                { withCredentials: true }
            );

            // Update state so UI reflects changes immediately
            setAllUsers(prev =>
                prev.map(user => user._id === _id ? response.data : user)
            );

        } catch (error) {
            console.error("Error updating user:", error);
        } finally {
            setLoading(false);
        }
    };

    const HandleUpdate = (items) => {
        const { userName, fullName, email, phone, _id } = items
        setUserName(userName)
        setFullName(fullName)
        setEmail(email)
        setPhone(phone)
        setId(_id)
        setupdating(true)
        setIsActive(true)

    }

    return (
        <div className='userContainer'>
            {!allUsers ?
                // loader
                <>
                    {/* skeleton loader should be here */}
                    <div className=' loarderTodo'>
                        <div className='todo-loading-header'> </div>
                        <div className='todo-loading-task-container'>
                            <div className='todo-loader-task todo-one'></div>
                            <div className='todo-loader-task todo-two'></div>
                            <div className='todo-loader-task todo-three'></div>
                            {/* <div className='todo-loader-task todo-four'></div>
                            <div className='todo-loader-task todo-five'></div>
                            <div className='todo-loader-task todo-six'></div>
                            <div className='todo-loader-task todo-seven'></div>
                            <div className='todo-loader-task todo-eight'></div> */}
                        </div>
                    </div>
                </>
                :
                <>
                    {/* user */}
                    {allUsers?.map((items, index) => (
                        <div key={index} className='user-card '
                        //  style={{ backgroundColor: handleTodoListBg(items?.theme) }}

                        >
                            <div
                                className='username-container'
                            // style={{ backgroundColor: handleTitleColor(items.theme) }}
                            >
                                <h2
                                    ref={containerRef}>
                                    <VariableProximity
                                        label={`${items?.userName}`}
                                        className={'variable-proximity-demo'}
                                        fromFontVariationSettings="'wght' 400, 'opsz' 22"
                                        toFontVariationSettings="'wght' 1400, 'opsz' 40"
                                        containerRef={containerRef}
                                        radius={100}
                                        falloff='linear'
                                    />

                                </h2>

                                <div className='user-delete-button'>
                                    <img
                                        onClick={() => HandleImageVisibility()}
                                        src="/img/delete_todo.png" alt="" />
                                    {confirmTodoCardDeleteButtonVisibility &&
                                        <p
                                            onClick={() => HandleTodoDelete(items?.userName)}
                                            style={{
                                                color: "#353535ff",
                                                cursor: "pointer",
                                                fontWeight: "bold",
                                            }}>Are you sure ?</p>

                                    }
                                </div>


                            </div>
                            <div className='user-data'>
                                <h2>
                                    <ShinyText
                                        text={`Full Name: ${items?.fullName}`}
                                        disabled={false}
                                        speed={5}
                                        className='custom-class'
                                    />
                                </h2>
                                <h2>
                                    <ShinyText
                                        text={`Email: ${items?.email}`}
                                        disabled={false}
                                        speed={5}
                                        className='custom-class'
                                    />
                                </h2>
                                <h2>
                                    <ShinyText
                                        text={`Phone Number: ${items?.phone}`}
                                        disabled={false}
                                        speed={5}
                                        className='custom-class'
                                    />
                                </h2>
                                <div className='data-update-button' onClick={() => HandleUpdate(items)}>
                                    <img src="/img/edit.png" alt="" />
                                </div>
                            </div>

                            <div className='todo-info-container'>
                                <ShinyText
                                    text={`${formatDate(items?.createdAt)}`}
                                    disabled={false}
                                    speed={5}
                                    className='custom-class'
                                />
                            </div>
                        </div>
                    ))}
                </>
            }

            {/* form card container */}
            <div className={`todo-add ${isactive ? "active" : ""}`} style={{ display: `${!isactive ? 'flex' : ''}` }}>
                {isactive ?
                    <>
                        <div onClick={handleTodo} className='exit-butotn-container'>
                            <div className='close-button-container'>
                                <img src="/img/cross.png" alt="" />
                            </div>
                        </div>
                        <div className='todo-add-form-container'>
                            <form

                                onSubmit={updating ? handleUpdating : handleSubmit}
                                className="todo-form">

                                <input
                                    type="text"
                                    className="todo-input"
                                    placeholder="UserName"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    className="todo-input"
                                    placeholder="fullName"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    className="todo-input"
                                    placeholder="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    className="todo-input"
                                    placeholder="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />


                                <button type="submit" className="save-todo-btn">

                                    <ShinyText
                                        text={`${loading ? "Submitting" : "Submit"}`}
                                        disabled={false}
                                        speed={5}
                                        className='custom-class'
                                    />
                                </button>
                            </form>

                        </div>
                    </> : <img onClick={handleTodo} src="/img/Add_Todo.png" alt="" />}
            </div>
        </div >
    );
}