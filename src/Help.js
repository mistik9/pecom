import React from 'react';

function Help() {
    return (
        <div className="help">
            <p className="help__text">Для получения помощи перейдите в мессенджер:</p>
            <button className="help__button" aria-label="WhatsApp"><a className="help__link" href="https://wa.me/79958454368?text=" target="_blank" rel="noreferrer" >WHATSAPP</a></button>
            <button className="help__button" aria-label="Telegram"><a className="help__link" href="https://t.me/+79958454368" target="_blank" rel="noreferrer" >TELEGRAM</a></button>
        </div>
    )
}
export default Help