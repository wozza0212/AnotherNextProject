import Blog from "../../components/blog/blog";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";

export const getStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }

const BlogPage = ({allPostsData}) => {
    return (
        <Layout>
            <div>
                <Blog allPostsData={allPostsData}/>
            </div>
        </Layout>
    )
 }

export default BlogPage;