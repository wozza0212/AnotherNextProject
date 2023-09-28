import styles from "./blog.module.css";
import BlogItem from "./blog-grid-item";
import BlogGrid from "./blog-grid";
const Blog = ({ allPostsData }) => {
    return (
            <section className={`${styles.headingMd} ${styles.padding1px}`}>

                <h2 className={styles.headingLg}>Blog</h2>
                    <div className={styles.listContainer}>
                    
                        <BlogGrid allPostsData={allPostsData} />
                    </div>
            </section>
    )


}

export default Blog;