import { Component, type ReactNode } from "react";
import MapPins from "./components/map-pins";

// Surfaces render/effect errors on screen instead of a blank white page.
class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="size-full overflow-auto bg-white p-[24px] text-[13px] text-black">
          <strong>Runtime error</strong>
          <pre className="mt-[12px] whitespace-pre-wrap">{this.state.error.message}</pre>
          <pre className="mt-[12px] whitespace-pre-wrap text-[11px] text-[#717182]">
            {this.state.error.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <div className="size-full">
        <MapPins />
      </div>
    </ErrorBoundary>
  );
}
