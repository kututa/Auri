// Minimal JSX global types to satisfy TypeScript when React JSX types are unavailable.
// Remove this file when proper `@types/react` (matching React version) is installed.

declare namespace JSX {
  interface IntrinsicElements {
    // allow any tag name with any props
    [elemName: string]: unknown;
  }
}
