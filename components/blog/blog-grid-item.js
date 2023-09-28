import Link from "next/link";
import Date from "../date";
import styles from "./blog-grid-item.module.css";

const BlogItem = ({ id, date, title }) => {
    console.log(`id: ${id}`)
    return (
        <li className={styles.listItem} key={id}>
        <Link className={styles.blogLinkName} href={`/posts/${id}`}>{title}</Link>
        <br />
        <small className={styles.lightText}>
            <Date dateString={date} />
        </small>
    </li>
    )
}

export default BlogItem;