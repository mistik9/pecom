import React from "react";
import { baseUrl } from "./utils/const";
import Input from "./input";



function Settings() {
    const [profileData, setProfileData] = React.useState({})

    function connect() {
        return fetch("http://localhost:3000/AUTH/PROFILEDATA/", {
            method: 'POST',
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(res => setProfileData(res))
            .catch(err => console.log(err))

    }

    return (
        <div className="settings">
            <div className="settings__form">
                <label className="settings__input-label">Логин личного кабинета ПЭК
                    <input className="settings__input" required/>
                </label>
                <label className="settings__input-label">ключ API
                    <input className="settings__input" required/>
                </label>
                <button className="settings__connect-btn" onClick={connect}>Подключить</button>
            </div>
            <div>
                {Object.keys(profileData).map((lable, index) =>
                    <Input
                        value={profileData[lable]}
                        label={lable}
                    />
                )
                }
            </div>
        </div>
    )
}
export default Settings;