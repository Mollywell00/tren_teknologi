const languages = [
  { id: "en", name: "EN" },
  { id: "id", name: "ID" },
  { id: "fr", name: "FR" },
  { id: "dl", name: "DL" },
];

const BoxLanguage = ({ translate, setTranslate }) => {
  return (
    <div className="flex h-10 w-auto items-center justify-center gap-1 text-sm">
      <i className="fa-solid fa-globe text-(--text-color-black) mr-1"></i>
      {languages.map((language) => (
        <p
          key={language.id}
          id={language.id}
          className={`cursor-pointer transition duration-200 px-1 font-semibold ${
            translate === language.id
              ? "border-b-2 border-(--text-color-black) text-(--text-color-black)"
              : "text-(--text-color-black) opacity-80 hover:opacity-100"
          }`}
          onClick={() => setTranslate(language.id)}
        >
          {language.name}
        </p>
      ))}
    </div>
  );
};

export default BoxLanguage;
