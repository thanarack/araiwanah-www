import { redirect } from 'next/navigation';
import Tag from './tag';

async function getData() {
  return {
    props: { test: 'test' },
  };
}

const Page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // const data = await getData()

  if (!params.slug) redirect('/');

  const tagId = params.slug;

  return <Tag tagId={tagId} />;
};

export default Page;
