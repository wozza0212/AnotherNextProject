import Link from "next/link";
import Layout from "../layout";
import Date from "../date";
import utilStyles from "../../styles/utils.module.css";

const Blog = ({ allPostsData }) => {
    return (
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br />
                    <small className={utilStyles.lightText}>
                        <Date dateString={date} />
                    </small>
                </li>
                ))}
                </ul>
        </section>
    )


}

export default Blog;