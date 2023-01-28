type TechStack = {
  [key: string]: {
    url: string;
    name: string;
    icon: string;
  };
};

const techStack: TechStack = {
  html: {
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    name: "HTML 5",
    icon: "vscode-icons:file-type-html",
  },
  css: {
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    name: "CSS 3",
    icon: "vscode-icons:file-type-css",
  },
  js: {
    url: "https://developer.mozilla.org/en-US/docs/Web/javascript",
    name: "JavaScript",
    icon: "vscode-icons:file-type-js-official",
  },
  go: {
    url: "https://go.dev",
    name: "Go",
    icon: "vscode-icons:file-type-go",
  },
  rust: {
    url: "https://www.rust-lang.org/",
    name: "Rust",
    icon: "vscode-icons:file-type-light-rust",
  },
  python: {
    url: "https://www.python.org/",
    name: "Python",
    icon: "vscode-icons:file-type-python",
  },
  laravel: {
    url: "https://laravel.com/",
    name: "Laravel",
    icon: "logos:laravel",
  },
  flutter: {
    url: "https://flutter.dev",
    name: "Flutter",
    icon: "vscode-icons:file-type-flutter",
  },
};

export default techStack;
