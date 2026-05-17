import { useState } from "react"

export function useContactDialog() {
  const [open, setOpen] = useState(false)
  return { open, setOpen }
}
