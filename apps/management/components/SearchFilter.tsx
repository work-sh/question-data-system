import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Filter, Search } from "lucide-react";
import { ReactNode } from "react";

interface FilterField {
  type: "input" | "select";
  label: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  className?: string;
}

interface SearchFilterProps {
  title?: string;
  description?: string;
  searchPlaceholder?: string;
  filterFields?: FilterField[];
  onSearch?: () => void;
  onFilter?: () => void;
  children?: ReactNode;
}

export function SearchFilter({
  title = "검색 및 필터",
  description = "원하는 조건으로 데이터를 검색합니다",
  searchPlaceholder = "검색어를 입력하세요",
  filterFields = [],
  onSearch,
  onFilter,
  children,
}: SearchFilterProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* 검색 입력 */}
          <div className="space-y-2">
            <Label htmlFor="search">검색어</Label>
            <Input
              id="search"
              placeholder={searchPlaceholder}
              className="w-full"
            />
          </div>

          {/* 동적 필터 필드들 */}
          {filterFields.map((field, index) => (
            <div key={index} className={`space-y-2 ${field.className || ""}`}>
              <Label htmlFor={`filter-${index}`}>{field.label}</Label>
              {field.type === "input" ? (
                <Input
                  id={`filter-${index}`}
                  placeholder={field.placeholder}
                  className="w-full"
                />
              ) : (
                <Select>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={field.placeholder || `선택하세요`}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options?.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          ))}
        </div>

        {/* 액션 버튼들 */}
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={onFilter}>
            <Filter className="mr-2 h-4 w-4" />
            필터 적용
          </Button>
          <Button onClick={onSearch}>
            <Search className="mr-2 h-4 w-4" />
            검색
          </Button>
        </div>

        {/* 추가 컨텐츠 */}
        {children}
      </CardContent>
    </Card>
  );
}
