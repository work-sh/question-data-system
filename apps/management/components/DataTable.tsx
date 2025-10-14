"use client";

import { ColumnDef, RowData } from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import * as React from "react";

import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Input } from "@workspace/ui/components/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { useDataTable } from "../hooks";
import { renderTableCell, renderTableHead } from "../lib";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    pinned?: "left" | "right" | false;
    align?: "left" | "center" | "right";
  }
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey?: string;
  searchPlaceholder?: string;
  showColumnToggle?: boolean;
  showPagination?: boolean;
  pageSize?: number;
  className?: string;
  onSelectionChange?: (selectedData: TData[]) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder = "검색...",
  showColumnToggle = true,
  showPagination = true,
  pageSize = 10,
  className,
  onSelectionChange,
}: DataTableProps<TData, TValue>) {
  const { table, searchKey: hookSearchKey } = useDataTable({
    columns,
    data,
    searchKey,
    pageSize,
    onSelectionChange,
  });

  return (
    <div className={`w-full ${className || ""}`}>
      {/* 검색 및 컬럼 토글 */}
      <div className="flex items-center py-4">
        {hookSearchKey && (
          <Input
            placeholder={searchPlaceholder}
            value={
              (table.getColumn(hookSearchKey)?.getFilterValue() as string) ?? ""
            }
            onChange={event =>
              table.getColumn(hookSearchKey)?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        )}
        {showColumnToggle && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                컬럼 선택 <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter(column => column.getCanHide())
                .map(column => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={value =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {/* 테이블 */}
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header =>
                  renderTableHead(header, headerGroup)
                )}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row
                    .getVisibleCells()
                    .map(cell => renderTableCell(cell, row))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  결과가 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* 페이지네이션 */}
      {showPagination && (
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length}개 선택됨 (총{" "}
            {table.getFilteredRowModel().rows.length}개)
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              이전
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              다음
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// 정렬 가능한 헤더 버튼 컴포넌트
export function SortableHeader({
  column,
  children,
}: {
  column: any;
  children: React.ReactNode;
}) {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      className="h-auto p-0 font-medium hover:bg-transparent"
    >
      {children}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
}

// 액션 드롭다운 컴포넌트
export function ActionsDropdown({
  actions,
}: {
  actions: Array<{ label: string; onClick: () => void; separator?: boolean }>;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">메뉴 열기</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {actions.map((action, index) => (
          <React.Fragment key={index}>
            {action.separator && <DropdownMenuSeparator />}
            <DropdownMenuItem onClick={action.onClick}>
              {action.label}
            </DropdownMenuItem>
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
