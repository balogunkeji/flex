import hijab from "./img/hijab.jpg";
import hijab2 from "./img/hijab2.jpg";

const Home = () => {
  return (
    <div className="container">
      <img src={hijab} alt="hijab" />
      <div className="two">
        <p className="para">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their
        </p>
        <div className='hijab'>
        <img src={hijab2} alt="hijab2" />
        <div></div>
        </div>
        <h3 className="aut">About the author</h3>
        <p className="auth">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
        </p>
      </div>
      <div className='div'></div>
      <div className="head">
        <h1 className="head--1">hiding behind <br/> screens:</h1>
        <div className="flex">
          <h1 className='head--2'>deception by social <br/>media influencers</h1>
          <div className="h4">
            <h4>the author</h4>
            <h4>the author</h4>
            <h4> the author</h4>
          </div>
          <div className="paragraph">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it
            </p>
          </div>
        </div>
        <h1 className='head--3'>article by <br/> rachel ramirez</h1>
      </div>
    </div>
  );
};

export default Home;
