import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../components/layouts/layout'

const Search: NextPage = () => {
  const router = useRouter()
  return (
    <Layout searchBar={false} hCard={true} fCard={true} stickyPosition={450}>

    </Layout>
  )
}

export default Search
