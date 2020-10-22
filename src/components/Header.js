/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { HeaderTitle, EditButton } from '../styles/index'
import EditHeader from './EditHeader'

const Header = props => {
  const { image, description } = props
  const [editing, setEditing] = useState(false)

  return (
    <div style={{ margin: '0', padding: '4rem', background: '#F6F7F7' }}>
      <HeaderTitle> Hey, this is me! </HeaderTitle>
      <EditButton onClick={() => setEditing(true)}>Edit</EditButton>
      {
        editing ? <EditHeader header={{ image, description }} setEditing={setEditing} />
          : (
            <div>
              <div>
                <img style={{ maxHeight: '300px' }} src={image} alt="" />
                <h2>{description}</h2>
              </div>
            </div>
          )
      }
    </div>
  )
}

const mapStateToProps = ({ image, description }) => ({
  image, // props.image
  description, // props.description
})

export default connect(mapStateToProps)(Header)
