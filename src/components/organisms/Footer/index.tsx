import { Link } from "@/components/atoms/Link"
import React from "react"

export const Footer: React.VFC = () => (
  <footer className="footer">
    <small>&copy; 2021- <Link type="blank" href="https://qranoko.jp/">QRANOKO(Qrac / Mainoko)</Link>, <Link type="blank" href="https://www.whyk.dev/">WhyK</Link></small>
  </footer>
)
