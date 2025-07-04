import Button from "./components/Button";

export default function RootPage(){
  return (
    <>
      <h1>Welcome To My Blog</h1>
      <Button href="/Posts">Blog</Button>
      <Button href="/About">About</Button>
    </>
  )
}