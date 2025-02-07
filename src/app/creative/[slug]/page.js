'use client'
import DetailsPage from '@/app/components/DetailsPage'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {

  const param = useParams();

  return (
    <div>
      <DetailsPage id={param.slug} />
    </div>
  )
}

export default page