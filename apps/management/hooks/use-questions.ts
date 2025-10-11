import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

export interface Question {
  id: string
  title: string
  content: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  createdAt: string
  updatedAt: string
}

export interface CreateQuestionData {
  title: string
  content: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
}

// Questions 조회
export const useQuestions = () => {
  return useQuery<Question[]>({
    queryKey: ['questions'],
    queryFn: async () => {
      // TODO: 실제 API 호출로 대체
      await new Promise(resolve => setTimeout(resolve, 1000))
      return [
        {
          id: '1',
          title: 'React Hook 사용법',
          content: 'useState와 useEffect의 차이점은 무엇인가요?',
          category: 'React',
          difficulty: 'easy',
          createdAt: '2024-01-01T00:00:00Z',
          updatedAt: '2024-01-01T00:00:00Z',
        },
        {
          id: '2',
          title: 'TypeScript 타입 정의',
          content: 'interface와 type의 차이점을 설명해주세요.',
          category: 'TypeScript',
          difficulty: 'medium',
          createdAt: '2024-01-02T00:00:00Z',
          updatedAt: '2024-01-02T00:00:00Z',
        },
      ]
    },
  })
}

// 단일 Question 조회
export const useQuestion = (id: string) => {
  return useQuery<Question>({
    queryKey: ['questions', id],
    queryFn: async () => {
      // TODO: 실제 API 호출로 대체
      await new Promise(resolve => setTimeout(resolve, 500))
      return {
        id,
        title: 'React Hook 사용법',
        content: 'useState와 useEffect의 차이점은 무엇인가요?',
        category: 'React',
        difficulty: 'easy',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z',
      }
    },
    enabled: !!id,
  })
}

// Question 생성
export const useCreateQuestion = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateQuestionData) => {
      // TODO: 실제 API 호출로 대체
      await new Promise(resolve => setTimeout(resolve, 1000))
      return {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    },
    onSuccess: () => {
      // Questions 목록 새로고침
      queryClient.invalidateQueries({ queryKey: ['questions'] })
    },
  })
}

// Question 수정
export const useUpdateQuestion = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<CreateQuestionData> }) => {
      // TODO: 실제 API 호출로 대체
      await new Promise(resolve => setTimeout(resolve, 1000))
      return { id, ...data, updatedAt: new Date().toISOString() }
    },
    onSuccess: (_, { id }) => {
      // 관련 쿼리들 새로고침
      queryClient.invalidateQueries({ queryKey: ['questions'] })
      queryClient.invalidateQueries({ queryKey: ['questions', id] })
    },
  })
}

// Question 삭제
export const useDeleteQuestion = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string) => {
      // TODO: 실제 API 호출로 대체
      await new Promise(resolve => setTimeout(resolve, 500))
      return id
    },
    onSuccess: () => {
      // Questions 목록 새로고침
      queryClient.invalidateQueries({ queryKey: ['questions'] })
    },
  })
}
