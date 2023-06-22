import React from "react";
import "./listitem.css";

interface ListItemProps {
  status?: `none` | `error` | `alert`;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const ListItem = ({
  status = "none",
  size = "medium",
  label,
  ...props
}: ListItemProps) => {
  const mode = "storybook-listitem--" + status;
  return (
    <button
      type="button"
      className={[
        "storybook-listitem",
        `storybook-listitem--${size}`,
        mode,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
