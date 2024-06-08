import { useState } from "react";

export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleToggleCollapse() {
    setCollapsed((t) => !t);
  }

  return (
    <div className="app">
      <div onClick={handleToggleCollapse}>{title}</div>
      {!collapsed && <div>{children}</div>}
    </div>
  );
}
