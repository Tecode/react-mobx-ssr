import { createBrowserHistory, createMemoryHistory } from 'history';
// use this way to fix bug(Invariant Violation: Browser history needs a DOM)
export default (typeof window !== 'undefined'
  ? createBrowserHistory()
  : createMemoryHistory());
