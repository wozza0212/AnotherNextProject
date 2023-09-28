import Link from "next/link";
import Date from "../date";
import styles from "./blog.module.css";
import BlogItem from "./blog-grid-item";

const Blog = ({ allPostsData }) => {
    return (
            <section className={`${styles.headingMd} ${styles.padding1px}`}>

                <h2 className={styles.headingLg}>Blog</h2>
                    <div className={styles.listContainer}>
                        <ul className={styles.list}>
                        {allPostsData.map(({ id, date, title }) => (
                            <BlogItem id={id} date={date} title={title} />
                        ))}
                        </ul>
                    </div>
            </section>
    )


}

export default Blog;