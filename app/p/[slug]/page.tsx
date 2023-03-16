import { Suspense } from 'react';
import LayoutDefault from '../../../src/components/LayoutDefault';
import PagePost from '../../../src/components/PagePost/PagePost';
import { getPostData } from '../../../src/lib/post';

export default async function Page() {
  const data = await getPostData('test');

  return (
    <LayoutDefault>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PagePost data={data} />
      </Suspense>
    </LayoutDefault>
  );
}
