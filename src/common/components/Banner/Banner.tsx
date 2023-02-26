import Container from '../Container/Container';

const Banner = () => {
  return (
    <div className='bg-maingreen shadow-mainBanner text-white p-8 mb-8'>
      <Container>
        <h1 className='font-titillium drop-shadow-logo text-center text-6xl pb-2'>conduit</h1>
        <p className='text-center text-2xl font-light'>A place to share your knowledge.</p>
      </Container>
    </div>
  )
};

export default Banner;
