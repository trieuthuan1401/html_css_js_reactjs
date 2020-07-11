import React from 'react'
import useMagicColor from '../../hooks/useMagicColor'
import './style.css'
function MagicBox(props) {
    const Color = useMagicColor();
    return (
        <div
            style={{ backgroundColor: Color }}
            className="magic-box mt-3">
        </div>
    )

}
export default MagicBox



