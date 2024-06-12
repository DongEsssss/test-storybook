
import React from 'react'
import { HorizontalTable } from './HorizontalTable'
import { VerticalTable } from './VerticalTable'
import type { TableType } from './types'

export const StaticTable = ({
  data,
  horizontal,
  handleEdit,
}: {
  data: TableType
  horizontal?: boolean
  handleEdit?: (inputURL: string) => void
}) =>
  horizontal ? (
    <HorizontalTable data={data} />
  ) : (
    <VerticalTable data={data} handleEdit={handleEdit} />
  )
