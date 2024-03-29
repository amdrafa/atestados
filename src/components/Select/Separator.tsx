import * as Select from "@radix-ui/react-select";
import { ComponentProps } from "react";

export type SeparatorProps = ComponentProps<typeof Select.Separator>;

export function Separator(props: SeparatorProps) {
  return <Select.Separator {...props} />;
}
