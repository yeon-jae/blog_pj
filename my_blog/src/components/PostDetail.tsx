import { useState } from "react";
import { Link, useParams } from "react-router-dom";
export default function PostDetail() {
  const [post, setPost] = useState < PostP;
  const params = useParams();
  console.log(params);
  return (
    <div className="post__detail">
      <div className="post__box">
        <div className="post__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="post__profile-box">
          <div className="post__profile"></div>
          <div className="post__author-name">글쓴이</div>
          <div className="post__date">2024.03.22</div>
        </div>
        <div className="post__utils-box">
          <div className="post__edit">
            <Link to={`/posts/edit/1`}>수정</Link>
          </div>
          <div className="post__delete">삭제</div>
        </div>
        <div className="post__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          earum culpa excepturi quas? Officiis inventore optio unde rerum natus
          possimus, ipsam dolorem nemo ut et omnis dicta! Est repellat eligendi
          placeat consequuntur possimus. Perferendis quis quo, expedita illo
          deleniti ipsum quae et error laboriosam, placeat enim voluptas
          architecto ipsam. Commodi.
        </div>
      </div>
    </div>
  );
}
