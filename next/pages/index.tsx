import Link from 'next/link'

import Layout from '../components/Layout'
import { foo } from 'apps-shared/foo'

foo()

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋 {foo()}</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
