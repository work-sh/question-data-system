import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface QuestionData {
  id?: string;
  title: string;
  content: string;
  category: string;
  difficulty: string;
  options?: string[];
  answer: string;
  explanation: string;
  isDirty?: boolean;
}

interface QuestionStore {
  questionData: QuestionData | null;
  setQuestionData: (data: QuestionData | null) => void;
}

export const useQuestionStore = create<QuestionStore>()(
  devtools(
    (set, get) => ({
      questionData: null,
      hasUnsavedChanges: false,

      setQuestionData: data =>
        set({ questionData: data }, false, "setQuestionData"),
    }),
    {
      name: "question-store",
    }
  )
);
