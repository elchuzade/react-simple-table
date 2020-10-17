import * as React from 'react'
import TableColumnTitle from './TableColumnTitle'
import './styles.module.css'

export const DeveloperCirclesTable = ({
  id,
  style,
  className,
  title,
  columns,
  rows,
  search,
  striped
}: TableProps) => {
  // const [tableRows, setTableRows] = React.useState(rows)

  const tableRows = rows

  return (
    <div id={id} className={`table ${className || ''}`} style={style}>
      <div className='table-header'>
        <div className='table-haeder-left'>
          {title}
        </div>
        <div className='table-header-right'>
          {search && (
            <input
              id={search.id}
              className={`table-header-input ${search.className || ''}`}
              style={search.style}
              type={search.type || 'text'}
              placeholder={search.placeholder || 'search'}
              name={search.name}
              value={search.value}
              onChange={search.onChange}
            />
          )}
        </div>
      </div>
      <div className='table-body'>
        <table>
          <thead>
            <tr>
              {columns.map(col => (
                <TableColumnTitle
                  id={col.id}
                  key={col.columnKey}
                  style={col.style}
                  className={col.className}
                  title={col.title}
                  onSortAsc={col.onSortAsc}
                  onSortDes={col.onSortDes}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => (
              <tr key={index} className={`table-row ${striped && 'striped'}`}>
                {columns.map((col, i) => (
                  <td key={i} className='table-row-item'>
                    {typeof col.value(row) === 'string' ? col.value(row) : `Unsupported format, please check "value" field of ${col.columnKey} column`}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
