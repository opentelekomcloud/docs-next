import { defineCustomElements } from '@telekom/scale-components/loader';
import '@telekom/scale-components/dist/scale-components/scale-components.css';

defineCustomElements();

// Default implementation, that you can customize
export default function Root({children}) {
  return <>{children}</>;
}