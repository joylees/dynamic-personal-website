import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editHeader } from '../actions'

const EditHeader = ({ header, setEditing, editHeader }) => {
    const [image, setImage] = useState(header.image)
    const [description, setDescription] = useState(header.description)

    return (
        <div>
            <input
                placeholder='Enter image URL'
                onChange={e => setImage(e.target.value)}
                value={image}
            />
            <input
                placeholder='Enter description'
                onChange={e => setDescription(e.target.value)}
                value={description}
            />
            <button
                onClick={() => {
                    editHeader({ image, description })
                    setEditing(false)
                }}>
                Save
            </button>
            <button
                onClick={() => {
                    setEditing(false)
                }}>
                Cancel
            </button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    editHeader: header => dispatch(editHeader(header)),
})

export default connect(null, mapDispatchToProps)(EditHeader)