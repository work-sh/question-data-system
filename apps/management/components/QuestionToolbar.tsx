import { Button } from "@workspace/ui/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { ChevronLeft, ChevronRight, Eye, Share } from "lucide-react";

interface QuestionToolbarProps {
  isQuestionSidebarCollapsed: boolean;
  onToggleQuestionSidebar: () => void;
  onPreview?: () => void;
  onShare?: () => void;
}

/**
 * 문항 라이브러리 페이지의 도구 모음 컴포넌트
 */
export function QuestionToolbar({
  isQuestionSidebarCollapsed,
  onToggleQuestionSidebar,
  onPreview,
  onShare,
}: QuestionToolbarProps) {
  return (
    <div className="flex gap-2 mr-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" className="flex-1" onClick={onPreview}>
            <Eye className="w-4 h-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>문항 미리보기</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" className="flex-1" onClick={onShare}>
            <Share className="w-4 h-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>문항 공유</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            className="flex-1"
            onClick={onToggleQuestionSidebar}
          >
            {isQuestionSidebarCollapsed ? (
              <ChevronLeft className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>문항 편집</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
