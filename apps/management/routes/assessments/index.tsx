import { createFileRoute } from '@tanstack/react-router'
import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { FileText, Plus, Trash2, Edit } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { PageHeader } from "@/components/PageHeader"
import { PageContainer } from "@/components/PageContainer"
import { SearchFilter } from "@/components/SearchFilter"
import { DataTable, SortableHeader, ActionsDropdown } from "@/components/DataTable"

export const Route = createFileRoute('/assessments/')({
  component: AssessmentSetsPage,
})

export type AssessmentSet = {
  id: string
  title: string
  description: string
  status: '활성' | '비활성'
  type: string
  subject: string
  created: string
}

function AssessmentSetsPage() {
  const assessmentSets: AssessmentSet[] = [
    {
      id: 'as001',
      title: '중간고사 평가세트',
      description: '2024년 1학기 중간고사',
      status: '활성',
      type: '정기평가',
      subject: '수학',
      created: '2024-01-15'
    },
    {
      id: 'as002',
      title: '기말고사 평가세트',
      description: '2024년 1학기 기말고사',
      status: '활성',
      type: '정기평가',
      subject: '과학',
      created: '2024-01-20'
    },
    {
      id: 'as003',
      title: '단원평가 세트',
      description: '1단원 평가',
      status: '비활성',
      type: '퀴즈',
      subject: '국어',
      created: '2024-01-10'
    }
  ]

  const columns: ColumnDef<AssessmentSet>[] = [
    {
      accessorKey: "title",
      header: ({ column }) => (
        <SortableHeader column={column}>제목</SortableHeader>
      ),
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("title")}</div>
      ),
    },
    {
      accessorKey: "description",
      header: "설명",
      cell: ({ row }) => (
        <div className="text-muted-foreground">{row.getValue("description")}</div>
      ),
    },
    {
      accessorKey: "type",
      header: "유형",
      cell: ({ row }) => (
        <div>{row.getValue("type")}</div>
      ),
    },
    {
      accessorKey: "subject",
      header: "과목",
      cell: ({ row }) => (
        <div>{row.getValue("subject")}</div>
      ),
    },
    {
      accessorKey: "status",
      header: "상태",
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        const statusClass = status === '활성' 
          ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' 
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        return (
          <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${statusClass}`}>
            {status}
          </span>
        )
      },
    },
    {
      accessorKey: "created",
      header: "생성일",
      cell: ({ row }) => (
        <div>{row.getValue("created")}</div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const assessmentSet = row.original

        return (
          <ActionsDropdown
            actions={[
              {
                label: "편집",
                onClick: () => console.log("편집:", assessmentSet.id)
              },
              {
                label: "복사",
                onClick: () => console.log("복사:", assessmentSet.id)
              },
              {
                label: "삭제",
                onClick: () => console.log("삭제:", assessmentSet.id),
                separator: true
              }
            ]}
          />
        )
      },
    },
  ]

  const filterFields = [
    {
      type: 'select' as const,
      label: '유형',
      placeholder: '유형 선택',
      options: [
        { value: 'all', label: '전체' },
        { value: 'regular', label: '정기평가' },
        { value: 'quiz', label: '퀴즈' },
        { value: 'test', label: '시험' }
      ]
    },
    {
      type: 'select' as const,
      label: '과목',
      placeholder: '과목 선택',
      options: [
        { value: 'all', label: '전체' },
        { value: 'math', label: '수학' },
        { value: 'science', label: '과학' },
        { value: 'korean', label: '국어' },
        { value: 'english', label: '영어' }
      ]
    }
  ]

  return (
    <PageContainer>
      <PageHeader
        title="평가세트 관리"
        description="평가세트를 생성하고 관리합니다"
        actions={[
          {
            label: "삭제된 평가세트",
            icon: Trash2,
            variant: "outline"
          },
          {
            label: "평가세트 생성",
            icon: Plus
          }
        ]}
      />

      <SearchFilter
        title="검색 및 필터"
        description="평가세트를 검색하고 필터링합니다"
        searchPlaceholder="평가세트 검색..."
        filterFields={filterFields}
      />

      <DataTable
        columns={columns}
        data={assessmentSets}
        searchKey="title"
        searchPlaceholder="평가세트 제목 검색..."
        showColumnToggle={true}
        showPagination={true}
        pageSize={10}
      />
    </PageContainer>
  )
}