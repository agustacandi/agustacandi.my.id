import Date from '../../components/Date';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Calendar from '../../public/assets/svg/calendar.svg';
import User from '../../public/assets/svg/user.svg';
import { DiscussionEmbed } from 'disqus-react';
import Link from 'next/link';

export default function Post({ postData }) {
  return (
    <Layout title={postData.title}>
      <h1 className="font-extrabold lg:text-2xl text-xl">{postData.title}</h1>
      <div className="flex space-x-2 text-gray-500 text-sm">
        <Link href="/about">
          <a className="flex text-blue-200 hover:text-red-500 items-center space-x-2">
            <User />
            <p className="flex items-center">{postData.author}</p>
          </a>
        </Link>
        <p>|</p>
        <p className="flex items-center">
          <Calendar className="inline-block mr-1" />
          <Date dateString={postData.date} />
        </p>
      </div>
      <img
        className="w-full h-{380} py-2 object-cover"
        src={postData.images}
        alt={postData.title}
      />
      <div
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        className="py-4 text-gray-500 text-justify"
      />
      <DiscussionEmbed
        shortname="agustacandi"
        config={{
          url: `http://localhost:3000/posts/${postData.id}`,
          identifier: postData.id,
          title: postData.title,
        }}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
