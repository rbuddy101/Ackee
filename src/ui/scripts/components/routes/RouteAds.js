// import { createElement as h } from 'react'
import PropTypes from 'prop-types'
import useSessions from '../../api/hooks/sessions/useSessions'
const RouteAds = () => {
	useSessions()
	
}

RouteAds.propTypes = {
	setRoute: PropTypes.func.isRequired,
	filters: PropTypes.object.isRequired,
}

export default RouteAds