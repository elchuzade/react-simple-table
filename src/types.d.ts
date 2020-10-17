interface TableProps {
  id?: string;
  style?: {};
  className?: string; 
  title?: TableTitle;
  columns: TableColumn[];
  rows: any[];
  search?: TableInput;
  striped?: boolean;
}

interface TableColumnTitle {
  id?: string;
  style?: {};
  className?: string;
  title?: string;
  onSortAsc?: OnSortButton;
  onSortDes?: OnSortButton;
}

type TableTitle = {
  id?: string;
  style?: {}
  className?: string;
  value?: string;
}

type TableColumn = {
  id?: string;
  style?: {};
  className?: string;
  title?: string;
  columnKey: string;
  onSortAsc?: OnSortButton;
  onSortDes?: OnSortButton;
  value: ColumnValue;
}

type TableInput = {
  id?: string;
  style?: {};
  className?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  value?: any;
  searchFields?: string[];
  onChange?: OnChangeInput;
}

type OnChangeInput = (e: any) => any

type OnSortButton = (e: any) => any

type ColumnValue = (row: any) => any