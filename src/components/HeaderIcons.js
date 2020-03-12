import React from 'react';

export default ({ icons }) => (
    <div className="header-icons">
        {icons.map((icon, i) => <button key={i} className="header-icon"><img {...icon}></img></button>)}
    </div>
);
