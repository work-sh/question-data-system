import {
  ColumnDef,
  ColumnFiltersState,
  ColumnPinningState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";

interface UseDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey?: string;
  pageSize?: number;
  onSelectionChange?: (selectedData: TData[]) => void;
}

export function useDataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  pageSize = 10,
  onSelectionChange,
}: UseDataTableProps<TData, TValue>) {
  // 컬럼 정의에서 자동으로 초기 고정 상태 추출
  const initialPinning = useMemo(() => {
    const left: string[] = [];
    const right: string[] = [];

    columns.forEach(col => {
      if (col.meta?.pinned === "left" && col.id) {
        left.push(col.id);
      } else if (col.meta?.pinned === "right" && col.id) {
        right.push(col.id);
      }
    });

    return { left, right };
  }, [columns]);

  const [columnPinning, setColumnPinning] =
    useState<ColumnPinningState>(initialPinning);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onColumnPinningChange: setColumnPinning,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      columnPinning,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
  });

  // 선택이 변경될 때마다 부모에게 알림
  useEffect(() => {
    const selectedRows = table
      .getFilteredSelectedRowModel()
      .rows.map(row => row.original);
    onSelectionChange?.(selectedRows);
  }, [rowSelection, table, onSelectionChange]);

  return {
    table,
    searchKey,
  };
}
