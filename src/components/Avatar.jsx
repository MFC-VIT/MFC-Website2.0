import React from 'react';
import { FiUser } from "react-icons/fi"
import PropTypes from "prop-types"

const Avatar = ({ name, type='icon', color='primary', size, loading=false }) => {
const avatarStyle = {
  width: `${size ? size : 32}px`,
  height: `${size ? size : 32}px`,
  padding: `${size ? Math.ceil(size/5) : 6}px`
}
return (
    <div className="inline">
      {type != 'name'
        ? (
          <div className={`rounded-full inline-flex justify-center items-center ${ color == 'primary' ? 'bg-main text-primary' : 'bg-primary text-main' } cursor-pointer ${loading && 'animate-pulse bg-secondary'}`} style={avatarStyle}>
            <FiUser size={size ? size : 18} />
          </div>
        )
        : (
          <div className={`rounded-full inline-flex justify-center items-center ${ color == 'primary' ? 'bg-main text-primary' : 'bg-primary text-main' } cursor-pointer {loading && 'animate-pulse bg-secondary'}`} style={avatarStyle}>
            <div style={{fontSize: `${size ? size/2.5 : 16}px`}}>{name?.toUpperCase().split(" ").map(name=>name[0]).join("")}</div>
          </div>
        )
      }
    </div>
  )
}

Avatar.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(['name', 'icon']),
  color: PropTypes.oneOf(['primary', 'dark']),
  size: PropTypes.number,
  loading: PropTypes.bool
}

export default Avatar
