import React from 'react'

const TableColumnTitle = ({
  id,
  className,
  style,
  title,
  onSortAsc,
  onSortDes
} : TableColumnTitle) => {
  return (
    <th
      id={id}
      className={`table-column ${className}`} style={style}
    >
      <span className='table-column-title-left'>
        {title}
      </span>
      <span className='table-column-title-right'>
        {onSortAsc && <button onClick={onSortAsc}>Asc</button>}
        {onSortDes && <button onClick={onSortDes}>Des</button>}
      </span>
    </th>
  )
}

export default TableColumnTitle