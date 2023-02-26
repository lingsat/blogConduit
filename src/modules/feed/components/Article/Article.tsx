import { FC } from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import TagList from '../TagList/TagList';

interface ArticleProps {}

const Article: FC<ArticleProps> = () => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex items-center">
          <Link to="@lingsat">
            <img
              src="https://api.realworld.io/images/demo-avatar.png"
              alt="Useravatar"
              className="inline-block h-8 w-8 rounded-full"
            />
          </Link>
          <div className="mr-6 ml-1 leading-4 inline-flex flex-col">
            <Link to="@lingsat" className="font-medium">
              Serhii Petrenko
            </Link>
            <span className="text-dategra text-sm">26 february, 2023</span>
          </div>
          <FavoriteButton />
        </div>
        <Link to="/article/qwerty" className="hover:no-underline">
          <h2 className="mb-1 font-semibold text-2xl text-mainblack">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            itaque, soluta optio magnam maxime animi ipsam voluptas assumenda a
            vero nihil ipsum natus eum ea recusandae totam, molestias cupiditate
            sapiente pariatur aut, illum iste libero amet dolores. Ea quos
            itaque rerum eligendi repudiandae iure voluptas dicta quia ab fugit
            at qui corrupti tempora nisi tenetur tempore, reiciendis porro
            cupiditate magni quisquam illum quidem nesciunt! Eos commodi,
            assumenda quidem, quas, modi temporibus tempora id maiores aperiam
            adipisci dolor earum? Quia itaque consectetur est at neque
            voluptatem eos modi, enim aperiam consequatur ipsum nemo hic. Nobis,
            natus ipsam perferendis mollitia rerum officia neque repudiandae
            quis inventore possimus facere molestiae excepturi fugit cumque
            quibusdam accusantium delectus beatae odit, sed veniam ipsum
            voluptate odio? Odit eaque animi, quod eveniet nemo doloribus vero
            est quam sed adipisci unde repudiandae eligendi voluptatibus sequi
            illo non delectus, blanditiis iste earum ut suscipit sapiente! Modi
            ab ut ad saepe hic quae mollitia similique nobis repellendus quos
            facilis commodi adipisci, amet necessitatibus possimus quam autem
            quo iusto fuga illo ipsum tenetur! Similique, voluptatem asperiores.
            Praesentium facere laudantium minima harum assumenda cumque placeat
            in quod necessitatibus obcaecati ipsum modi nemo commodi tempore
            minus voluptatibus, fuga molestiae quo alias quaerat iusto.
          </h2>
          <p className="text-darkgrey font-light mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis et
            natus explicabo beatae doloremque, accusamus nobis perspiciatis sit
            culpa eligendi?
          </p>
          <div className='flex justify-between items-center gap-2'>
            <span className='text-dategray text-sm font-light'>Read more...</span>
            <TagList />
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Article;
