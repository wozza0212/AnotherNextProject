import BlogItem from "./blog-grid-item";
import styles from "./blog.module.css";



const BlogGrid = ({ allPostsData }) => { 
    return (
        <ul className={styles.list}>
        {allPostsData.map(({ id, date, title }) => (
            <BlogItem id={id} date={date} title={title} />
        ))}
        </ul>
    )
}

export default BlogGrid;