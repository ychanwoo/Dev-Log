import Button from "../components/Button";

export default function PostsPage(){
  return(
    <div>
      <Button href='/Posts/List'>블로그 목록</Button>
      <Button href='/Posts/New'>새 블로그 작성</Button>
    </div>
  )
}