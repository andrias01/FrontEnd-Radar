import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type ColumnDef<TData> = {
  header: string
  accessorKey?: keyof TData
  cell?: (row: TData) => React.ReactNode
}

interface DataTableProps<TData> {
  data: TData[]
  columns: ColumnDef<TData>[]
  pageSize?: number
}

export const DataTable = <TData,>({ data, columns, pageSize = 6 }: DataTableProps<TData>) => {
  const [pageIndex, setPageIndex] = useState(0)
  const pageCount = useMemo(() => Math.max(1, Math.ceil(data.length / pageSize)), [data.length, pageSize])

  const currentPageData = useMemo(() => {
    const start = pageIndex * pageSize
    return data.slice(start, start + pageSize)
  }, [data, pageIndex, pageSize])

  const canPreviousPage = pageIndex > 0
  const canNextPage = pageIndex < pageCount - 1

  return (
    <div className="rounded-3xl border border-white/60 bg-white p-4 shadow dark:border-slate-800/60 dark:bg-slate-900/70">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.header}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {currentPageData.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/60">
                {columns.map((column) => {
                  const value = column.accessorKey ? (row[column.accessorKey] as React.ReactNode) : undefined
                  return (
                    <td key={column.header} className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-200">
                      {column.cell ? column.cell(row) : value}
                    </td>
                  )
                })}
              </tr>
            ))}
            {currentPageData.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-6 text-center text-xs text-slate-500 dark:text-slate-300"
                >
                  No hay registros para mostrar.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-300">
        <div>
          Página {pageIndex + 1} de {pageCount}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => canPreviousPage && setPageIndex((index) => Math.max(0, index - 1))}
            disabled={!canPreviousPage}
            className="flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)] disabled:cursor-not-allowed disabled:border-slate-100 disabled:text-slate-300 dark:border-slate-700 dark:text-slate-300 dark:hover:border-[color:var(--color-accent)] dark:hover:text-[color:var(--color-accent)] dark:disabled:border-slate-800 dark:disabled:text-slate-600"
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </button>
          <button
            type="button"
            onClick={() => canNextPage && setPageIndex((index) => Math.min(pageCount - 1, index + 1))}
            disabled={!canNextPage}
            className="flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)] disabled:cursor-not-allowed disabled:border-slate-100 disabled:text-slate-300 dark:border-slate-700 dark:text-slate-300 dark:hover:border-[color:var(--color-accent)] dark:hover:text-[color:var(--color-accent)] dark:disabled:border-slate-800 dark:disabled:text-slate-600"
          >
            Siguiente
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
