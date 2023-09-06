function TableSpan({ children, type }) {
  const styles = {
    tableheader:
      " text-xs font-semibold uppercase tracking-wide text-gray-800 ",
    tabledata: "font-semibold text-sm text-gray-800",
    tabledatalast: "font-semibold text-sm text-gray-800",
  };

  return <span className={styles[type]}>{children}</span>;
}

export default TableSpan;
