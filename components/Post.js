import Link from 'next/link';
import Date from './Date';
import User from '../public/assets/svg/user.svg';
import Calendar from '../public/assets/svg/calendar.svg';

const Post = ({ id, title, srcImg, author, date, desc, tags }) => {
  return (
    <div>
      <Link href={`/posts/${id}`}>
        <a>
          <img
            className="w-full sm:h-96 h-40 block hover:shadow-lg hover:scale-101 transition-all duration-200 transform object-cover"
            src={srcImg}
            alt={title}
          />
          <h1 className="font-extrabold lg:text-2xl text-xl hover:underline py-1">
            {title}
          </h1>
        </a>
      </Link>
      <p className="text-sm text-gray-500">
        <Link href="/about">
          <a className="hover:text-red-500 text-blue-300 transition-all duration-200">
            <User className="inline-block" /> {author}
          </a>
        </Link>{' '}
        posted on <Calendar className="inline-block" />{' '}
        <Date dateString={date} />
      </p>
      <p className="text-justify text-gray-500 py-1">
        {desc.slice(0, 300) + '...'}
      </p>
      <div className="flex justify-between items-center">
        <Link href={`/posts/${id}`}>
          <a className="text-blue-300">Read more...</a>
        </Link>
        <ul className="flex space-x-2">
          {tags.map((tag) => {
            return (
              <li key={tag} className="p-1 rounded bg-black text-white">
                #{tag}
              </li>
            );
          })}
        </ul>
      </div>
      <hr className="my-2" />
    </div>
  );
};

export default Post;
