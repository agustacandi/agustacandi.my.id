import Typed from 'react-typed';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import Post from '../components/Post';

export default function Home({ allPostsData }) {
  return (
    <Layout title="Home">
      <img
        src="/gutsss.jpg"
        alt="Guts"
        className="w-28 rounded-full mx-auto border-gray-200 border-4"
      />
      <h1 className="font-bold text-center py-2 text-xl">
        Candi Agusta Islamiano
      </h1>
      <p className="text-center">
        <Typed strings={['GNU/Linux and Web enthusiast']} typeSpeed={80} />
      </p>
      <div className="py-8">
        {allPostsData
          .slice(0, 4)
          .map(({ id, title, date, author, images, tags, desc }) => {
            return (
              <Post
                key={id}
                id={id}
                title={title}
                srcImg={images}
                author={author}
                date={date}
                tags={[...tags]}
                desc={desc}
              />
            );
          })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
