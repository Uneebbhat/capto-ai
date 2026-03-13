"use client"

import { usePathname } from "next/navigation"

const useGetPageName = () => {
  const pageName = usePathname()
  const pageSegments = pageName.split("/").filter(Boolean);
  const title = pageSegments.length > 0
    ? pageSegments[0]
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase())
    : "Dashboard";

  return title;
}

export default useGetPageName