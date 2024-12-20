import './addblog.css';
import DashboardLastMain from '../../component/main';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const navigate = useNavigate();

  const handleAddPost = () => {
    navigate('/DashboardLastMain');
  };

  return (
    <main className="Dashboard-last-main">
      <div className="Dashboard-last-main-body">
        <div className="Dashboard-last-search-bar">
          <input
            type="search"
            placeholder="Search here..."
            aria-label="Search"
          />
        </div>
        <div className="add-post-list-addpost">
          <button onClick={handleAddPost}>Add Post</button>
        </div>
      </div>
    </main>
  );
};

export default AddBlog;
