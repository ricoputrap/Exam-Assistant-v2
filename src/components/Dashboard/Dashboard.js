import Body from '../Body/Body'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  )

}

export default Dashboard
