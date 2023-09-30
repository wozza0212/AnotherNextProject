import Link from "next/link";
import Date from "../date";
import styles from "./blog-grid-item.module.css";

const BlogItem = ({ id, date, title, excerpt }) => {
    console.log(`id: ${id}`)
    return (
        <li className={styles.listItem} key={id}>
        <Link className={styles.blogLinkName} href={`/posts/${id}`}>{title}</Link>
        <br />
        <p className={styles.excerpt}>{excerpt}</p>
        <small className={styles.lightDateText}>
            <Date dateString={date} />
        </small>
    </li>
    )
}

export default BlogItem;