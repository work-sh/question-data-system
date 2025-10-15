import { useLocation } from "@tanstack/react-router";
import { useState } from "react";

/**
 * 문항 라이브러리 페이지의 레이아웃 상태를 관리하는 훅
 */
export function useQuestionLayout() {
  const location = useLocation();
  const [isQuestionSidebarCollapsed, setIsQuestionSidebarCollapsed] =
    useState(false);

  // 문항 라이브러리(/items/) 페이지인지 확인
  const isItemsPage = location.pathname.startsWith("/items/");

  const toggleQuestionSidebar = () => {
    setIsQuestionSidebarCollapsed(!isQuestionSidebarCollapsed);
  };

  const openQuestionSidebar = () => {
    setIsQuestionSidebarCollapsed(false);
  };

  const closeQuestionSidebar = () => {
    setIsQuestionSidebarCollapsed(true);
  };

  return {
    isItemsPage,
    isQuestionSidebarCollapsed,
    toggleQuestionSidebar,
    openQuestionSidebar,
    closeQuestionSidebar,
  };
}
