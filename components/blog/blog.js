import Link from "next/link";
import Date from "../date";
import styles from "./blog.module.css";

const Blog = ({ allPostsData }) => {
    return (
            <section className={`${styles.headingMd} ${styles.padding1px}`}>
            <h2 className={styles.headingLg}>Blog</h2>
                <ul className={styles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={styles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br />
                    <small className={styles.lightText}>
                        <Date dateString={date} />
                    </small>
                </li>
                ))}
                </ul>
        </section>
    )


}

export default Blog;