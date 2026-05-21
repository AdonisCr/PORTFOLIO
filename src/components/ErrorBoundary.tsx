import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen bg-base flex items-center justify-center px-4">
            <div className="text-center max-w-md">
              <h1 className="text-6xl font-bold text-accent mb-4">Oups !</h1>
              <p className="text-text-2 text-lg mb-6">
                Une erreur inattendue s'est produite.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-4 rounded-2xl bg-accent text-white font-semibold hover:bg-accent-light transition-all cursor-pointer"
              >
                Recharger la page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
