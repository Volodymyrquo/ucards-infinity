import PropTypes from "prop-types"
import React, { useState } from "react"

import { connect } from "react-redux"
import { Row, Col } from "reactstrap"

import { Link } from "react-router-dom"

// Reactstrap
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap"

// import images
import user from "../../assets/images/users/avatar-5.jpg"

//i18n
import { withTranslation } from "react-i18next"

// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
} from "../../store/actions"

const Header = props => {
  const [search, setsearch] = useState(false)
  const [megaMenu, setmegaMenu] = useState(false)
  const [socialDrp, setsocialDrp] = useState(false)

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }

  function tToggle() {
    props.toggleLeftmenu(!props.leftMenu)
    if (props.leftSideBarType === "default") {
      props.changeSidebarType("condensed", isMobile)
    } else if (props.leftSideBarType === "condensed") {
      props.changeSidebarType("default", isMobile)
    }
  }
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <span
                style={{
                  textTransform: "uppercase",
                  color: "#ffffff",
                  fontSize: "20px",
                  letterSpacing: "4px",
                }}
                className="logo"
              >
                <b>infinity</b>
              </span>

              {/*   <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoDark} alt="" height="17" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logoLightSvg} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoLightPng} alt="" height="19" />
                </span>
              </Link> */}
            </div>

            <button
              type="button"
              onClick={() => {
                tToggle()
              }}
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block">
              <button className="btn header-item noti-icon waves-effect">
                <i className="bx bx-bell " />
                <span className="badge badge-warning badge-pill">5</span>
              </button>
            </div>
            <div className="dropdown d-inline-block">
              <button className="btn header-item noti-icon waves-effect">
                <i className="bx bx-list-ul" />
              </button>
            </div>
            <div className="dropdown d-inline-block">
              <button className="btn header-item noti-icon waves-effect">
                <i className="bx bx-envelope " />
                <span className="badge badge-warning badge-pill">5</span>
              </button>
            </div>
            <div
              className="btn header-item waves-effect"
              id="page-header-user-dropdown"
              tag="button"
            >
              <img
                className="rounded-circle header-profile-user"
                src={user}
                alt="Header Avatar"
              />
              <span className="d-none d-xl-inline-block ml-2 mr-1"></span>
              <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
}

const mapStatetoProps = state => {
  const {
    layoutType,
    showRightSidebar,
    leftMenu,
    leftSideBarType,
  } = state.Layout
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType }
}

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
})(withTranslation()(Header))
