import { useQuestionStore } from "@/stores/question-store";
import { useCallback } from "react";

/**
 * 문항 관련 액션들을 관리하는 훅
 */
export function useQuestionActions() {
  const { questionData } = useQuestionStore();

  const handlePreview = useCallback(() => {
    if (!questionData) {
      console.warn("미리보기할 문항 데이터가 없습니다.");
      return;
    }

    // TODO: 문항 미리보기 기능 구현
    console.log("문항 미리보기:", questionData);
  }, [questionData]);

  const handleShare = useCallback(() => {
    if (!questionData) {
      console.warn("공유할 문항 데이터가 없습니다.");
      return;
    }

    if (!questionData.id) {
      console.warn(
        "저장되지 않은 문항은 공유할 수 없습니다. 먼저 저장해주세요."
      );
      return;
    }

    // TODO: 문항 공유 기능 구현 (ID 기반)
    console.log("문항 공유:", questionData.id);
  }, [questionData]);

  return {
    handlePreview,
    handleShare,
  };
}
