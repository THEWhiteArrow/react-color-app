import React from 'react'
import './DraggableColorBox.css'
import DeleteIcon from '@mui/icons-material/Delete';

export default function DraggableColorBox(props) {
    const handleDelete = () => {
        props.handleDelete(props.name)
    }
    return (
        <div className='DraggableColorBox' style={{ backgroundColor: props.color, wordBreak: 'break-word' }}>

            <div className='box-content'>
                <span>
                    {props.name}
                </span>
                <DeleteIcon className='delete-icon' onClick={handleDelete} />
            </div>
        </div>
    )
}