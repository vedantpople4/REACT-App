import { useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:'My new website', body:'lorem ipsum...',author:'mario', id:1 },
        {title:'Next welcome party', body:'lorem ipsum...',author:'ross', id:2},
        {title:'Web dev tools', body:'lorem ipsum...',author:'joey', id:3 }
    ]);
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" />
        </div>
    );
} 
 
export default Home;
