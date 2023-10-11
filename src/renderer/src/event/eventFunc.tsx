export function preventDefault(
  e: React.MouseEvent,
  f: (...data: any[]) => void,
  ...params: any[]
): void {
  e.preventDefault()
  f(...params)
}
