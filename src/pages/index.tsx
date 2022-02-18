import { usePageQuery } from "../generated/graphql";

export default function Home() {
  const [{ data }] = usePageQuery({
    variables: {
      slug: "home"
    }
  });
  
  return (
    <>
      <h1>{data?.page.title}</h1>
      <p>{data?.page.subtitle}</p>
      <small>{data?.page.seo.title}</small>
    </>
  )
}
