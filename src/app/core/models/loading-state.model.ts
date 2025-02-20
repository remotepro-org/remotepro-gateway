/**
 * Enum representing the loading state of a component or data request.
 * - NOT_LOADED: The initial state, data has not been loaded
 * - LOADING: Data is current being loaded
 * - LOADED: Data has finished loading
 * Example usage:
 * ```typescript
 * loading = LoadingState.NOT_LOADED; // Initial state
 * LoadingState = LoadingState; // Make the enum available for templates
 *
 * if (loading === LoadingState.NOT_LOADED) {
 *   console.log('Data has not been loaded yet.');
 * }
 * ```
 */
export enum LoadingState {
  NOT_LOADED = 'NOT_LOADED',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
}
