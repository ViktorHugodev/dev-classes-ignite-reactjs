import { Comment } from "./CommentMessage";
import { CommentTextArea } from "./CommentTextArea";

export function CommentComponent() {
  return (
    <div>
      <strong>Comentários</strong>
      <CommentTextArea/>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
  )
}
