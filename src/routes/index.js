import React from 'react'
//Tools
import { connect } from 'react-redux'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
//Layouts
import Navigations from './../components/layout/Navigations'
import SidenavProfile from './../components/layout/SidenavProfile'
//Components
import Auth from './../components/pages/Auth'
import Dashboard from './../components/pages/Dashboard'
import ClassId from './../components/pages/ClassId'
import ClassId_Type2 from './../components/pages/ClassId_Type2'
	import BuildingClass from './../components/pages/ClassId_Type2/BuildingClass'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faHome, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faBuilding, faHome, faSignInAlt, faSignOutAlt)
class Routes extends React.Component{
	render(){
		const { auth } = this.props
		return(
			<Router>
				<div id='Routes'>
					<Navigations />
					<SidenavProfile />
					<div className='Component'>
						<Switch>
							<Route path='/' component={Dashboard} exact />
							<Route path='/auth' component={Auth} />
							<Route path='/classid' component={ClassId} />
							<Route path='/classidtype2' component={ClassId_Type2} />
								<Route path='/buildingclass/:buildingId' component={BuildingClass} />
						</Switch>
					</div>
				</div>
			</Router>
		)
		
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return{
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps)(Routes)