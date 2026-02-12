import { Link } from "react-router";
import { navigationFooter } from "./navigation";

export default function NavCols() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-5 mt-8">
      {
        navigationFooter.map((data, index) => (
          <div key={index}>
            <div className="font-bold text-sm md:text-base mb-3 md:mb-5">{data.title}</div>
            <ul className="flex flex-col gap-3 md:gap-4">
              {
                data.list.map((item, i) => (
                  <li key={i} className="nav-link max-w-[220px]"><Link className="!text-white !text-wrap !text-xs md:!text-sm" to={item.to}>{item.title}</Link></li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  )
}
