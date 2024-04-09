import { useState } from "react";
export default function PostForm() {
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const{target:{name,value},e;}
  };

  return (
    <form action="/post" method="POST" className="form">
      <div className="form__block">
        <label htmlFor="title">제목</label>
        <input type="text" name="title" id="title" required />
      </div>
      <div className="form__block">
        <label htmlFor="summary">요약</label>
        <input type="text" name="summary" id="summary" required />
      </div>
      <div className="form__block">
        <label htmlFor="content">내용</label>
        <textarea name="content" id="content" required />
      </div>
      <div className="form__block">
        <input type="submit" value="제출" className="form__btn--submit" />
      </div>
    </form>
  );
}
