import Sider from '../component/sidebar';  
import Blog from '../blogpost/component/blog';  
import DashboardLastMain from '../component/main';
import AddPost from './addblog/addblog';
import Card from './dashboardLastMain/card';

import '../component/css/Dashboard.css';  

const BlogDashboard = () => {
    return (
        <div className="Dashboard-last-container">
            <Sider />
            <div className="main-container-content">
                <AddPost />
                <Card />
            </div>
        </div>
    );
};

export default BlogDashboard;
