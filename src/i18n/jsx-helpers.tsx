import type { ReactNode } from "react";

export function joinWithBr(parts: string[]): ReactNode {
  return parts.map((part, i) => (
    <span key={i}>
      {i > 0 && <br />}
      {part}
    </span>
  ));
}
