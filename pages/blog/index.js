import Head from "next/head";

import { Page } from "../../components/layout/page/page";
import { InternalPageHeader } from "../../components/layout/page/internal-page-header";
import { InternalPageContent } from "../../components/layout/page/internal-page-content";
import { InternalPageSection } from "../../components/layout/page/internal-page-section";
import { Container } from "../../components/ui/container";
import { BlogContent } from "../../components/blog/blog-content";
import { BlogAside } from "../../components/blog/blog-aside";
import { Sponsor } from "../../components/sponsor";

export default function Blog({ data, recentPost, saleProduct }) {
  return (
    <Page>
      <Head>
        <title>Blog</title>
      </Head>
      <InternalPageHeader
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Blog Page", href: "/blog", current: true },
        ]}
      />
      <InternalPageContent>
        <Container>
          <InternalPageSection className="flex flex-wrap gap-x-14 gap-y-20 mt-32">
            <BlogContent data={data} />
            <BlogAside data={{ recentPost, saleProduct }} />
          </InternalPageSection>
          <Sponsor className="mt-20" />
        </Container>
      </InternalPageContent>
    </Page>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.BLOG_URL}/everything?${new URLSearchParams({
      apiKey: process.env.API_KEY,
      q: "apple",
      language: "en",
      pageSize: 5,
    })}`
  );
  const resRecentPost = await fetch(
    `${process.env.BLOG_URL}/everything?${new URLSearchParams({
      apiKey: process.env.API_KEY,
      q: "nvidia",
      language: "en",
      pageSize: 4,
    })}`
  );
  const resSaleProduct = await fetch(
    `${process.env.BLOG_URL}/everything?${new URLSearchParams({
      apiKey: process.env.API_KEY,
      q: "sale product",
      language: "en",
      pageSize: 3,
    })}`
  );

  const data = await res.json();
  const recentPost = await resRecentPost.json();
  const saleProduct = await resSaleProduct.json();

  return { props: { data, recentPost, saleProduct } };
}
