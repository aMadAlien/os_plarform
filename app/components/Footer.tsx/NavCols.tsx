import { Link } from "react-router";
import { navigationFooter } from "./navigation";

export default function NavCols() {
  return (
    <div className="flex gap-5 mt-8">
      {
        navigationFooter.map((data, index) => (
          <div key={index}>
            <div className="font-bold text-base mb-5">{data.title}</div>
            <ul className="flex flex-col gap-4">
              {
                data.list.map((list, index) => (
                  <li key={index} className="nav-link max-w-[220px]"><Link className="!text-white !text-wrap" to={list.to}>{list.title}</Link></li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  )
}
