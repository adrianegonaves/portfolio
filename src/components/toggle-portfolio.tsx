import { BookmarkIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function TogglePortfolio() {
  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
      <BookmarkIcon className="group-data-[state=on]/toggle:fill-foreground" />
      Open to opportunities
    </Toggle>
  )
}
