import { DynamicBanner } from '@/components/shared/DynamicBanner'
import BookInfo from '@/features/BookDetails/BookInfo'
import React from 'react'

function Details() {
  return (
    <>
        <DynamicBanner heading="বইয়ের বিবরণ"/>
        <BookInfo/>
    </>
  )
}

export default Details