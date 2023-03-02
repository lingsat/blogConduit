import Container from "../../../common/components/Container/Container";
import ArticleBunner from "../components/ArticleBunner/ArticleBunner";
import ArticleMeta from '../components/ArticleMeta/ArticleMeta';
import TagList from '../components/TagList/TagList';

const ArticlePage = () => {
  return (
    <>
      <ArticleBunner />
      <Container>
        <div className='pb-8 border-b'>
          <p className='text-xl mb-8'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            distinctio eaque ipsam aut veritatis suscipit sed, iusto autem officia
            ducimus, perferendis, aliquid repellat deserunt. Harum in nobis
            voluptas rem, accusamus ex dolorum tempore soluta explicabo quaerat
            tempora blanditiis odit aut. Nobis voluptate earum fugit nihil
            necessitatibus facilis eligendi, similique exercitationem facere iusto
            tempore voluptatem delectus possimus sed placeat doloribus ipsam nulla
            sequi eveniet maiores numquam, cumque velit, recusandae pariatur!
            Nostrum officia, numquam repellat molestias similique soluta
            necessitatibus. Cum odio recusandae minima et architecto maiores
            incidunt dolore ipsum quia aspernatur, dolores amet eius ad dolor
            illo! Voluptates, sapiente asperiores recusandae cum similique
            repudiandae illum accusamus libero, quae optio harum vitae doloribus
            quod tenetur ullam tempore numquam voluptatem qui fuga rerum facere
            omnis perspiciatis quis in? Quod exercitationem nisi itaque labore
            alias. Quis expedita quo, inventore voluptatem, excepturi beatae eaque
            animi quidem nobis sequi modi eligendi neque dolores commodi sapiente
            facilis corporis nemo quasi unde molestias id ratione illo deserunt
            at! Doloribus impedit in perspiciatis quasi officiis recusandae nobis,
            deleniti dolores asperiores. Corporis eaque, magnam quos, iusto
            facilis commodi quaerat amet nam quod, impedit quia culpa voluptates
            totam praesentium quam modi tempore molestiae illo. Quibusdam
            molestias laboriosam dignissimos dolore saepe deleniti commodi?
          </p>
          <TagList tagList={['one', 'two', 'three']} />
        </div>
        <div className='flex justify-center my-6'>
          <ArticleMeta authorNameStyle='GREEN' />
        </div>
      </Container>
    </>
  );
};

export default ArticlePage;
