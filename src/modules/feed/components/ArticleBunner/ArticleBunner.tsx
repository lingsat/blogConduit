import Container from "../../../../common/components/Container/Container";
import ArticleMeta from '../ArticleMeta/ArticleMeta';

const ArticleBunner = () => {
  return (
    <div className="bg-articleBannerBg py-8 mb-8">
      <Container>
        <h2 className="text-white text-4xl font-semibold mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          incidunt accusamus praesentium. Accusantium sed reprehenderit,
          sapiente placeat corrupti iure molestiae quibusdam quidem doloribus
          enim ratione, magnam, vero eligendi. Enim, quas expedita at, soluta
          hic delectus nobis eos excepturi eligendi architecto dolorum, ullam
          facere voluptates. Nulla fugiat ullam consequatur illo laboriosam?
        </h2>
        <ArticleMeta />
      </Container>
    </div>
  );
};

export default ArticleBunner;
