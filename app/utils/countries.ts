export interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
  mask: string;
}

const countries: Country[] = [
  { code: "UA", name: "Україна", dialCode: "+380", flag: "🇺🇦", mask: "(##) ###-##-##" },
  { code: "PL", name: "Польща", dialCode: "+48", flag: "🇵🇱", mask: "### ### ###" },
  { code: "DE", name: "Німеччина", dialCode: "+49", flag: "🇩🇪", mask: "### #######" },
  { code: "US", name: "США", dialCode: "+1", flag: "🇺🇸", mask: "(###) ###-####" },
  { code: "GB", name: "Великобританія", dialCode: "+44", flag: "🇬🇧", mask: "#### ######" },
  { code: "CZ", name: "Чехія", dialCode: "+420", flag: "🇨🇿", mask: "### ### ###" },
  { code: "FR", name: "Франція", dialCode: "+33", flag: "🇫🇷", mask: "# ## ## ## ##" },
  { code: "IT", name: "Італія", dialCode: "+39", flag: "🇮🇹", mask: "### ### ####" },
  { code: "ES", name: "Іспанія", dialCode: "+34", flag: "🇪🇸", mask: "### ### ###" },
  { code: "PT", name: "Португалія", dialCode: "+351", flag: "🇵🇹", mask: "### ### ###" },
  { code: "RO", name: "Румунія", dialCode: "+40", flag: "🇷🇴", mask: "### ### ###" },
  { code: "SK", name: "Словаччина", dialCode: "+421", flag: "🇸🇰", mask: "### ### ###" },
  { code: "LT", name: "Литва", dialCode: "+370", flag: "🇱🇹", mask: "### #####" },
  { code: "LV", name: "Латвія", dialCode: "+371", flag: "🇱🇻", mask: "## ### ###" },
  { code: "EE", name: "Естонія", dialCode: "+372", flag: "🇪🇪", mask: "#### ####" },
  { code: "TR", name: "Туреччина", dialCode: "+90", flag: "🇹🇷", mask: "### ### ## ##" },
  { code: "CA", name: "Канада", dialCode: "+1", flag: "🇨🇦", mask: "(###) ###-####" },
  { code: "IL", name: "Ізраїль", dialCode: "+972", flag: "🇮🇱", mask: "## ### ####" },
  { code: "AT", name: "Австрія", dialCode: "+43", flag: "🇦🇹", mask: "### #######" },
  { code: "NL", name: "Нідерланди", dialCode: "+31", flag: "🇳🇱", mask: "## ########" },
  { code: "SE", name: "Швеція", dialCode: "+46", flag: "🇸🇪", mask: "## ### ## ##" },
  { code: "NO", name: "Норвегія", dialCode: "+47", flag: "🇳🇴", mask: "### ## ###" },
  { code: "DK", name: "Данія", dialCode: "+45", flag: "🇩🇰", mask: "## ## ## ##" },
  { code: "FI", name: "Фінляндія", dialCode: "+358", flag: "🇫🇮", mask: "## ### ## ##" },
  { code: "BE", name: "Бельгія", dialCode: "+32", flag: "🇧🇪", mask: "### ## ## ##" },
  { code: "CH", name: "Швейцарія", dialCode: "+41", flag: "🇨🇭", mask: "## ### ## ##" },
  { code: "HU", name: "Угорщина", dialCode: "+36", flag: "🇭🇺", mask: "## ### ####" },
  { code: "BG", name: "Болгарія", dialCode: "+359", flag: "🇧🇬", mask: "### ### ###" },
  { code: "MD", name: "Молдова", dialCode: "+373", flag: "🇲🇩", mask: "## ### ###" },
  { code: "GE", name: "Грузія", dialCode: "+995", flag: "🇬🇪", mask: "### ## ## ##" },
];

export default countries;
