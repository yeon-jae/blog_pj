import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="post__navigation">
        <div className="post__navigation--active">전체 글</div>
        <div>나의 글</div>
      </div>
      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              {/**프로필 만들기 */}
              <div className="post__profile-box">
                <div className="post__profile"></div>
                <div className="post__author-name">글쓴이</div>
                <div className="post__date">2024.03.22</div>
              </div>
              <div className="post__title"> 게시글{index}</div>
              <div className="post__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus earum culpa excepturi quas? Officiis inventore optio
                unde rerum natus possimus, ipsam dolorem nemo ut et omnis dicta!
                Est repellat eligendi placeat consequuntur possimus. Perferendis
                quis quo, expedita illo deleniti ipsum quae et error laboriosam,
                placeat enim voluptas architecto ipsam. Commodi.
              </div>
              <div className="post__utils-box">
                <div className="post__edit">수정</div>
                <div className="post__delete">삭제</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
