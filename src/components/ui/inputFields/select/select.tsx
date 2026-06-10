"use client"

import React, { useState, useRef, useEffect, createContext, useContext } from "react"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface SelectContextType {
  value: string | undefined
  onValueChange: (value: string) => void
  open: boolean
  setOpen: (open: boolean) => void
  selectedNode: React.ReactNode
  setSelectedNode: (node: React.ReactNode) => void
}

const SelectContext = createContext<SelectContextType | undefined>(undefined)

function useSelectContext() {
  const context = useContext(SelectContext)
  if (!context) {
    throw new Error("Select components must be used within a Select")
  }
  return context
}

export function Select({
  children,
  value,
  onValueChange,
  defaultValue,
}: {
  children: React.ReactNode
  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
}) {
  const [internalValue, setInternalValue] = useState<string | undefined>(value || defaultValue)
  const [selectedNode, setSelectedNode] = useState<React.ReactNode>(null)
  const [open, setOpen] = useState(false)

  // Sync internal value with external value if controlled
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value)
    }
  }, [value])

  const handleValueChange = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue) // Uncontrolled mode
    }
    if (onValueChange) {
      onValueChange(newValue)
    }
    setOpen(false)
  }

  return (
    <SelectContext.Provider
      value={{
        value: internalValue,
        onValueChange: handleValueChange,
        open,
        setOpen,
        selectedNode,
        setSelectedNode,
      }}
    >
      <div className="relative w-fit font-sans">{children}</div>
    </SelectContext.Provider>
  )
}

export const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { open, setOpen } = useSelectContext()
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const setRefs = (element: HTMLButtonElement) => {
    triggerRef.current = element
    if (typeof ref === "function") ref(element)
    else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = element
  }

  return (
    <button
      ref={setRefs}
      type="button"
      onClick={() => setOpen(!open)}
      className={cn(
        "flex h-11 w-full items-center justify-between rounded-lg border border-input bg-transparent px-2.5 py-1 text-base md:text-sm transition-colors outline-none focus:border-brand-orange-bright focus:ring-1 focus:ring-brand-orange-bright disabled:cursor-not-allowed disabled:opacity-50 bg-white",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className={cn("h-4 w-4 opacity-50 transition-transform", open && "rotate-180")} />
    </button>
  )
})
SelectTrigger.displayName = "SelectTrigger"

export function SelectValue({ placeholder }: { placeholder?: React.ReactNode }) {
  const { value, selectedNode } = useSelectContext()
  const isPlaceholder = !value && !selectedNode

  return (
    <span className={cn("pointer-events-none truncate block", isPlaceholder && "text-muted-foreground")}>
      {selectedNode ? selectedNode : (value ? value : placeholder)}
    </span>
  )
}

export function SelectContent({
  children,
  className,
  position = "popper",
  ...props
}: {
  children: React.ReactNode
  className?: string
  position?: "popper" | "item-aligned"
}) {
  const { open, setOpen } = useSelectContext()

  if (!open) return null

  return (
    <>
      <div 
        className="fixed inset-0 z-40" 
        onClick={() => setOpen(false)} 
      />
      <div
        className={cn(
          "absolute left-0 top-[calc(100%+4px)] z-50 min-w-full w-max overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95 bg-white",
          className
        )}
        {...props}
      >
        <div className="w-full p-1 max-h-[300px] overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  )
}

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, children, value, ...props }, ref) => {
  const { value: selectedValue, onValueChange, setSelectedNode } = useSelectContext()
  const isSelected = selectedValue === value

  // Register the label if it's the currently selected item on mount or when selection changes
  useEffect(() => {
    if (isSelected) {
      setSelectedNode(children)
    }
  }, [isSelected, children, setSelectedNode])

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-4 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        isSelected && "bg-accent text-accent-foreground",
        className
      )}
      onClick={() => onValueChange(value)}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {isSelected && <Check className="h-4 w-4" />}
      </span>
      <span className="block whitespace-nowrap">{children}</span>
    </div>
  )
})
SelectItem.displayName = "SelectItem"
