import React from 'react'
import PropTypes from 'prop-types'

interface Props{
    cartItemsCount: number;
}

const NavBar = ({cartItemsCount}: Props) => {
  return <div>NavBar: {cartItemsCount}</div>
}

NavBar.propTypes = {}

export default NavBar