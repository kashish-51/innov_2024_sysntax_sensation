import { Dashboard } from '../components/Dashboard';
import Header from '../components/Header';
import Addtask from '../components/Addtask';
import Footer from '../components/Footer'
const Main = () => { 
    return (
        <div>
          <Header />
          <div className="flex">
            <Dashboard />
            <div className="flex-1">
              <Addtask />
            </div>
          </div>
          <Footer />
        </div>
      );
    }
    

export default Main;