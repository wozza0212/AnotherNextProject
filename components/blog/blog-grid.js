import BlogItem from "./blog-grid-item";
import styles from "./blog.module.css";



const BlogGrid = ({ allPostsData }) => { 
    return (
        <ul className={styles.list}>
        {allPostsData.map(({ id, date, title, excerpt}) => (
            <BlogItem id={id} date={date} title={title} key={id} excerpt = {excerpt}/>
        ))}
        </ul>
    )
}

export default BlogGrid;