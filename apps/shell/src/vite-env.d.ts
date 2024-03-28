/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    "react-app": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    "vue-app": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    "angular-app": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    // Add any additional props expected by 'react-app' as needed
  }
}
