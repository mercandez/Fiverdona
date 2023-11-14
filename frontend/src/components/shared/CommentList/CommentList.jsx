import PropTypes from "prop-types";

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.text}</p>
          {comment.fileName && (
            <img
              src={`http://localhost:8080/${comment.fileName}`}
              alt="Archivo adjunto al comentario"
            />
          )}
        </li>
      ))}
    </ul>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      fileName: PropTypes.string,
    })
  ),
};

export default CommentList;
