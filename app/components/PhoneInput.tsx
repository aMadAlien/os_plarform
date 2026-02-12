import { useState, useRef, useEffect } from "react";
import countries, { type Country } from "~/utils/countries";

function Flag({ code, size = 20 }: { code: string; size?: number }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
      width={size}
      height={Math.round(size * 0.75)}
      alt={code}
      className="phone-flag"
    />
  );
}

function applyMask(digits: string, mask: string): string {
  let result = "";
  let digitIndex = 0;
  for (let i = 0; i < mask.length && digitIndex < digits.length; i++) {
    if (mask[i] === "#") {
      result += digits[digitIndex++];
    } else {
      result += mask[i];
    }
  }
  return result;
}

function getDigits(value: string): string {
  return value.replace(/\D/g, "");
}

function getMaxDigits(mask: string): number {
  return mask.split("").filter((c) => c === "#").length;
}

export default function PhoneInput({
  value,
  onChange,
  errored,
}: {
  value: string;
  onChange: (fullPhone: string) => void;
  errored?: boolean;
}) {
  const [country, setCountry] = useState<Country>(countries[0]);
  const [localValue, setLocalValue] = useState("");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && searchRef.current) {
      searchRef.current.focus();
    }
  }, [open]);

  function handleInput(raw: string) {
    const digits = getDigits(raw);
    const maxDigits = getMaxDigits(country.mask);
    const trimmed = digits.slice(0, maxDigits);
    const formatted = applyMask(trimmed, country.mask);
    setLocalValue(formatted);
    onChange(trimmed ? `${country.dialCode}${trimmed}` : "");
  }

  function selectCountry(c: Country) {
    setCountry(c);
    setOpen(false);
    setSearch("");
    const digits = getDigits(localValue);
    const maxDigits = getMaxDigits(c.mask);
    const trimmed = digits.slice(0, maxDigits);
    const formatted = applyMask(trimmed, c.mask);
    setLocalValue(formatted);
    onChange(trimmed ? `${c.dialCode}${trimmed}` : "");
  }

  const filtered = search
    ? countries.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.dialCode.includes(search) ||
          c.code.toLowerCase().includes(search.toLowerCase())
      )
    : countries;

  const placeholder = country.mask.replace(/#/g, "_");

  return (
    <div className="phone-input-wrapper" ref={dropdownRef}>
      <div className={`phone-input ${errored ? "errored" : ""}`}>
        <button
          type="button"
          className="phone-input__toggle"
          onClick={() => setOpen(!open)}
        >
          <Flag code={country.code} />
          <span className="phone-input__dial">{country.dialCode}</span>
          <svg
            className={`phone-input__arrow ${open ? "phone-input__arrow--open" : ""}`}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <input
          type="tel"
          value={localValue}
          onChange={(e) => handleInput(e.target.value)}
          placeholder={placeholder}
          className="phone-input__field"
        />
      </div>

      {open && (
        <div className="phone-dropdown">
          <input
            ref={searchRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Пошук країни..."
            className="phone-dropdown__search"
          />
          <ul className="phone-dropdown__list">
            {filtered.map((c) => (
              <li key={c.code}>
                <button
                  type="button"
                  className={`phone-dropdown__item ${c.code === country.code ? "phone-dropdown__item--active" : ""}`}
                  onClick={() => selectCountry(c)}
                >
                  <Flag code={c.code} size={18} />
                  <span className="phone-dropdown__item-name">{c.name}</span>
                  <span className="phone-dropdown__item-dial">{c.dialCode}</span>
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="phone-dropdown__empty">Нічого не знайдено</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
