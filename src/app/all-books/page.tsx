import { DynamicBanner } from '@/components/shared/DynamicBanner'
import { PaginationDemo } from '@/components/shared/PaginationDemo'
import SearchInput from '@/components/shared/SearchInput'
import ShowAllBooks from '@/features/all-books/ShowAllBooks'
import React from 'react'

function AllBooks() {
  return (
    <div>
        <DynamicBanner heading="বই সমূহ"/>
        <SearchInput/>
        <ShowAllBooks/>
        <PaginationDemo/>
    </div>
  )
}

export default AllBooks