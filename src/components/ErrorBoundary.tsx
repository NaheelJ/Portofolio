import React from "react";

interface State { hasError: boolean; error: Error | null }

export class ErrorBoundary extends React.Component<{ children: React.ReactNode; fallback?: React.ReactNode }, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[ErrorBoundary caught]", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div style={{ padding: 24, color: "#ff4444", background: "#0a0a0a", fontFamily: "monospace", fontSize: 12 }}>
          <b>Runtime Error:</b><br />{this.state.error?.message}
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
