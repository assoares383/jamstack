import { GetServerSideProps } from "next";
import { PageDocument, usePageQuery } from "../generated/graphql";
import { client, ssrCache } from "../lib/urql";

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

export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(PageDocument, { slug: 'home' }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData()
    }
  }
}
