import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello 👋, My name is Craig Wheeler and I am a Software Engineer from
          Tampa, FL. In my off time I enjoy spending time with my family while
          boating, fishing and going to the beach. 🏖️
        </p>
        <p>
          Read this <Link href="/posts/first-post">blog post!</Link>
        </p>
      </section>
    </Layout>
  );
}
