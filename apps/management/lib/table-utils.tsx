import { flexRender } from "@tanstack/react-table";
import { TableCell, TableHead } from "@workspace/ui/components/table";
import { cn } from "@workspace/ui/lib/utils";

// 고정 컬럼 관련 공통 로직
function getPinningInfo<T>(
  items: T[],
  getPinnedValue: (item: T) => "left" | "right" | false,
  currentItem: T
) {
  const isPinned = getPinnedValue(currentItem);
  const leftPinnedItems = items.filter(item => getPinnedValue(item) === "left");
  const rightPinnedItems = items.filter(
    item => getPinnedValue(item) === "right"
  );
  const isLastLeftPinned =
    isPinned === "left" &&
    leftPinnedItems.length > 0 &&
    currentItem === leftPinnedItems[leftPinnedItems.length - 1];
  const isFirstRightPinned =
    isPinned === "right" &&
    rightPinnedItems.length > 0 &&
    currentItem === rightPinnedItems[0];

  return { isPinned, isLastLeftPinned, isFirstRightPinned };
}

// 정렬 클래스명 생성 함수
function getAlignmentClass(align?: "left" | "center" | "right") {
  if (align === "left") return "text-left";
  if (align === "right") return "text-right";
  return "text-center";
}

// 고정 컬럼 스타일 생성 함수
function getPinningStyles(
  isPinned: "left" | "right" | false,
  getStart: (side: "left") => number,
  getAfter: (side: "right") => number,
  getSize: () => number,
  isLastLeftPinned: boolean,
  isFirstRightPinned: boolean
) {
  return {
    minWidth: getSize(),
    left: isPinned === "left" ? `${getStart("left")}px` : undefined,
    right: isPinned === "right" ? `${getAfter("right")}px` : undefined,
    boxShadow: isLastLeftPinned
      ? "-4px 0 4px -4px gray inset"
      : isFirstRightPinned
        ? "4px 0 4px -4px gray inset"
        : undefined,
    position: (isPinned ? "sticky" : "relative") as "sticky" | "relative",
    zIndex: isPinned ? 1 : 0,
  };
}

// TableHead 렌더링을 위한 헬퍼 함수
function renderTableHead(header: any, headerGroup: any) {
  const { isPinned, isLastLeftPinned, isFirstRightPinned } = getPinningInfo(
    headerGroup.headers,
    (h: any) => h.column.getIsPinned(),
    header
  );
  const align = header.column.columnDef.meta?.align;
  const style = getPinningStyles(
    isPinned,
    header.column.getStart.bind(header.column),
    header.column.getAfter.bind(header.column),
    header.column.getSize.bind(header.column),
    isLastLeftPinned,
    isFirstRightPinned
  );

  return (
    <TableHead
      key={header.id}
      className={cn("bg-white", getAlignmentClass(align))}
      style={style}
    >
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext())}
    </TableHead>
  );
}

// TableCell 렌더링을 위한 헬퍼 함수
function renderTableCell(cell: any, row: any) {
  const { isPinned, isLastLeftPinned, isFirstRightPinned } = getPinningInfo(
    row.getVisibleCells(),
    (c: any) => c.column.getIsPinned(),
    cell
  );
  const align = cell.column.columnDef.meta?.align;
  const style = getPinningStyles(
    isPinned,
    cell.column.getStart.bind(cell.column),
    cell.column.getAfter.bind(cell.column),
    cell.column.getSize.bind(cell.column),
    isLastLeftPinned,
    isFirstRightPinned
  );

  return (
    <TableCell
      key={cell.id}
      className={cn(
        getAlignmentClass(align),
        row.getIsSelected() ? "bg-muted" : "bg-white"
      )}
      style={style}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </TableCell>
  );
}

export {
  getAlignmentClass,
  getPinningInfo,
  getPinningStyles,
  renderTableCell,
  renderTableHead,
};
