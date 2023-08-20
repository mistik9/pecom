import React from "react";

function Settings() {

    
    return (
        <div className="settings">
            <div className="settings__form">
                <label className="settings__input-label">Логин личного кабинета ПЭК
                <input className="settings__input" required></input>
                </label>
                <label className="settings__input-label">ключ API
                <input className="settings__input" required></input>
                </label>
                <button className="settings__connect-btn"  >Подключить</button>
            </div>
            <div>

            </div>
        </div>
    )
}
export default Settings;