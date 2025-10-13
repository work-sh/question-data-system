"use client"

import { Button } from "@workspace/ui/components/button"
import { ButtonGroup } from "@workspace/ui/components/button-group"
import { Label } from "@workspace/ui/components/label"
import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { Separator } from "@workspace/ui/components/separator"
import { Switch } from "@workspace/ui/components/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { Share, Plus, X, Eye, GripVertical } from "lucide-react"
import { useState } from "react"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupText } from "@workspace/ui/components/input-group"

interface QuestionEditSidebarProps {
  className?: string
}

interface Option {
  id: number
  text: string
  charCount: number
}

const MAX_CHAR_COUNT = 43

export function QuestionEditSidebar({ className }: QuestionEditSidebarProps) {
  const [layout, setLayout] = useState("vertical")
  const [showCheckbox, setShowCheckbox] = useState(true)
  const [allowMultiple, setAllowMultiple] = useState(false)
  const [options, setOptions] = useState<Option[]>([
    { id: 1, text: "", charCount: 0 },
  ])
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [difficulty, setDifficulty] = useState("")
  const [grade, setGrade] = useState("")
  const [textbook, setTextbook] = useState("")

  const addOption = () => {
    const newId = Math.max(...options.map(o => o.id)) + 1
    setOptions([...options, { id: newId, text: "", charCount: 0 }])
  }

  const removeOption = (id: number) => {
    setOptions(options.filter(option => option.id !== id))
  }

  const updateOption = (id: number, text: string) => {
    setOptions(options.map(option => 
      option.id === id ? { ...option, text, charCount: text.length } : option
    ))
  }

  const moveOption = (dragIndex: number, hoverIndex: number) => {
    const draggedOption = options[dragIndex]
    if (!draggedOption) return
    
    const newOptions = [...options]
    newOptions.splice(dragIndex, 1)
    newOptions.splice(hoverIndex, 0, draggedOption)
    setOptions(newOptions)
  }

  const handleRadioChange = (value: string) => {
    setSelectedOption(value)
  }

  const handleCheckboxChange = (optionId: string, checked: boolean) => {
    if (checked) {
      setSelectedOptions([...selectedOptions, optionId])
    } else {
      setSelectedOptions(selectedOptions.filter(id => id !== optionId))
    }
  }

  return (
    <div className={`w-[290px] bg-white border-l border-gray-200 flex flex-col ${className}`}>
      {/* Action Buttons */}
      <div className="p-5 border-b border-gray-200">
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">
            <Eye className="w-4 h-4 mr-2" />
            미리보기
          </Button>
          <Button variant="outline" className="flex-1">
            <Share className="w-4 h-4 mr-2" />
            공유
          </Button>
        </div>
      </div>

      {/* Tab Menu */}
      <div className="border-b border-gray-200 overflow-y-auto">
        <Tabs defaultValue="edit" className="w-full p-2">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="edit">편집</TabsTrigger>
            <TabsTrigger value="theme">테마</TabsTrigger>
            <TabsTrigger value="template">템플릿</TabsTrigger>
          </TabsList>
          
          {/* Content */}
          <div className="flex-1 p-5">
            <TabsContent value="edit" className="space-y-6">
              {/* Layout */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">레이아웃</h3>
                <RadioGroup value={layout} onValueChange={setLayout}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="vertical" id="layout-vertical" />
                    <Label htmlFor="layout-vertical" className="text-sm">위아래로</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="horizontal" id="layout-horizontal" />
                    <Label htmlFor="layout-horizontal" className="text-sm">좌우로</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              {/* Option Labels */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">선택지 레이블</h3>
                <ButtonGroup>
                  {["1", "A", "ㄱ", "가 없음"].map((label) => (
                    <Button key={label} variant="outline">
                      {label}
                    </Button>
                  ))}
                </ButtonGroup>
              </div>

              <Separator />

              {/* Display Checkbox */}
              <div className="flex items-center justify-between">
                <Label htmlFor="show-checkbox" className="text-sm font-medium text-gray-900">체크박스 표시</Label>
                <Switch
                  id="show-checkbox"
                  checked={showCheckbox}
                  onCheckedChange={setShowCheckbox}
                />
              </div>

              <Separator />

              {/* Options */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-gray-900">선택지</h3>
                </div>
                {allowMultiple ? (
                  <div>
                    {options.map((option, index) => (
                      <div 
                          key={option.id}
                          className="relative group hover:bg-gray-50 rounded-md p-2"
                          draggable
                          onDragStart={(e) => {
                            e.dataTransfer.setData('text/plain', index.toString())
                          }}
                          onDragOver={(e) => {
                            e.preventDefault()
                          }}
                          onDrop={(e) => {
                            e.preventDefault()
                            const dragIndex = parseInt(e.dataTransfer.getData('text/plain'))
                            if (dragIndex !== index) {
                              moveOption(dragIndex, index)
                            }
                          }}
                        >
                          <div className="absolute top-1/2 -translate-y-1/2 -left-4 cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100 transition-opacity">
                            <GripVertical className="w-4 h-4 text-gray-400" />
                          </div>
                          <div className="flex w-full max-w-sm items-center gap-2">
                            <Checkbox
                            id={`checkbox-${option.id}`}
                            checked={selectedOptions.includes(option.id.toString())}
                            onCheckedChange={(checked) => handleCheckboxChange(option.id.toString(), checked as boolean)}
                          />
                          <InputGroup>
                            <InputGroupInput 
                              placeholder="선택지 입력" 
                              value={option.text} 
                              onChange={(e) => updateOption(option.id, e.target.value)}  
                            />
                            <InputGroupAddon align="inline-end">
                              <InputGroupText>{option.charCount}/{MAX_CHAR_COUNT}</InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          <Button variant="outline" size="icon-sm" onClick={() => removeOption(option.id)}>
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <RadioGroup value={selectedOption} onValueChange={handleRadioChange}>
                    <div>
                      {options.map((option, index) => (
                        <div 
                          key={option.id}
                          className="relative group hover:bg-gray-50 rounded-md p-2"
                          draggable
                          onDragStart={(e) => {
                            e.dataTransfer.setData('text/plain', index.toString())
                          }}
                          onDragOver={(e) => {
                            e.preventDefault()
                          }}
                          onDrop={(e) => {
                            e.preventDefault()
                            const dragIndex = parseInt(e.dataTransfer.getData('text/plain'))
                            if (dragIndex !== index) {
                              moveOption(dragIndex, index)
                            }
                          }}
                        >
                          <div className="absolute top-1/2 -translate-y-1/2 -left-4 cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100 transition-opacity">
                            <GripVertical className="w-4 h-4 text-gray-400" />
                          </div>
                          <div className="flex w-full max-w-sm items-center gap-2">
                            <RadioGroupItem value={option.id.toString()} id={`radio-${option.id}`} />
                            <InputGroup>
                              <InputGroupInput 
                                placeholder="선택지 입력" 
                                value={option.text} 
                                onChange={(e) => updateOption(option.id, e.target.value)}  
                              />
                              <InputGroupAddon align="inline-end">
                                <InputGroupText>{option.charCount}/{MAX_CHAR_COUNT}</InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                            <Button variant="outline" size="icon-sm" onClick={() => removeOption(option.id)}>
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                )}
                <Button
                  variant="default"
                  onClick={addOption}
                  className="w-full mt-3"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  옵션 추가
                </Button>
              </div>

              <Separator />

              {/* Allow Multiple Selection */}
              <div className="flex items-center justify-between">
                <Label htmlFor="allow-multiple" className="text-sm font-medium text-gray-900">다중 선택을 허용할까요?</Label>
                <Switch
                  id="allow-multiple"
                  checked={allowMultiple}
                  onCheckedChange={setAllowMultiple}
                />
              </div>

              <Separator />

              {/* Metadata */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-gray-900">메타데이터</h3>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <Label htmlFor="difficulty" className="text-xs text-gray-600">난이도</Label>
                  <Select value={difficulty} onValueChange={setDifficulty}>
                    <SelectTrigger className="h-8">
                      <SelectValue placeholder="---" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">하</SelectItem>
                      <SelectItem value="medium">중</SelectItem>
                      <SelectItem value="hard">상</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <Label htmlFor="grade" className="text-xs text-gray-600">학년</Label>
                  <Select value={grade} onValueChange={setGrade}>
                    <SelectTrigger className="h-8">
                      <SelectValue placeholder="초등 1" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grade-1">초등1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <Label htmlFor="textbook" className="text-xs text-gray-600">교과서</Label>
                  <Select value={textbook} onValueChange={setTextbook}>
                    <SelectTrigger className="h-8">
                      <SelectValue placeholder="달달수학" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daldalmath">달달수학</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="theme" className="text-center text-gray-500 py-8">
              테마 설정 기능이 곧 추가됩니다.
            </TabsContent>

            <TabsContent value="template" className="text-center text-gray-500 py-8">
              템플릿 기능이 곧 추가됩니다.
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}