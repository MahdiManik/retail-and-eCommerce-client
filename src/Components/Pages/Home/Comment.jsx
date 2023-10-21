import { useContext, useState } from "react";
import { AuthContext } from "../../Sheared/AuthProvider/AuthProvider";
import img from "../../../assets/Elegant Orange Smile Shop Logo.png";

const Comment = () => {
  const [comments, setComments] = useState([]);

  const [newComment, setNewComment] = useState("");
  const { user } = useContext(AuthContext);

  const handleComment = (e, user) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const commentsValue = form.commentsValue.value;
    console.log(name, email, commentsValue);

    if (newComment.trim() === "") return;

    const comment = {
      name: name,
      photo: user.photoUrl,
      text: newComment,
      timestamp: new Date().getTime(),
    };

    setComments([...comments, comment]);
    setNewComment("");
  };
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-4 justify-center items-center gap-4">
        <form
          onSubmit={(e) => handleComment(e, user)}
          className="mt-16 border-2 flex flex-col justify-center items-start m-3 p-4"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <label className="">
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your email</span>
            </label>
            <label className="">
              <input
                type="text"
                name="email"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </label>
          </div>
          <label className="label">
            <span className="label-text">Your comments</span>
          </label>

          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            name="commentsValue"
            id="message"
            type="message"
            rows="4"
            className="block p-2.5 w-full text-sm  input-bordered border-2 "
            placeholder="Write your thoughts here..."
          ></textarea>
          <input
            className="mt-6 border-2 px-6 py-2"
            type="submit"
            value="Post your comment"
          />
        </form>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="pl-4">
        {comments.map((comment) => (
          <div
            key={comment.timestamp}
            className="flex justify-start  items-center gap-2"
          >
            <div>
              <img src={comment.photo} alt={comment.photo} />
            </div>
            <div className="bg-gray-200 pl-4 pr-96 pb-8 mb-2 rounded-r-3xl rounded-l-3xl">
              <p className="text-lg font-bold ">{comment.name}</p>
              <p className="pl-2 text-lg">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comment;
